import React from 'react'
import Logoimg from '../../../public/Logoimg.png'

function Leftdiv() {

    const leftdivcls = ' leftdiv bg-[#090944] w-[25vw] h-full flex flex-col items-center gap-3 py-[2rem]  '
    const Logoimmg = 'logoimg w-[12rem] h-48 rounded-full p-3 '
    const imgboxcls = "imgbox p-1 h-[12.6rem] flex items-center justify-center rounded-full"
    const navlink = 'flex gap-1 justify-center '
    const btncls = 'py-2 px-3 bg-transparent border mt-6 text-white relative btncv overflow-hidden '


  return (
    <div>
       <div className={leftdivcls} >
        <div className={imgboxcls} >
          <img src={Logoimg} alt="logo" className={Logoimmg} draggable='false' />
        </div>
        <div className="name text-center flex flex-col gap-2 ">
          <h1 className='text-4xl text-white font-medium '>Aslam Ahyan</h1>
          <span className='text-gray-300 text-[1.1rem] ' >Frontend Developer</span>
          <ul className={navlink} >
            <li><a href="https://www.github.com/geniusahyan"><i class="fa-brands fa-github"></i> </a></li>

            <li><a href="https://www.linkedin.com/in/aslam-alam-305193286/"><i class="fa-brands fa-linkedin"></i> </a> </li>

            <li><a href="https://twitter.com/Aslam_Alam_07"><i class="fa-brands fa-twitter"></i> </a></li>

            <li><a href="https://www.instagram.com/genius._code"> <i class="fa-brands fa-instagram"></i></a> </li>

          </ul>
       </div>

       <button className={btncls} >Download CV</button>
       <span className='text-sm mt-12 text-gray-400 ' >© 2023 All rights reserved</span>
      </div>
    </div>
  )
}

export default Leftdiv
