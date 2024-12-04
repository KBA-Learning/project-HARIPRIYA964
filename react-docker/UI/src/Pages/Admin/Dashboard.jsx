import React from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from '../../component/AdminNavbar'

const Dashboard = () => {
  return (
  <>

    <div className="text-slate-200 bg-black h-[968px] w-[100% flex">
  
 <AdminNavbar />
 
 <div className="border border-1 w-[40vh] h-[20vh]  border-white  ml-[20vh] pt-3  mt-[100px]  ">
      <Link to='/adminres' className="ml-[22vh] text-3xl font-serif " >Reservation</Link>
    </div>
    <div className="border border-1 w-[40vh] h-[20vh]  border-white  ml-[10vh]  pt-3 mt-[100px]">
      <span className="ml-[23vh] text-3xl font-serif " >Event plans</span>
    </div>
    <div className="border border-1 w-[40vh] h-[20vh]  border-white  ml-[10vh] pt-3 mt-[100px]">
        <Link to='/admindec' className="ml-[24vh] text-3xl font-serif " >Decoration</Link>
        </div>
    
 </div>
 
           

 
 
    

 </>
  )
}

export default Dashboard
