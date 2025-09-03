import React from 'react'

function Contact() {
  return (
    <>
      <div
        id="contact"
        className="mt-4 mb-12 py-1 border-yellow-100 shadow-yellow-200 border-1 shadow-sm mx-auto rounded-full bgs-gray-400 w-50"
      >
        <h2 className="text-3xl font-bold text-gray-300 text-center text-shadow-lg text-shadow-gray-300/20 sm:text-shadow-gray-200/10">
          Contact Me
        </h2>
      </div>
      <div className="flex flex-row justify-center items-center gap-5 sm:gap-16 m-8">
        <a href="https://instagram.com/mai_hoon_yogesh" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH7c5cLpGehi0b4iQk90fXUzC9p7Ebla13w&s"
          alt=""
          className='rounded-full size-20 shadow-lg hover:scale-105 transition-transform duration-150'
          />
        </a>

        {/* <a href="https://github.com/YogeshKardam" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt=""
          className='bg-white rounded-full size-20 shadow-lg hover:scale-105 transition-transform duration-150'
          />
        </a> */}

        <a href="https://www.linkedin.com/in/yogesh-kardam/" target="_blank" rel="noopener noreferrer">
          <img src="https://static.vecteezy.com/system/resources/previews/012/660/862/non_2x/linkedin-logo-on-transparent-isolated-background-free-vector.jpg"
          alt=""
          className='rounded-full size-20 shadow-lg hover:scale-105 transition-transform duration-150'
          />
        </a>


      </div>
     </> 
      

  )
}

export default Contact