import React from 'react'
import home5 from '../assets/Images/home5.png'

const Footer = () => {
  return (
    <div className="bg-black bg-cover bg-center   mt-24  h-[580px] w-[100%]">
          
      <img src={home5} alt="" className="w-[30vh] h-[20vh]  pt-24 pl-32" />
    
    
    
      <div className="flex text-white pb-10 ml-[40vh] font-serif ">
      <div className="flex">
        <div>
        <p className="text-2xl">EXPLORE</p>
        <p className="pt-10 text-xl font-light">Home</p>
        <p className="pt-3 text-xl font-light">Project</p>
        <p className="pt-3 text-xl font-light">Team</p>
        <p className="pt-3 text-xl font-light">Contact</p>
      </div>
        <div >
          <div className="flex">
            <p className=" font-light f pl-[10vh] italic pt-2">Instagram</p>
            <p className=" font-light f pl-[8vh] italic pt-2">Behance</p>
            <p className=" font-light f pl-[8vh] italic pt-2">Dripple</p>
          </div>
          <div className="pl-[10vh] mt-8 text-l">
            <a href="" >weddwedding@gmail.com</a>
            <p className="pt-2">+1 (234) 567 890</p>
          </div>
        </div>
      </div>
      <div className="ml-[30vh] ">
        <p className="text-2xl">LET'S TALK ABOUT YOUR FUTURE</p>
        <p className="text-2xl">WEDDING!</p>
        <p className=" pr-[29vh] leading-loose pt-4"> future wedding would focus on a beautiful venue, personalized decor, heartfelt vows, and joyful celebrations with friends and family.</p>
        <div className="ml-[18vh] mt-2">
          <button className="text-center pt-2 mt-6  font-serif border w-[15vh] h-[6vh] border-WHITE">GET STARTED</button>
        </div>
      </div>
     </div>
     <div className="mt-2 text-white ">
      <span  className="w-[100%">______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</span>
      
   
        <footer className="flex">
          <p className="text-left pl-[40vh] bg-black text-white py-2 max-auto  ">&copy; This Page All rights reserverd</p>
          <p className="bg-black text-white py-2 max-auto pl-[60vh]">Privacy Policy</p>
        <p className="bg-black text-white py-2 max-auto pl-16">Terms & Services</p>
        </footer>
        
     
     </div>

    </div>
    



  


 
  
  )
}

export default Footer
