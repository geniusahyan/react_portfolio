import React from 'react'

function Projectbox(props) {
  return (
    <div className=' servicebox flex flex-col w-[20rem] justify-center bg-[#151540] items-center h-[25rem]  rounded-3xl ' >
    <h1 className='text-4xl mt-4 text-white ' >{props.title}</h1>
    <p className='px-10 text-justify mt-2 text-gray-400 '> {props.paragraph} </p>
  </div>
  )
}

export default Projectbox
