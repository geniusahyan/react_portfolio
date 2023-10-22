import React from 'react'
import { useState } from 'react'
import Container from './assets/components/Container'
function App() {
  const [left, setleft] = useState(null)
  const [top, settop] = useState(null)
  document.addEventListener('mousemove', (e)=>{
    setleft(e.pageX*-1/15)
    settop(e.pageY*-1/15)
  })
  return (
    <>
          <div className='body_back' style={{left:left, top:top}} ></div>
          <Container />
    </>
  )
}

export default App
