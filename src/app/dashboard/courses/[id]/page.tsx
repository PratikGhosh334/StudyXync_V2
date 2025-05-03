'use client';
import { useState, use, useCallback, useEffect } from 'react';
import { supabase } from '@/utils/supabaseClient';
import { useRouter } from 'next/navigation';

// Define the Note type
interface Note {
  id: number;
  course_id: string;
  file_path: string;
  title: string;
  description?: string;
  uploaded_by: string;
  created_at: string;
}

// Define the props type
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function CourseDetailPage({ params }: PageProps) {
  const { id } = use(params); // Unwrap the params Promise
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const fetchNotes = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('course_id', id)  // Using unwrapped id
        .order('created_at', { ascending: false });

      if (error) throw error;
      setNotes(data || []);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }, [id]); // Using unwrapped id in dependency array

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  // Add this useEffect to handle auto-hiding of success message
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(null);
      }, 1000); // 1000ms = 1 second

      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [success]);

  const handleUpload = async () => {
    if (!file || !title) {
      setError('Please provide both a title and a file');
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(null);

    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError || !user) {
        throw new Error('Please sign in to upload notes');
      }

      // Check for duplicate file name in the course folder
      const { data: existingFiles } = await supabase.storage
        .from('course-notes')
        .list(id);

      const isDuplicate = existingFiles?.some(
        existingFile => existingFile.name === file.name
      );

      if (isDuplicate) {
        throw new Error('A file with this name already exists. Please rename your file and try again.');
      }

      // Create unique filename
      const timestamp = new Date().getTime();
      const uniqueFileName = `${timestamp}-${file.name}`;
      const filePath = `${id}/${uniqueFileName}`;

      // Upload file to storage
      const { error: uploadError } = await supabase.storage
        .from('course-notes')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Insert note metadata with course_id and user_id
      const { error: dbError } = await supabase
        .from('notes')
        .insert({
          course_id: id, // Using unwrapped id
          file_path: filePath,
          title: title.trim(),
          description: description?.trim() || null,
          uploaded_by: user.email, // This should match the RLS policy
          user_id: user.id // Add this if you update the table structure
        });

      if (dbError) {
        // Cleanup uploaded file if database insert fails
        await supabase.storage
          .from('course-notes')
          .remove([filePath]);
        throw dbError;
      }

      // Success! Clear form and refresh
      setTitle('');
      setDescription('');
      setFile(null);
      setSuccess('Note uploaded successfully!');
      fetchNotes();
    } catch (error) {
      console.error('Upload error:', error);
      setError(error instanceof Error ? error.message : 'Error uploading note');
    } finally {
      setUploading(false);
    }
  };

  const handleDownload = async (filePath: string, title: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('course-notes')
        .download(filePath);

      if (error) throw error;

      // Create a download link
      const url = window.URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = title; // Use the note title as the download name
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    } catch (error) {
      console.error('Download error:', error);
      setError('Error downloading file');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Course Notes</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-600 rounded">
            {success}
          </div>
        )}

        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
        />
        
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-gray-700 focus:outline-none focus:border-blue-500 min-h-[100px]"
        />
        
        <div className="flex gap-4 items-center mb-4">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => {
              setFile(e.target.files?.[0] || null);
              setError(null);
              setSuccess(null);
            }}
            className="text-gray-700"
          />
          <button
            onClick={handleUpload}
            disabled={uploading}
            className={`px-6 py-2 rounded text-white transition-colors ${
              uploading 
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {uploading ? 'Uploading...' : 'Save Note'}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Notes Uploaded</h2>
        {notes.length === 0 ? (
          <p className="text-lg text-gray-600 text-center py-8">No notes uploaded yet.</p>
        ) : (
          <div className="space-y-4">
            {notes.map((note) => (
              <div key={note.id} className="border rounded p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium text-blue-800">{note.title}</h3>
                    {note.description && (
                      <p className="text-gray-600 mt-2">{note.description}</p>
                    )}
                    <div className="mt-2 text-sm text-gray-500">
                      Uploaded by: {note.uploaded_by}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownload(note.file_path, note.title)}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors flex items-center gap-2"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
