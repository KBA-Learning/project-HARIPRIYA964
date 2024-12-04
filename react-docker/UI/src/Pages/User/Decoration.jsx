import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import Navbar1 from '../../component/Navbar1'
import Navbar from '../../component/Navbar'
import home5 from '../../assets/Images/home5.png'
import { useNavigate } from 'react-router-dom'


const Decoration = () => {
  const [decorations, setDecorations] = useState([]); // Single object or null
  const navigate=useNavigate()

  useEffect(() => {
    const fetchDecorations = async () => {
      try {
        const response = await fetch('/api/getalldecoration', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          
          // Ensure data is an array
          if (Array.isArray(data)) {
            setDecorations(data);
          } else {
            console.error('Expected an array, but received:', data);
            setDecorations([]);
          }
        } else {
          console.error('Failed to fetch decorations:', response.statusText);
          setDecorations([]);
        }
      } catch (error) {
        console.error('Error fetching decorations:', error);
        setDecorations([]);
      }
    };
  
    fetchDecorations();
  }, []);
  const addDecoration = async (decoration) => {
    try {
      const response = await fetch('/api/adddecor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(decoration)
      });
  
      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        navigate('/services')
      } else {
        alert('Failed to add decoration. Please try again.');
      }
    } catch (error) {
      console.error('Error adding decoration:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  

  return (
   <>
   <Navbar1 />
   <div className="bg-cover bg-center   text-white h-[450px]  bg-[url('./assets/Images/about1.jpg')] ">
   <Navbar />
   <div className="w-[20vh] h-[20vh]  pb-1 pl-10">
        <img src={home5} alt="" />
      </div>
      <div className="mb-10">
        <p className="text-6xl pb-[1vh] pl-[75vh] ">DECORATION</p>
      
        <div className="justify-space-between space-x-3 pl-[85vh] font-serif flex">
          <p className="text-l">Service</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mt-1">
            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
          <p>Decoration</p>
      </div>
    </div>
   </div>
   <div className="mt-[15vh] mb-[8vh] font-serif ">
   <span className=" text-6xl font-light ml-[500px]">DECORATION PRICING PACKAGES</span>
   <div className="flex ">
   <div className="container mt-12 gap-5  mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
          {decorations.length > 0 ? (
            decorations.map((decoration) => (
              <div
                className="border border-black p-6 rounded-lg shadow-lg"
                key={decoration._id} >
                 <div className="mt-6 text-center">
                  <span className="text-3xl italic">PACKAGES</span>
                </div>
                <div className=" mt-3  text-justify">
                  <p>A basic wedding package typically includes venue, officiant, photography, decorations,providing essential services for a simple celebration.</p>
                </div>
                <div className="ml-2 mt-4 text-gray-300">
                <span>_________________________________________________</span>
                </div>
                <span className="mt-4 ml-2 text-xl italic text-gray-600">Flower</span>
                <h3 className="text-xl font-bold mb-2 text-center">
                  {decoration.flower}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Color: {decoration.color}
                </p>
                <p className="text-gray-700 text-center">Price: ₹{decoration.price}</p>
                <div className="border border-1 border-gray-300 w-[40vh] h-[5vh] mt-10 ml-[2vh]">
                  <button onClick={() => addDecoration(decoration)} className="ml-[18vh] mt-3" type='submit'>ADD</button>
                </div>
                <div className="ml-[5vh] mt-10">
                  <span className=" text-slate-700">*Terms and Conditions apply</span>
                </div>
              </div>
              
            ))
          ) : (
            <div className="text-center text-3xl font-bold text-fuchsia-700">
              No decoration Available
            </div>
          )}
        </div>
      </div>

   
   </div>
             
    </>
  )
}

export default Decoration
