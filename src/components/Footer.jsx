import React from 'react'

function Footer() {
  return (
    <main className='bg-[#5E50A1] p-10 mt-20'>
        <div className='w-2/3 mx-auto'>
            <img src='/images/peworld-white.png'/>
            <p className='mt-5 text-white'>Lrem ipsum dolor sit amet, consectetur <br/> adipiscing elit. In euismod ipsum et dui <br/> rhoncus auctor.</p>
            <hr className='mt-14'/>
            <div className='flex justify-between mt-3 text-white'>
                <p>2020 Peworld. All right reserved</p>
                <span className='flex gap-10'>
                    <p>Telepon</p>
                    <p>Email</p>
                </span>
            </div>
        </div>
    </main>
  )
}

export default Footer