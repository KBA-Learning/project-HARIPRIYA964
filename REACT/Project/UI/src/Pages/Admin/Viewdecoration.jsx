import React,{useState,useEffect} from 'react'
import AdminNavbar from '../../component/AdminNavbar';
import deco from '../../assets/Images/decoration.jpg'

const Viewdecoration = () => {
    const [decorations, setDecorations] = useState([]);
    useEffect(() => {
        const fetchDecorations = async () => {
            try {
              const response = await fetch('/api/alldecoration', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
                credentials: 'include', // Include cookies with the request
              });
          
              if (!response.ok) {
                throw new Error('Unauthorized access');
              }
          
              const decorations = await response.json();
              setDecorations(decorations)
              console.log(decorations);
            } catch (error) {
              console.error('Error fetching reservations:', error);
            }
          };
    
    
        fetchDecorations();
      }, );
  return (
    <>
     <div className="text-slate-200 bg-black h-[968px] w-[100% flex items-center ">
     
       <AdminNavbar />
       </div>
      <h2 className="text-4xl mt-[-900px] text-white p-6 font-bold text-center mb-6 pl-[300px]">All Decorations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
        {decorations.map((decoration) => (
          <div
            key={decoration._id}
            className="bg-white shadow-md rounded-lg p-4 border border-red-200 w-[300px] h-[400px] ml-[400px]" 
          >
            <h3 className="text-2xl text-center text-red-900 font-bold mb-16">{decoration.username}</h3>
         <div>   <img src={deco} alt=""  className='w-[200px] h-[200px] mt-[-50px] ml-[35px] mb-5 '/></div>
           <strong className="text-black ml-10">Flower:</strong> <span className='ml-[50px] text-black'>{decoration.flower}</span>
           <br />
            <strong  className="text-balck ml-10">Color:</strong> <span  className='ml-[56px] text-black'>{decoration.color}</span>
            <br />
            <strong  className="text-black ml-10">Price:</strong> <span  className='ml-[60px] text-black'>{decoration.price}</span><br />
           <button className='border border-1 mt-9 ml-20'>Update</button>
           <button className='border border-1  ml-10'>Remove</button>
          </div>
        ))}
      </div>
    
    </>
   
  )
}

export default Viewdecoration
