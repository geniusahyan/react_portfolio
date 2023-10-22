import React from 'react'
import Projectbox from './Projectbox'

function Project() {
  return (
    
        <div  className=' services flex flex-col  overflow-y-auto bg-[#1a1a4b] '>
            <div className="projecttext">
                <h1 className='text-4xl text-white my-12 ml-6 font-serif ' >My <span className='text-cyan-500'>Projects</span> </h1>
            </div>
            <div className="projectbox flex flex-wrap w-full gap-3 justify-center ">
                <Projectbox title='nothing created' paragraph="i'll create after it all" />
                <Projectbox title='nothing created' paragraph="i'll create after it all" />
                <Projectbox title='nothing created' paragraph="i'll create after it all" />
                <Projectbox title='nothing created' paragraph="i'll create after it all" />
                <Projectbox title='nothing created' paragraph="i'll create after it all" />
                <Projectbox title='nothing created' paragraph="i'll create after it all" />
            </div>
        </div>
        
  )
}

export default Project
