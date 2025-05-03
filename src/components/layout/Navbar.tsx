'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';
import type { User } from '@supabase/supabase-js';

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener?.subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    window.location.reload();
  };

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
              href="/dashboard/courses" 
              className="text-[#006494] hover:text-[#0582CA] transition"
            >
              Courses
            </Link>
          </div>
        </div>

        {/* Auth Button */}
        <div className="flex gap-4">
          {!user && pathname !== '/login' && (
            <Link 
              href="/login" 
              className="px-4 py-2 text-[#006494] hover:text-[#0582CA] transition"
            >
              Login
            </Link>
          )}
          {user && (
            <button
              onClick={handleSignOut}
              className="px-4 py-2 rounded-md transition"
              style={{
                background: '#ffd6e0', // light pink
                color: '#006494',
                border: 'none',
                fontWeight: 500,
              }}
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;