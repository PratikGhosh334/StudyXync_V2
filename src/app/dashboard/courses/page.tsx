'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock data for courses (replace with actual API call)
const initialCourses = [
  { id: 1, name: 'BCA - Bachelor of Computer Applications', subjects: 42 },
  { id: 2, name: 'BBA - Bachelor of Business Administration', subjects: 36 },
  { id: 3, name: 'B.Com - Bachelor of Commerce', subjects: 38 },
  { id: 4, name: 'BSc IT - Bachelor of Science in Information Technology', subjects: 40 },
  { id: 5, name: 'BA - Bachelor of Arts', subjects: 45 },
  { id: 6, name: 'BSc - Bachelor of Science', subjects: 48 },
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [courses, setCourses] = useState(initialCourses);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDF2FB] via-[#E2EAFC] to-[#D7E3FC] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#003554] to-[#006494] text-transparent bg-clip-text mb-4 md:mb-0">
            Available Courses
          </h1>
          <Link
            href="/dashboard/courses/new"
            className="px-4 py-2 bg-gradient-to-r from-[#0582CA] to-[#00A6FB] text-white rounded-md hover:opacity-90 transition shadow-sm"
          >
            Add New Course
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-[#B6CCFE] rounded-lg focus:ring-2 focus:ring-[#0582CA] focus:border-transparent bg-white/50 text-[#003554] placeholder-[#006494]/50"
            />
            <svg
              className="absolute right-3 top-3 h-6 w-6 text-[#006494]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              href={`/dashboard/courses/${course.id}`}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-[#ABC4FF] hover:shadow-lg transition duration-200 hover:border-[#0582CA]">
                <h3 className="text-xl font-semibold text-[#003554] mb-2">
                  {course.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#006494]">
                    {course.subjects} Subjects
                  </span>
                  <span className="text-[#0582CA] group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#006494] text-lg">
              No courses found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}