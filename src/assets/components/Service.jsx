import React from 'react'
import Servicebox from './servicebox'
import tailwindi from '../../../public/tailwindi.png'


function Service() {

    const serTitle = 'Responsive Web'
    const paraser = "I thrive on building websites that adapt flawlessly across devices. Let's connect and transform your web presence into something truly exceptional! 🚀 "

  return (
       <div className=' services flex flex-wrap gap-3 overflow-y-auto bg-[#151549] '>
            <h1 className='text-4xl text-white my-12 ml-6 font-serif ' >Service <span className='text-cyan-500' >Offored</span> </h1>
            <div className="serviceboxx w-full flex flex-wrap justify-center gap-3">
                <Servicebox img={tailwindi} title={serTitle} paragraph={paraser} />
                <Servicebox img={tailwindi} title={"I'll change it"} paragraph={paraser} />
                <Servicebox img={tailwindi} title={"I'll change it"} paragraph={paraser} />
                <Servicebox img={tailwindi} title={"I'll change it"} paragraph={paraser} />
                <Servicebox img={tailwindi} title={"I'll change it"} paragraph={paraser} />
                <Servicebox img={tailwindi} title={"I'll change it"} paragraph={paraser} />
          </div>
    </div>
  )
}

export default Service
