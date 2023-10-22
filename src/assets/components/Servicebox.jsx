import React from 'react'

function Servicebox(props) {
  return (
    <div className=' servicebox flex flex-col w-[20rem] bg-[#151540] items-center h-[25rem] pt-12 rounded-3xl ' >
      <div className="serimgbox w-[10rem] bg-[#0dd4d4] flex justify-center items-center ">
        <img src={props.img} alt="" />
      </div>
      <h1 className='text-4xl mt-4 text-white ' >{props.title}</h1>
      <p className='px-10 text-justify mt-2 text-gray-400 '> {props.paragraph} </p>
    </div>
  )
}

export default Servicebox
