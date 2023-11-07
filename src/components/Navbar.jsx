import React from 'react'

function Navbar() {
  return (
    <div className='container mx-auto'>
        <headers className="flex p-5 items-center justify-between">
            <img src='/images/peworld-purple.png'/>
            <div className='flex gap-5'>
                <button className='outline rounded outline-blue-500 px-4 py-1'>Masuk</button>
                <button className='rounded bg-blue-400 px-4 py-1 text-white'>Daftar</button>
            </div>
        </headers>
    </div>
  )
}

export default Navbar