'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  // @ts-ignore
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDF2FB] via-[#E2EAFC] to-[#D7E3FC] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-[#ABC4FF]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#003554] to-[#006494] text-transparent bg-clip-text">
            Create Your Account
          </h2>
          <p className="mt-2 text-[#006494]">
            Join our community of educators
          </p>
        </div>

        <form className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-[#003554]">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="mt-1 block w-full px-3 py-2 border border-[#B6CCFE] rounded-md shadow-sm focus:ring-2 focus:ring-[#0582CA] focus:border-transparent bg-white/50 text-[#003554]"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-[#003554]">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="mt-1 block w-full px-3 py-2 border border-[#B6CCFE] rounded-md shadow-sm focus:ring-2 focus:ring-[#0582CA] focus:border-transparent bg-white/50 text-[#003554]"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#003554]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-[#B6CCFE] rounded-md shadow-sm focus:ring-2 focus:ring-[#0582CA] focus:border-transparent bg-white/50 text-[#003554]"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#003554]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-[#B6CCFE] rounded-md shadow-sm focus:ring-2 focus:ring-[#0582CA] focus:border-transparent bg-white/50 text-[#003554]"
            />
          </div>

          {/* Institute Name */}
          <div>
            <label htmlFor="institute" className="block text-sm font-medium text-[#003554]">
              Name of Institute
            </label>
            <input
              type="text"
              id="institute"
              name="institute"
              required
              className="mt-1 block w-full px-3 py-2 border border-[#B6CCFE] rounded-md shadow-sm focus:ring-2 focus:ring-[#0582CA] focus:border-transparent bg-white/50 text-[#003554]"
            />
          </div>

          {/* ID Verification Upload */}
          <div>
            <label className="block text-sm font-medium text-[#003554]">
              Institute ID Verification
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-[#B6CCFE] rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-[#006494]"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-[#006494]">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-[#0582CA] hover:text-[#00A6FB] focus-within:outline-none"
                  >
                    <span className="px-2">Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={() => setIsUploading(true)}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-[#006494]">
                  PDF, PNG, JPG up to 10MB
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-r from-[#0582CA] to-[#00A6FB] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0582CA] transition-all duration-200"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-[#006494]">
            Already have an account?{' '}
            <Link 
              href="/login" 
              className="font-medium text-[#0582CA] hover:text-[#00A6FB] transition"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}