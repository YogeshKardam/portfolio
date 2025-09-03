import rect, {useState} from "react";

function InfoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="mx-auto my-10 p-5 border-2 border-yellow-200 rounded-lg w-11/12 md:w-9/12 lg:w-8/12 bgs-gray-400 shadow-lg shadow-yellow-200/20 grid md:grid-cols-2 gap-4">
        {/* Image */}
        <div>
          <img src="/me01.jpeg" alt="" className={`rounded-3xl ${currentIndex == 0 ? "block" : "hidden"}`} />
          <img src="https://www.sujal.info/_next/image?url=%2Fcollege.jpg&w=640&q=75" alt="" className={`rounded-3xl ${currentIndex == 1 ? "block" : "hidden"}`} />
          <img src="https://www.sujal.info/_next/image?url=%2Fwd.jpg&w=640&q=75" alt="" className={`rounded-3xl ${currentIndex == 2 ? "block" : "hidden"}`} />
        </div>

        {/* Content */}

        <div className="grid grid-rows-6 gap-1">
          {/* title */}
          <div>
            <div className={`text-neutral-100 font-bold text-3xl my-2 ${currentIndex === 0 ? "block" : "hidden"}`}>Introduction</div>
            <div className={`text-neutral-100 font-bold text-3xl my-2 ${currentIndex === 1 ? "block" : "hidden"}`}>Education</div>
            <div className={`text-neutral-100 font-bold text-3xl my-2 ${currentIndex === 2 ? "block" : "hidden"}`}>Hobbie</div>
          </div>

          {/* desc */}
          <div className="row-span-4 text-gray-300 ">
            <div className={currentIndex === 0 ? "block" : "hidden"}>Hi, I’m Yogesh Kardam! I’m passionate about web development and love creating modern, user-friendly projects. I enjoy solving real-world problems through technology and always look forward to learning and collaborating. Beyond coding, I’m also curious about music, gaming, and exploring new ideas.</div>
            <div className={currentIndex === 1 ? "block" : "hidden"}>I am a student at NSUT (Netaji Subhas University of Technology), Delhi, currently enrolled in the B.Tech Electronics and Communication Engineering (ECE) program. Passionate about technology, I focus on building innovative solutions and enhancing my skills in web development and problem-solving. At NSUT, I am actively learning, collaborating, and growing in the field of engineering and technology.</div>
            <div className={currentIndex === 2 ? "block" : "hidden"}>I enjoy exploring web development and working on creative projects that challenge my problem-solving skills. Apart from coding, I love gaming, music, and learning new technologies, which keep me motivated and inspired.</div>
          </div>
          <div className="row-span-1 flex justify-center items-center">
            <button 
            className="bg-yellow-300 text-gray-800 font-semibold p-1 mx-2 rounded-full shadow-md hover:bg-yellow-400 transition duration-200"
            onClick={() => {
                    if (currentIndex <= 0){
                        setCurrentIndex(2);
                    }else{
                        setCurrentIndex(currentIndex - 1);
                    }
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-arrow-left h-5 w-5 text-black dark:text-white-400 group-hover/button:rotate-12 transition-transform duration-300"><path d="M5 12l14 0"></path><path d="M5 12l6 6"></path><path d="M5 12l6 -6"></path></svg>
            </button>
            <button
                className="bg-yellow-300 text-gray-800 font-semibold p-1 rounded-full shadow-md hover:bg-yellow-400 transition duration-200"
                onClick={() => {
                    if (currentIndex >= 2) {
                        setCurrentIndex(0);
                    }else{
                        setCurrentIndex(currentIndex + 1);
                    }
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-arrow-right h-5 w-5 text-black dark:text-white-400 group-hover/button:rotate-12 transition-transform duration-300"><path d="M19 12l-14 0"></path><path d="M19 12l-6 6"></path><path d="M19 12l-6 -6"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCarousel;
