import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import getUserType from '../utils/Auth'


const LoginPage = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
   
    const navigate = useNavigate();
    const loginSubmit =async (e) => {
        e.preventDefault();
      
        const loginDetails = {
            username,
            password
        }
        console.log(loginDetails)
        const res = await fetch('/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
                },
                body:JSON.stringify(loginDetails),
        });
        if(res.ok){
         
            const data = await res.json();
            console.log(data)
            localStorage.setItem('userType',data)
            console.log(data)
            if(data ==='admin'){
              navigate('/admindashboard');
              alert('Admin login Successful')
            }
            else{
              navigate('/home')
              alert('User login Successful')
            }
          }
          else{
            alert('Invalid username or password');
          }
    }
  return (
    <div className="bg-white h-[96vh] flex justify-center py-7">
    <div className="bg-black w-[50vh] h-[58vh] mt-32 rounded-2xl shadow-2xl shadow-green-950 ">
        <div className="p-5  font-serif  ">
            <div className="text-6xl text-center pt-12 text-emerald-100"><span>LOGIN</span></div>
            <form onSubmit={loginSubmit} >
              <div className="pt-6 text-emerald-100 pl-16 " >
                <span>User Name</span>
                </div>
              <div className="pt-2 pl-16  w-[10vh] ">
                <input type="username"
                id='username'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-[32vh] h-[4vh]" required />
                </div>
              <div className="pt-4 text-emerald-100 pl-16">
                <span>Password</span>
                </div>
              <div className="pt-2 text-black pl-16">
                <input type="password" 
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[32vh] h-[4vh]" required />
                </div>
              <div className="text-black flex justify-center  bg-white  w-[13vh] h-[3vh] mt-4  ml-[17.5vh] font-serif">
                <button type='submit'>Login</button>
                </div>
                <div className="  text-white  mt-6 text-center font-serif"><span >Forgot Password?</span></div>
                <div className="ml-[7vh] text-white">_________________________________________</div>
                <div className="font-serif text-white  ml-[14vh]">Don't have an account? <Link to="/signup">Sign Up</Link> </div>
                </form>
               
                </div>
                </div>
                </div>
 
 
 
  )
}

export default LoginPage
