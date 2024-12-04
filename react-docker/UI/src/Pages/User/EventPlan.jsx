import React,{useState} from 'react'
import Navbar1 from '../../component/Navbar1'
import Navbar from '../../component/Navbar'
import home5 from '../../assets/Images/home5.png'

const EventPlan = () => {
  return (
   <>
   <Navbar1 />
   <div className="bg-cover bg-center   text-white h-[450px] bg-[url('./assets/Images/event.jpg')] ">
   <Navbar />
   <div className="w-[20vh] h-[20vh]  pb-1 pl-10">
        <img src={home5} alt="" />
      </div>
      <div className="mb-10">
        <p className="text-6xl pb-[1vh] pl-[70vh] ">EVENT PLANNING</p>
      
        <div className="justify-space-between space-x-3 pl-[80vh] font-serif flex">
          <p className="text-l">Service</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mt-1">
            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
          <p>Event planning</p>
      </div>
    </div>
    </div>
    <div className="mt-[10vh] mb-[9vh] font-serif">
      <span className="pl-[80vh] text-6xl font-light">DESTINATION</span>
      <div className="flex space-x-[100px] ml-[23vh] mt-[5vh]">
        <div className="border border-1 w-[45vh] h-[43vh] bg-white border-black  pt-3 ">
        <span className=" pl-10 pl-10">OUT DOOR</span>
        <img src="/IMAGE/event2.jpg" alt="" className="w-[380px] h-[250px] pl-10 mt-7" />
        <div className="border border-1 w-[20vh] h-10 border-gray-300 ml-12 text-center text-gray-700 pt-2 mt-8 ml-[120px] " >
            <button>ADD</button>
          </div>
        </div>
        </div>
        </div>
  

   </>
  )
}

export default EventPlan
