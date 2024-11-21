'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDF2FB] via-[#E2EAFC] to-[#D7E3FC] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-[#ABC4FF]">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#003554] to-[#006494] text-transparent bg-clip-text">
            Welcome Back
          </h2>
          <p className="mt-2 text-[#006494]">
            Sign in to continue to StudyXync
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-[#003554] mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none relative block w-full px-3 py-2 border border-[#B6CCFE] rounded-md focus:ring-2 focus:ring-[#0582CA] focus:border-transparent bg-white/50 text-[#003554] placeholder-[#006494]/50"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-[#003554] mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-[#B6CCFE] rounded-md focus:ring-2 focus:ring-[#0582CA] focus:border-transparent bg-white/50 text-[#003554] placeholder-[#006494]/50"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#006494] hover:text-[#0582CA]"
              >
                {showPassword ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#0582CA] focus:ring-[#0582CA] border-[#B6CCFE] rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[#006494]">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-[#0582CA] hover:text-[#00A6FB] transition"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-r from-[#0582CA] to-[#00A6FB] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0582CA] transition-all duration-200"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-[#006494]">
            Don&apos;t have an account?{' '}
            <Link 
              href="/register" 
              className="font-medium text-[#0582CA] hover:text-[#00A6FB] transition"
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* Social Login Options */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#B6CCFE]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white/70 text-[#006494]">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-[#B6CCFE] rounded-md shadow-sm bg-white/50 text-sm font-medium text-[#006494] hover:bg-white/80 transition"
            >
              <span className="sr-only">Sign in with Google</span>
              Google
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-[#B6CCFE] rounded-md shadow-sm bg-white/50 text-sm font-medium text-[#006494] hover:bg-white/80 transition"
            >
              <span className="sr-only">Sign in with Microsoft</span>
              Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}