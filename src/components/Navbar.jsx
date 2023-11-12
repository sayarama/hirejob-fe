import Link from 'next/link';
import {React, useState} from 'react'



function Navbar() {
  const [ isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='bg-white shadow'>
    <div className='container mx-auto'>
      <div className='flex items-center justify-between p-5'>
        <Link href='/'>
        <img src='/images/peworld-purple.png' alt='Logo' />
        </Link>

        <div className='hidden md:flex gap-5'>
          <button className='outline rounded outline-[#5E50A1] px-4 py-1'>
            Masuk
          </button>
          <button className='rounded bg-[#5E50A1] px-4 py-1 text-white'>
            Daftar
          </button>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>

    {isOpen && (
      <div className='bg-[#5E50A1] p-2 md:hidden'>
        <button className='block text-white py-1 px-4'>Masuk</button>
        <button className='block text-white py-1 px-4'>Daftar</button>
      </div>
    )}
  </div>
  )
}

export default Navbar