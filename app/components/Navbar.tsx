'use client';



import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {

  const handleLogout = async () => {
    
  };

  const { user } = useAuth()
  

  if(!user) return null


  return (
    <header className='bg-gray-900 text-gray-200 shadow-sm'>
      <div className='boundary '>
        <div className='flex justify-between items-center h-18'>
          {/* left side */}
          <Link
            href='/'
            className='flex-center pt-4 text-gray-200 no-underline'
          >
            <h1 className='text-xl font-semibold'>AI Newsletter</h1>
          </Link>

          {/* right side */}
          <div className='flex-center gap-8'>
            <p className='flex flex-col '>
              <span className='text-xs text-gray-200'>Welcome,</span>
              <span className='text-sm text-gray-200'>{user.email}</span>
            </p>
            <button
              onClick={handleLogout}
              className='inline-flex items-center  border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors'
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
