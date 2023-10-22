import React from "react";
import htmli from '../../../public/htmli.png'
import cssi from '../../../public/cssi.png'
import jsi from '../../../public/jsi.png'
import reacti from '../../../public/reacti.png'
import tailwindi from '../../../public/tailwindi.png'

function About() {
  return (
    <div className="p-6 aboutcontain overflow-y-auto pt-[3rem] bg-[#090933] w-full ">
      <h1 className="text-white textabout text-4xl font-serif ">
        About
        <span className="text-[#67e448] ml-[0.5rem] ">Me</span>
      </h1>
      <div className="aboutcontain px-2 mt-[4rem]  h-[26rem] ">
      <p className="text-white abouttext text-justify px-2  ">
        Hello👋, eveone ! I'm Aslam Ahyan, a self-taught developer
        with a passion for technology and a knack for crafting comprehensive
        software solutions as a full stack developer. 💼 Professional
        Background: As a self-taught developer, I've honed my skills through a
        dedication to continuous learning and hands-on experience. My journey
        started with a curiosity-driven exploration of programming languages and
        has evolved into a dynamic career where I specialize in both front-end
        and back-end development. 🛠️ Technical Expertise: 🔹 Full Stack
        Development: Proficient in developing end-to-end applications, utilizing
        a variety of programming languages, frameworks, and databases. 🔹
        Front-End: Skilled in creating engaging and responsive user interfaces
        with HTML, CSS, JavaScript, and modern frameworks like React, Angular,
        and Vue.js. 🔹 Back-End: Experienced in server-side logic, databases,
        and server configurations using languages such as Python, Node.js, Ruby,
        and PHP, coupled with databases like MySQL, MongoDB, and PostgreSQL. 🌟
        Key Strengths: ✅ Strong Problem-Solving Abilities: Known for my knack
        to identify issues, optimize solutions, and enhance existing systems for
        optimal performance. ✅ Effective Communication: Adept at collaborating
        with cross-functional teams and stakeholders to deliver cohesive and
        user-friendly applications. ✅ Continuous Learner: Passionate about
        staying updated with the latest industry trends and emerging
        technologies to provide innovative solutions. 📈 Vision: I am driven to
        contribute my expertise and enthusiasm to exciting projects that
        challenge me to push boundaries and create meaningful impacts. My goal
        is to continually evolve and innovate in the tech landscape, fostering a
        positive difference in the lives of users through cutting-edge software
        solutions. Let's connect and explore opportunities to collaborate and
        create something extraordinary! 🚀
      </p>
      <div className="imgbx px-5 ">
        <img src={htmli} alt="" />
        <img src={cssi} alt="" />
        <img src={jsi} alt="" />
        <img src={tailwindi} alt="" />
        <img className="ml-3" src={reacti} alt="" />
      </div>
      </div>
    </div>
  );
}

export default About;
