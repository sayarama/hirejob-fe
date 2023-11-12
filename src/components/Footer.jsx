import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <main className='bg-[#5E50A1] p-10'>
        <div className='w-2/3 mx-auto'>
            <Image src='/images/peworld-white.png' width={178} height={50} alt="icon"/>
            <p className='mt-5 text-white'>Peworld adalah teman setia Anda dalam menemukan <br/> peluang karir yang sesuai dengan impian dan potensi Anda.</p>
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