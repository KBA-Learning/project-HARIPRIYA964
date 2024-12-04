import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar1 from '../../component/Navbar1'
import Navbar from '../../component/Navbar'
import home5 from '../../assets/Images/home5.png'
import Footer from '../../component/Footer'

const Reservation = () => {
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [email,setMail]=useState('');
  const [contact,setContact] = useState('');
  const [date,setDate] = useState('');
  const [time,setTime] = useState('');
  const [guestno,setGuestno] = useState('');
  const [message,setMessage] = useState('');
    const navigate=useNavigate()

    const handleRes =async (e)=>{
        e.preventDefault();
        const newres={firstname,lastname,email,contact,date,time,guestno,message}
        
        const res= await fetch("/api/addrsvp",{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(newres)
        })
        console.log(res);        
        if(res.ok){
            alert("Resevation  added Sucessfully")
            navigate('/viewadmin')
        }else{
            alert("Failed to add Reservation")
        }
    }
  return (
   <>
   <Navbar1 />
   <div className="bg-cover bg-center   text-white  bg-[url('./assets/Images/rsvp1.jpg')] h-[450px] w-[100%]">
   <Navbar />
   <div className="w-[20vh] h-[7vh] pl-16 font-serif flex  ">
                <img src={home5} alt="" className="" />
            </div>
            <p className="text-6xl pt-[5vh] pl-[80vh] ">RESERVATION</p>
        
        <div className="justify-space-between space-x-3 pl-[93vh] font-serif flex">
          <p className="text-l">Home</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mt-1">
            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
          <p>RSVP</p>
        </div>
      
   </div>
   <div className="font-serif mt-[10vh]">
   <div className="text-5xl text-center"> 
        <span>JOINED TO RESERVATION</span>

      </div>
      <div className="border border-1 w-[80vh] h-[78vh] bg-white border-black  ml-[60vh] mt-[10vh] mb-10 ">
        <form action="" onSubmit={handleRes}>
      <div className="flex text-xl italic">
      <div className="ml-[9vh] mt-10">
            <span>First Name</span>
          </div>
          <div className="mt-10 ml-[28vh]">
            <span>Second Name</span>
          </div>
      </div>
      <div className="flex  ">
      <div className="ml-[9vh] mt-4">
            <input type="text" name="firstname" id="firstname" 
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
             placeholder="Jhon" required className="border-none outline-none text-gary-500" />
            <span className="text-gray-300">_________________________________</span>
          </div>
          <div className="mt-4 mr-[6vh]">
            <input type="text" name="lastname" id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Doe" required className="border-none outline-none text-gray-500 " />
            <span className="flex text-gray-300 ">_________________________________</span>
          </div>
      </div>
      <div className="flex text-xl italic">
          <div className="ml-[9vh] mt-10">
            <span>Email</span>
          </div>
          <div className="mt-10 ml-[32vh]">
            <span>Phone No</span>
          </div>
        </div>
        <div className="flex  ">
          <div className="ml-[9vh] mt-4">
            <input type="mail" name="email" id="email"
            value={email}
            onChange={(e) => setMail(e.target.value)}
             placeholder="example@gmail.com"  required className="border-none outline-none text-gary-500" />
            <span className="text-gray-300">_________________________________</span>
          </div>
          <div className="mt-4 mr-[6vh]">
            <input type="number" name="contact" id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
             placeholder="+!(234) 567 890" required className="border-none outline-none text-gray-500 " />
            <span className="flex text-gray-300 ">_________________________________</span>
          </div>
        </div>
        <div className="flex ">
          <div className="ml-[9vh] mt-10">
            <span className="text-xl italic">Date & Time *</span><br />
            <div className="text-gary-500">
              <input type="date" required  
              name='date'
              id='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-none outline-none text-gary-500" />
              <input type="time" name="time" id="time"
              value={time} 
              onChange={(e) => setTime(e.target.value)}
              className="mt-3 ml-2" required />
            </div>
           </div>
           <div className="mt-10 ml-[13vh] text-xl italic" >
            <span>How many guests are you bringing? *</span>
            <div className="ml-[1vh] mt-4 ">
            <input type="number" name="guestno" id="guestno"
            value={guestno}
            onChange={(e) => setGuestno(e.target.value)}
             placeholder="Guset Number" required className="border-none outline-none text-gray-500" />
            </div>
          </div>
           </div>
           <div className=" ">
            <div className="ml-[9vh] mt-10 text-xl italic ">
              <span >Message</span>
            </div>
            <textarea rows="8" cols="50"
            name='message'
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
             placeholder="Hello there!" className="ml-[9vh] mt-3 border-none outline-none"></textarea>
          </div>
          <div className="border border-1 w-[70vh] h-10 border-gray-300 ml-12 text-center text-gray-700 pt-2">
            <button type='submit'>RESERVATION</button>
          </div>
          </form>
      </div>

   </div>

  
        
        
      <Footer />
   </>
  )
}

export default Reservation
