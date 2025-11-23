'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/client';


export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  // // Check if user is already logged in and redirect to /dashboard
  // useEffect(() => {
  //   const checkUser = async () => {
  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser();
  //     if (user) {
  //       router.replace('/dashboard');
  //     }
  //   };

  //   checkUser();
  // }, [router, supabase.auth]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setMessage(null);

  }



  return (
    <div className='min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex-center py-12px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div className='text-center'>
          <h1 className=' text-gray-900 leading-10'>
            Personalized <br /> AI Newsletter
          </h1>
          <p className='text-xl text-gray-600'>
            {isSignUp ? 'Create your account' : 'Sign in to your account'}
          </p>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8'>
          <form onSubmit={handleAuth} className='space-y-6'>
            {error && (
              <div className='bg-red-50 border border-red-200 rounded-md p-4'>
                <p className='text-sm text-red-600'>Error: {error}</p>
              </div>
            )}

            {message && (
              <div className='bg-green-50 border border-green-200 rounded-md p-4'>
                <p className='text-sm text-green-600'>Message: {message}</p>
              </div>
            )}

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email address
              </label>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                placeholder='Enter your email'
              />
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete={isSignUp ? 'new-password' : 'current-password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                placeholder='Enter your password'
              />
            </div>

            <div>
              <button
                type='submit'
                disabled={isLoading}
                className={` ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isLoading ? (
                  <div className='flex items-center'>
                    <svg
                      className='animate-spin -ml-1 mr-3 h-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3.042 7.938l3-2.647z'
                      ></path>
                    </svg>
                    {isSignUp ? 'Creating account...' : 'Signing in...'}
                  </div>
                ) : isSignUp ? (
                  'Create Account'
                ) : (
                  'Sign In'
                )}
              </button>
            </div>
          </form>

          <div className='mt-6 flex-center gap-2'>
            <span>
              {isSignUp
                ? 'Already have an account? '
                : "Don't have an account? "}
            </span>
            <a
              type='button'
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError(null);
                setMessage(null);
              }}
            >
              {isSignUp
                ? 'Sign in'
                : "Sign up"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
