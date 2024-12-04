import React from 'react';
import { Link } from 'react-router-dom';
import home5 from '../../assets/Images/home5.png';
import home6 from '../../assets/Images/home6.jpg';
import home8 from '../../assets/Images/home8.jpg';
import home9 from '../../assets/Images/home9.jpg';
import home10 from '../../assets/Images/home10.jpg';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import Navbar1 from '../../component/Navbar1';
;

const Home = () => {
  return (
    <>
  <Navbar1 />
  <div  className="bg-cover bg-center h-[910px] bg-[url('./assets/Images/home4.jpg')] ">
  <Navbar />
  <div className=" pb-1 pl-10 w-[20vh] h-[20vh]">
      <img src={home5} alt="" />
    </div>
    <div className="text-6xl pt-[10vh] pl-10 font-serif text-white">
      <span>A PERFECT DAY FOR A </span>
      <p className="pt-8">PERFECT LIFE</p>
    </div>
    <div className="text-center pt-4 mt-6  font-serif border w-[15vh] h-[6vh] ml-[100px] border-WHITE  text-white">

      <Link to ="/about">GET STARTED</Link>
    </div>
  </div>


  <div className="font-serif static">
  <div className=" mt-[13vh] mb-[5vh] ml-[30vh] flex ">
  <div>
    <img src={home6} alt="" className="w-[62vh] h-[62vh]" />
    <p className="pt-5 pb-[10vh] pl-[20vh] text-xl ">BEAUTIFUL HAIR</p>
    </div>
    <div>
      <span className="mr-[15vh] float-right text-5xl font-light  mt-10">KEEP YOUR LIFE
        <p className="pt-6 font-light">SHORT AND SWEET </p>
      </span>
      <p className="mt-[18vh] ml-[12vh] text-xl">Explore your journey....</p>
      <div>
        <img src={home8} alt="" className="w[52vh] h-[52vh] ml-[20vh] mt-[13vh] " />
        <p className="pt-5 pb-[10vh] pl-[35vh] text-xl ">CUSTOM WEDDING DRESS</p>
        </div>
       </div>
       </div>
       <div className="bg-gray-100 bg-cover bg-center h-[600px] w-[100%] mb-[10vh] pt-16  ">
       <div className="relative  flex">
       <img src={home9} alt="" className="w-[62vh] h-[62vh] ml-[32vh] mb-[20vh] absolute  -left-4 -top-80 "/>
       <p className=" mt-[31vh] ml-[47vh] text-xl relative ">WEDDING BOUQUETS</p>
       <img src={home10} alt="" className="w[52vh] h-[52vh] ml-[126vh] absolute   -left-32 -top-32 " />
       <p className=" mt-[40vh] ml-[57vh] text-xl relative ">WEDDING PHOTOGRAPHY</p>
       </div>
       </div>
       </div>
       <Footer />
  
    </>
  )
}

export default Home
