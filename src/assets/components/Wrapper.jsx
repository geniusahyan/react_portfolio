import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Leftdiv from './Leftdiv'
import Rightdiv from './Rightdiv'
import About from "./About";
import Service from "./Service";
import Project from "./Project";
import Contact from "./Contact";

function Wrapper() {
    const homedivfstcls = 'h-[80vh] w-[80vw] bg-blue-900 border-[0.01rem] border-cyan-500 rounded-md flex gap-0.3 homedivfstcls '
  return (
    <div className={homedivfstcls} >
            <Leftdiv/>
            <Routes>
                <Route exact path="/home" element={<Rightdiv/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/service" element={<Service/> }></Route>
                <Route path="/projects" element={<Project/> }></Route>
                <Route path="/contact" element={<Contact/> }></Route>
            </Routes>
    </div>
  )
}

export default Wrapper
