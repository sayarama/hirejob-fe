import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function TalentList() {
  return (
    <>
    <header>
        <Navbar/>
        <div className='bg-[#5E50A1]'>
            <div className='container mx-auto p-4 text-white'>
                <h2 className='text-2xl'>Top Jobs</h2>
            </div>
        </div>
    </header>
    {/* Section 1 */}
    <main className='min-h-[60vh] bg-[#dfdfdf]'>
        <div className='container'>
            
        </div>
    </main>

    {/* Footer */}
    <Footer/>
    </>
  )
}

export default TalentList