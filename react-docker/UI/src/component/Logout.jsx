import React from 'react'
import {useNavigate} from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = async() =>{
        await fetch('/logout',{
            method:'GET',
            credentials:'include',
        });
        document.cookie = 'Authtoken=; Max-Age=0';
        navigate('/');
    };
  return (
   
<button onClick={handleLogout} className='text-white font-serif hover:underline text-xl'>LOGOUT</button>
  )
}

export default Logout
