'use client';

export default function NewCoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDF2FB] via-[#E2EAFC] to-[#D7E3FC] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#003554] to-[#006494] text-transparent bg-clip-text mb-8">
          Add New Course
        </h1>
        
        {/* Add your form here */}
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-[#ABC4FF]">
          <form className="space-y-6">
            {/* Form fields will go here */}
          </form>
        </div>
      </div>
    </div>
  );
}