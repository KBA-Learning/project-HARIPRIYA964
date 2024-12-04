import React, {useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import AdminNavbar from '../../component/AdminNavbar';
const Admindec = () => {
    const [flower, setFlower] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const Adddec = async (e) => {
    e.preventDefault();
    const adddec = {
      flower,
      color,
      price
    };
    try {
        const res = await fetch('/api/adddecoration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(adddec),
          credentials: 'include',
        });
        if (res.status===200) {
            alert('added to decoration successfully!');
            console.log('added to decorations successfully!');
            navigate('/viewdecoration');
          } else {
            const errorData = await res.json();
            alert(errorData.message );
          }
        } catch (error) {
          alert('An unexpected error occurred!');
        }
    
}


    
  return (
  <>
 <div className=" bg-black h-[968px] w-[100% flex items-center ">
 
        <AdminNavbar />
        <div className='text-white mt-[-700px]'>
    <Link to='/admindec' className='pl-[1100px] text-xl '>ADD DECORATION</Link>
    <Link to='/viewdecoration' className='pl-[50px] text-xl'>VIEW DECORATION</Link>
  </div>
    <div className="w-full mt-[-100px] max-w-md p-8 bg-white rounded-lg shadow-md ml-[800px] fixed">
      <form onSubmit={Adddec} className="space-y-4 mt-10">
        <div>
          <h1 className='text-center pt-[-10px]'>ADD DECORATION</h1>
          <label htmlFor="flower" className="block text-xl font-medium text-black">Type of Flower</label>
          <input
            type="text"
            id="flower"
            name="flower"
            value={flower}
            onChange={(e)=>setFlower(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-black-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter Flower name"
            required
          />
        </div>

        <div>
          <label htmlFor="color" className="block text-xl font-medium text-black">Type of Color</label>
          <input
            id="color"
            name="color"
            value={color}
            onChange={(e)=>setColor(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-black-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter Color Name"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-xl font-medium text-black">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-black-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter price"
            min="0"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-900 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Add Decoration
        </button>
      </form>
    </div>
  </div>
  
  </>
  )
}

export default Admindec
