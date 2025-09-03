import React from 'react'

function SkillCard({ imgurl, title }) {
  return (
    <>
    <div className='bg-neutral-800 p-2 rounded-lg w-30 h-25 mx-auto my-auto hover:scale-95 transition-transform duration-200 hover:shadow-lg shadow-lg shadow-neutral-200/5 hover:shadow-yellow-200/20 border-spacing-x-0.5 border-white'>
        <div className='flex justify-center items-center mt-0.5'>
            <img src={imgurl} alt="" className='size-15' />
        </div>
        <h2 className='text-center text-white text-lg font-bold'>{title}</h2>
    </div>
    </>
  )
}

export default SkillCard