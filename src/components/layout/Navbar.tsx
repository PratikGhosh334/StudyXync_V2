'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#EDF2FB] to-[#E2EAFC] shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-[#003554] to-[#006494] text-transparent bg-clip-text"
          >
            StudyXync
          </Link>
          
          {/* Nav Links */}
          <div className="hidden md:flex gap-6">
            <Link 
              href="/dashboard" 
              className="text-[#006494] hover:text-[#0582CA] transition"
            >
              Dashboard
            </Link>
            <Link 
              href="/dashboard/notes" 
              className="text-[#006494] hover:text-[#0582CA] transition"
            >
              Notes
            </Link>
            <Link 
              href="/dashboard/courses" 
              className="text-[#006494] hover:text-[#0582CA] transition"
            >
              Courses
            </Link>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          <Link 
            href="/login" 
            className="px-4 py-2 text-[#006494] hover:text-[#0582CA] transition"
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className="px-4 py-2 bg-gradient-to-r from-[#0582CA] to-[#00A6FB] text-white rounded-md hover:opacity-90 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;