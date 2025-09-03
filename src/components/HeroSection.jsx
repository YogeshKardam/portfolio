import React from 'react'

function HeroSection() {
  return (
    <>
    <div className='flex justify-center bg-hero-pattern'>
        <div className='grid grid-cols-2 gap-4 bg-opacity-50 rounded-lg w-auto px-7' >
            <div className='bgs-red-500 w-auto sm:h-55 h-55 my-2 sm:p-5 py-10 justify-center items-center inline-block'>
                <h1 className='text-2xl sm:text-5xl font-bold text-white sm:pt-10'>
                    Hi <span className='text-lg sm:text-3xl'>There,</span>
                </h1>
                <h1 className='sm:text-2xl text-xl font-semibold text-white'>
                     I am <span className='bg-yellow-500 px-1 py-1 sm:pb-1 sm:py-0 rounded-2xl sm:text-2xl text-lg text-black shadow-sm hover:shadow-lg hover:shadow-yellow-300/20'>Yogesh.</span>
                </h1>
                <h1 className='sm:text-lg text-sm text-white'>
                    A passionate <span className='text-xl font-bold'>Web Developer</span> & <span className='text-xl font-bold'>IT Enthusiast 🚀</span> 
                </h1>
            </div>
            <div className='bdg-blue-500 w-auto sm:h-55 h-55 my-2 flex justify-center items-center'>
                <img src="/hero-img.jpeg" alt="" className='object-cover sm:size-70 size-55 rounded-2xl'/>

            </div>
        </div>
        
    </div>
    <div className='lg:px-50 md:px-15 px-5' >
        <div className="bg-neutral-700 h-0.5 w-full flex justify-center mx-auto mt-10"></div>
    </div>
    
    </>
  )
}

export default HeroSection