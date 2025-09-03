import {useState} from 'react'

function Navbar() {
  const [active, setActive] = useState("home");
  const navItems = ["home", "skills", "projects", "contact"];

  return (
    <>
      <div className='flex justify-center items-center h-16 mb-7 mt-1 sticky top-0 z-50 w-full backdrop-blur'>
          <nav className='bg-neutral-700 shadow-md text-white py-2 rounded-3xl px-7'>
            <ul className="flex space-x-8 md:space-x-10 justify-center items-center">
              {navItems.map((item) => (
                <li key={item}>
                  <a className="hover:text-gray-300" onClick={() => setActive(item)} href={`#${item}`}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                  <div className={`bg-yellow-400 w-full h-0.5 sm:h-1 rounded-full ${active === item ? "" : "hidden"}`}></div>
                </li>
              ))}
            </ul>
          </nav>
          
      </div>
      
    </>
  )
}

export default Navbar