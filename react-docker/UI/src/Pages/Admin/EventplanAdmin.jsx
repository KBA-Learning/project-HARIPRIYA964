import React,{useState}  from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AdminNavbar from '../../component/AdminNavbar'


const EventplanAdmin = () => {
  const [destination,setDestination] = useState('')
  const [file,setFile] = useState(null)
  const navigate = useNavigate();
 
  
  const handleUpload = async (e)=>{
    e.preventDefault();
   
    const formData = new FormData();
   
    formData.append('destination',destination)
    if(file)formData.append('file',file)
      try{
    const res = await fetch ('/api/addImage',{
      method:'POST',
      body:formData
    });
    if(res.status === 201){
      navigate('/eventplanAdmin')
    }
    else{
      alert('Failed to upload')
    }
    }
    catch(err){
      console.log(err)
    }
  }
  
  
  return (
   <>
   <div className="text-slate-200 bg-black h-[968px] w-[100%] flex" >
    <div className='fixed '>
      <AdminNavbar />
    </div>
    <div className="text-6xl font-light mt-32 w-screen text-center">DESTINATION</div>
    <form onSubmit={handleUpload}>
   
        <label htmlFor="desination" className='' >Destination Name</label>
        <input type="text" id="destination" name="destination" value={destination} onChange={(e)=>setDestination(e.target.value)} className='' /><br />
        <input type="file" accept='image/*' onChange={e => setFile(e.target.files[0]) }  className='pr-[20px]' />
        <button onClick={handleUpload} className='border w-16 mt-10' type='submit'>Upload</button>
   
    </form>  
    </div>
  
    </>


  )
}

export default EventplanAdmin
