import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import NaveMenu from './NaveMenu'
import Wrapper from './Wrapper'

function Container() {
  return (
    <div className='w-full h-[80vh] absolute top-[53%] left-[52%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center gap-2 containermobile ' >
      <Wrapper />
      <NaveMenu />
    </div>
  )
}

export default Container
