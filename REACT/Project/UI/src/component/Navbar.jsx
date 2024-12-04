import React from 'react'
import {Link} from 'react-router-dom'
import Logout from './Logout'

const Navbar = () => {
 const userType = localStorage.getItem('userType');
  return (
    <>
   {userType === 'user' &&(
    <div className="pt-4  text-lg font-light flex  justify-space-between space-x-12 py-3  font-serif  pl-[1280px] text-white">
     
      <Link to='/home' >HOME</Link>
     <Link to="/about">ABOUT</Link>
      <Link to="/services">SERVICES</Link>
      <Link to="/rsvp">RSVP</Link>
      {/* <Link to="/contact">CONTACT</Link>  */}
      <Logout />
    </div>)}
    </>
  )
}

export default Navbar
