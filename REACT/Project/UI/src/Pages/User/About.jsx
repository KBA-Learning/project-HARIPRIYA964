import React from 'react'
import Navbar1 from '../../component/Navbar1'
import Navbar from '../../component/Navbar'
import home5 from '../../assets/Images/home5.png'
import about2 from '../../assets/Images/about2.jpg'
import Footer from '../../component/Footer'

const About = () => {
  return (
    <>
    <Navbar1 />
    <div className="bg-cover bg-center  text-white h-[400px] w-[100%] bg-[url('./assets/Images/about1.jpg')] ">
    <Navbar />
    <div className="w-[20vh] h-[8vh] pl-16 font-serif flex  ">
          <img src={home5} alt="" className="" />
        </div>
        <p className="text-6xl pt-[5vh] pl-[80vh] ">ABOUT US</p>
        
        <div className="justify-space-between space-x-3 pl-[88vh] font-serif flex">
          <p className="text-l">Home</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mt-1">
            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
          <p>About</p>
        </div>
      </div>

      <div className="mt-[10vh] mb-[10vh] ml-[30vh] flex">
        <img src={about2} alt="" className="w-[50vh] h-[70vh] relative " />
        <div className="border border-1 w-[35vh] h-[19vh] bg-white border-black absolute -right-4 -bottom-60 mr-[110vh] " >
          <p className="font-light pt-4 pl-4 ">WE SAID YES!</p>
          <p className="text-justify  font-light pl-4 pr-4 pt-2 " >Join us as we celebrate our love and upcoming wedding. Save the date and share our joy!"</p>
        <div className="justify-space-between space-x-3 font-serif flex ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 font-light ml-8 mt-2">
            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
          <p className="pt-2 font-light">GET STARTED</p>
        </div>
      </div>
      <div className="font-light font-serif mt-16">
        <span className=" text-6xl pl-[25vh] pt-20">ABOUT US</span>
        <p className="text-justify pl-60 pr-40 pt-10 leading-loose ">Welcome to our WEDD! Here, you’ll find all the details about our love story, wedding plans, and celebrations. Explore our journey together, from our first date to the proposal. We’ve included information about the ceremony, venue, and accommodations for our guests. 
          Thank you for sharing this special moment. </p>
          <div className="text-center pt-4 mt-16  font-serif border w-[15vh] h-[6vh] ml-[240px] border-WHITE ">
            <button>READ MORE</button>
          </div>
      </div>
    </div>

    
    <div className="mt-[15vh] mb-[15vh] font-serif bg-gray-100 bg-cover h-[700px] w-[100%]">
      <span className="pl-[30vh] text-6xl font-light pt-10">OUR VALUES</span>
      <div className="flex space-x-9 ml-[30vh] mt-[10vh]">
       
        <div className="border border-1 w-[45vh] h-[22vh] bg-white border-black  ">
          <div className="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ml-10 mt-[3vh] text-gray-500 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <p className="pl-4 pt-[3vh] text-2xl text-slate-950">HONESTY</p>
          </div>
          <p className=" pl-10 pr-10 pt-2 text-justify font-light leading-relaxed text-gray-500">Our wedding website embodies honesty and transparency, sharing our unique love story, including the challenges we've faced and the joy we've found.
            We appreciate your support and look forward to celebrating together!</p>
        </div>
        <div className="border border-1 w-[45vh] h-[22vh] bg-white border-black  ">
          <div className="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ml-10 mt-[3vh] text-gray-500 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
            
            <p className="pl-4 pt-[3vh] text-2xl text-slate-950">LEARNING</p>
          </div>
          <p className=" pl-10 pr-10 pt-2 text-justify font-light leading-relaxed text-gray-500">WEDD highlights our commitment to growth and learning together. We believe in evolving as individuals and as a couple, and we’re excited to share this journey with you!</p>
        </div>
        <div className="border border-1 w-[45vh] h-[22vh] bg-white border-black  ">
          <div className="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ml-10 mt-[3vh] text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            
            
            <p className="pl-4 pt-[3vh] text-2xl text-slate-950">TRUST</p>
          </div>
          <p className=" pl-10 pr-10 pt-2 text-justify font-light leading-relaxed text-gray-500">Emphasizes the importance of trust in our relationship. We’ve built a strong foundation through open communication and support,creating a safe space for growth.</p>
        </div>
      </div>


      <div className="flex space-x-9 ml-[30vh] mt-[3vh]">
        <div className="border border-1 w-[45vh] h-[22vh] bg-white border-black  ">
          <div className="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ml-10 mt-[3vh] text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
            </svg>
            
            <p className="pl-4 pt-[3vh] text-2xl text-slate-950">PASSION</p>
          </div>
          <p className=" pl-10 pr-10 pt-2 text-justify font-light leading-relaxed text-gray-500"> Embodies the passion we share for each other and life. We cherish every moment together,
             from adventures to quiet nights, and we can’t wait to celebrate with you!</p>
        </div>
        <div className="border border-1 w-[45vh] h-[22vh] bg-white border-black  ">
          <div className="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 ml-10 mt-[3vh] text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path strokeLinecap="round" strokeLinejoin ="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            
            <p className="pl-4 pt-[3vh] text-2xl text-slate-950">VISION</p>
          </div>
          <p className=" pl-10 pr-10 pt-2 text-justify font-light leading-relaxed text-gray-500">Our wedding website captures our vision for a bright future together. We aspire to build a life rich in love, adventure, and meaningful connections, and we’re excited to share it with you!</p>
        </div>
        <div className="border border-1 w-[45vh] h-[22vh] bg-white border-black  ">
          <div className="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 ml-10 mt-[3vh] text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            
            <p className="pl-4 pt-[3vh] text-2xl text-slate-950">FUTURE</p>
          </div>
          <p className=" pl-10 pr-10 pt-2 text-justify font-light leading-relaxed text-gray-500">Our wedding website symbolizes our hopes for the future. We dream of building a life together, filled with shared experiences, growth, and joy, and we can’t wait to celebrate with you!</p>
        </div>
      </div>
    </div>
    <Footer />

</>
  )
}

export default About
