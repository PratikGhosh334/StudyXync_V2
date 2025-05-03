'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabaseClient';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        router.replace('/dashboard/courses');
      }
    });

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        router.replace('/dashboard/courses');
      }
    });
    return () => listener?.subscription.unsubscribe();
  }, [router]);

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/login', // After Google login, user returns to /login
      },
    });
  };

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <button
        onClick={handleGoogleLogin}
        className="px-6 py-3 text-[#006494] hover:text-[#0582CA] transition bg-white rounded-md shadow-lg border border-[#ABC4FF] font-medium text-lg"
        style={{ minWidth: 220 }}
      >
        Sign in with Google
      </button>
    </div>
  );
}
