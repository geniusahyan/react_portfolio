import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

function Rightdiv() {

  const [text] = useTypewriter({
    words: ['Full Stack Developer' , 'Programmer' , 'Self-Thought Developer'],
    loop:{},
  })


    const rightdivcls = ' rightdiv w-[70%] bg-[#09093d] h-[36.1rem] flex justify-center flex-col items-center '
  return (
      <div className={rightdivcls} >
        <h1 className='text-white rightlogo text-7xl font-serif' >Aslam Ahyan</h1>
        <div className="profession">
          <p className='text-white text-2xl cursortext ' >I Am  
            <span className='text-green-400 w-72 ml-1 cursortext' >
              {text}
            </span> 
            <span className='text-blue-500' ><Cursor/></span>
          </p>
        </div>
      </div>
  )
}

export default Rightdiv
