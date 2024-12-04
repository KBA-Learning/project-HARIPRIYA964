import React from 'react'
import home1 from '../../src/assets/Images/home1.png'
import home2 from '../../src/assets/Images/home2.png'
import home3 from '../../src/assets/Images/home3.png'

const Navbar1 = () => {
  return (
    <div className="bg-neutral-100 text-gray-500 flex  justify-space-between space-x-3 py-3 pl-[20vh] font-serif ">
    <div className="flex mt-3">
      <span>Call Us for Consultation </span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 mt-1 ml-4">
      <path fillRule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
        clipRule="evenodd" />
      </svg>
      <span>+1 (234) 567 890</span>
    </div>

    <div className="bg-neutral-100 text-gray-500 flex  justify-space-between space-x-3 pl-[125vh] font-serif  ">
     
      <img src={home1} alt="home1" className="w-7 h-7 mt-2 " />
      <img src={home2} alt="home2" className="w-11 h-11" />
      <img src={home3} alt="home3" className="w-8 h-8 mt-1.5" />

    </div>

  </div>
  )
}

export default Navbar1
