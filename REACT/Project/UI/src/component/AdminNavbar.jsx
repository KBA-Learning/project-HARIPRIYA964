import React from 'react'
import { Link } from 'react-router-dom'
import home5 from '../assets/Images/home5.png'
import admin from '../assets/Images/admin.png'
import Logout from './Logout'

const AdminNavbar = () => {
  const userType = localStorage.getItem('userType');
  console.log(userType)
  return (
    <>
    <div className="">
    <div className="w-[10vh] h-[10vh]">
        <img src={home5} alt="" />
    </div>
    <div className="border border-1 border-white  w-[25vh] h-[90vh]  ml-[5vh] text-lg font-light font-serif  ">
    <div className="">
            <div className="flex">
                <img src={admin} alt="" className="w-12 h-12 mt-4 ml-3 " />
                <span className="font-serif ml-1 mt-[3vh]">Admin</span>
            </div>
            </div>
            <div className="flex">
            {userType === 'admin' &&(<div className="font-serif mt-10 leading-loose  ml-10 text-white ">
            <Link to="/admindashboard">DASHBOARD</Link><br />
                <Link to="/eventplanAdmin">USER EVENTS PLAN</Link><br />
              
                <Link to="/admindecoration">USER DECORATION</Link><br />
                <Link to="/adminreservation">USER RESERVATION</Link><br />
               
               <Logout />
            </div>)}
<div className='=flex'>
  
</div>
            </div>
        </div>

    </div>
    </>
  )
}

export default AdminNavbar
