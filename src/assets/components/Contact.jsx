import React from 'react'

function Contact() {

    const chatleftdiv ="oportunity flex flex-col justify-center items-center w-[83%] mx-auto bg-[#393977] h-[7rem] ml-8 rounded-md ";
    const chatleft = "conleft flex flex-col w-[40%] bg-[#1c1c5f] border-r-[0.01rem] h-full py-12 gap-3 ";
    const chatright = "conright flex w-[60%] bg-[#1c1cf] h-full py-12 gap-3 p-4 justify-center ";

  return (
    <div className='bg-[#1c1c64] w-full contactuper flex ' >

        <div className={chatleft} >
            <div className="contacttext mb-3">
                <h1 className='text-4xl text-white  ml-6 font-serif ' >Lets <span className='text-cyan-500'>Chat</span> </h1>
            </div>

            <div className={chatleftdiv} >
            <i class="fa-solid fa-location-dot"></i>
            <h1>Motihari-Bihar, India</h1>
            </div>

            <div className={chatleftdiv} >
            <i class="fa-solid fa-envelope-open-text"></i>
            <h1>aslamalam078523@gmail.com</h1>
            </div>

            <div className={chatleftdiv} >
            <i class="fa-solid fa-clipboard-check"></i>
            <h1>Available for website developer </h1>
            </div>

        </div>

        <div className={chatright} >
            <form className='flex flex-wrap form mt-16 ' action="">
                <div className="rightleft w-[13rem] ">
                    <input type="text" placeholder='Your name' name="" id="name" />
                    <input type="email" placeholder='Your email' name="" id="email" />
                    <input type="about" placeholder='About Message' name="About" id="about" />
                    <input onClick={(e)=>{
                        e.preventDefault()
                    }} type="submit" name="" id="submit" />
                </div>
                <textarea placeholder='Write message' className='w-[11rem] h-[9rem] ml-3 mt-5 bg-transparent text-white pt-2 font-mono ' name="" id="textarea" cols="30" rows="4"></textarea>
            </form>
        </div>
    </div>
  )
}

export default Contact
