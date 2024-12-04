import React from 'react'
import { Link } from 'react-router-dom'
import Navbar1 from '../../component/Navbar1'
import Navbar from '../../component/Navbar'
import home5 from '../../assets/Images/home5.png'
import icon from '../../assets/Images/icon.svg'
import Footer from '../../component/Footer'

const Services = () => {
  return (
   <>
   <Navbar1 />
   <div className="bg-cover bg-center h-[400px] w-[100%] text-white bg-top bg-[url('./assets/Images/services1.jpg')] ">
   <Navbar />
   <div className="w-[20vh] h-[8vh] pl-16 font-serif flex  ">
     <img src={home5} alt="" className="" /> 
   </div>
   <p className="text-6xl pt-[5vh] pl-[80vh] ">SERVICES</p>
   <div className="justify-space-between space-x-3 pl-[88vh] font-serif flex">
          <p className="text-l">Home</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mt-1">
            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
          <p>services</p>
        </div>
   </div>
   <div className="mt-[15vh] mb-[10vh] font-serif">
   <span className="pl-[65vh] text-6xl font-light">YOUR WEDDING IS ON US</span>
   <div className="flex space-x-20 ml-[55vh] mt-[5vh]">
   <div className="border border-1 w-[45vh] h-[35vh] bg-white border-black  ">
   <div className="">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 ml-10 mt-[3vh]  ">
   <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
   </svg>
   <p className="pl-[8vh] pb-[1vh] mt-9 text-2xl text-slate-950">EVENT PLANNING</p>
   </div>
   <p className=" pl-10 pr-10 pt-2 text-justify font-light leading-relaxed text-gray-500"> Event planning involves organizing, coordinating, and executing events. Key steps include budgeting, selecting venues, hiring vendors, managing logistics, and ensuring guest satisfaction. 
    Communication and creativity are essential for success.</p>
    <div className="flex">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mt-3 ml-10 text-gary-500">
    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"  clipRule="evenodd" />
    </svg>
    <Link to="/eventPlan" className="text-gray-500 mt-3 ml-2">READ MORE</Link>
    </div>
   </div>

   <div className="border border-1 w-[45vh] h-[35vh] bg-white border-black  ">
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 ml-10 mt-[3vh]  ">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <p className="pl-[8vh] pb-[1vh] text-2xl text-slate-950 mt-9">DECORATION</p>
            </div>
            <p className=" pl-10 pr-10 pt-2 text-justify font-light leading-relaxed text-gray-500">A wedding decoration website showcases creative themes, elegant designs, and customizable decor options. It offers inspiration, expert tips,
               and a gallery of previous events to help couples envision their perfect day.</p>
               <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mt-3 ml-10 text-gary-500">
                  <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
                <Link to="/decoration" className="text-gray-500 mt-3 ml-2">READ MORE</Link>
            </div>
            </div>
   </div>
   </div>

   <div className="bg-gray-100 bg-cover bg-center   mt-32 pt-10  font-serif font-light h-[800px] w-[100%]">
        
        <span className="pl-[80vh] text-5xl font-light text-slate-800">HOW IT WORKS</span>
        <div>
        <div className="flex mt-10 ml-[30vh]">
          <span className="">_________________________________________________</span>
          <span className="ml-[10vh]">____________________________________________________</span>
          <span className="ml-[10vh]">_________________________________________________</span>
        </div>
        <div className="flex mt-[2vh] ml-[32vh] text-gray-500">
          <p >ONE</p>
          <p className="ml-[47vh]">TWO</p>
          <p className="ml-[47vh]">THREE</p>
        </div>
        <div className="flex mt-[1vh] ml-[32vh] text-2xl font-light">
          <span>PLANNING</span>
          <span className="ml-[38vh]">CONCEPT</span>
          <span className="ml-[39vh]">DEVELOPMENT</span>

        </div>
        <div className="flex mt-[2vh] ml-[32vh] text-gray-500 pr-[30vh] text-justify" >
          <p>Wedding planning involves organizing all aspects of a wedding, from budget and venue selection to guest lists and vendor coordination, ensuring a smooth,
             memorable event tailored to the couple’s vision.</p>
             <p className="pl-[12vh]">A wedding concept encompasses the overall theme and style of the celebration, reflecting the couple's personality through colors,
               decor, and ambiance, creating a unique and memorable experience for guests.</p>
               <p className="pl-[11vh]"> Involves the process of planning and organizing a wedding, from initial concept creation to final execution,
                 ensuring all details align with the couple's vision for their special day.</p>
        </div>
        
          <div className="flex mt-10 ml-[30vh]">
            <span className="">_________________________________________________</span>
            <span className="ml-[10vh]">____________________________________________________</span>
          </div>
          <div className="flex mt-[2vh] ml-[32vh] text-gray-500">
            <p >FOUR</p>
            <p className="ml-[47vh]">FIVE</p>
            
          </div>
          <div className="flex mt-[1vh] ml-[32vh] text-2xl font-light">
            <span>IMPLEMENTATION</span>
            <span className="ml-[30vh]">FINAL RESULT</span>
          </div>
          <div className="flex mt-[2vh] ml-[32vh] text-gray-500 pr-[39vh] text-justify" >
            <p> The planned details on the wedding day, coordinating with vendors, managing schedules, and ensuring everything runs smoothly to create a memorable experience for the couple and guests.</p>
            <p className="pl-[17vh]">The inal result reflects the successful execution of plans, featuring joyful celebrations,stunning decor, heartfelt vows, and memorable moments, creating a unique experience that resonates with the couple and guests.</p>
            <div className="ml-[20vh]">
                <Link to='/services'>
                <button className="text-center pt-2 mt-6  font-serif border w-[15vh] h-[6vh] border-black">GET STARTED</button>
                </Link>
              
            </div>
          </div>
        </div>
    
</div>
<Footer />
      
   </>
  )
}

export default Services
