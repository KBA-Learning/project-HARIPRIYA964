import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

const SignupPage = () => {
  const [firstname,setFirstname] = useState('');
  const [lastname,setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[contact,setContact] = useState('');
 
    const navigate = useNavigate();
    const signupSubmit = async (e) => {
        e.preventDefault();
        const userDetails = {
          firstname,
          lastname,
            username,
            password,
            email,
            contact
          
        }
        console.log(userDetails);
        try{
          const res = await fetch('api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              },
              body: JSON.stringify(userDetails)
        })
        if(res.ok){
            alert('Signup Successfull');
            navigate('/')
        }
        else{
          alert('Signup Failed');
        }
      }
      catch(error){
        alert("500 error")
      }
    }
  return (
    <div className="bg-white h-[96vh] flex justify-center py-7">
      <div className="bg-black w-[50vh] h-[85vh] mt-20 rounded-2xl shadow-2xl shadow-green-950 ">
        <div className="p-5  font-serif  ">
          <div className="text-6xl text-center pt-12 text-white"><span>SIGN UP</span></div>
          <form onSubmit={signupSubmit}>
          <div className="pt-6 text-white pl-16 " >
            <span>First Name</span>
            </div>
          <div className="pt-2 pl-16  w-[10vh] ">
            <input type="text" 
            id= "firstname"
            name='firstname'
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="w-[32vh] h-[4vh]" required />
            </div>
            <div className="pt-6 text-white pl-16 " >
            <span>Last Name</span>
            </div>
          <div className="pt-2 pl-16  w-[10vh] ">
            <input type="text" 
            id= "lastname"
            name='lastname'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="w-[32vh] h-[4vh]" required />
            </div>
            
          <div className="pt-6 text-white pl-16 " >
            <span>User Name</span>
            </div>
          <div className="pt-2 pl-16  w-[10vh] ">
            <input type="text" 
            id= "username"
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-[32vh] h-[4vh]" required />
            </div>
          <div className="pt-4 text-white pl-16">
            <span>Email</span>
            </div>
          <div className="pt-2 text-black pl-16">
            <input type="mail" 
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             className="w-[32vh] h-[4vh]" required />
            </div>
          <div className="pt-4 text-white pl-16">
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
            <div className="pt-4 text-white pl-16">
            <span>Contact</span>
            </div>
          <div className="pt-2 text-black pl-16">
            <input type="number" 
            id='contact'
            name='contact'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
             className="w-[32vh] h-[4vh]" required />
            </div>
      
      
        
                <div className="text-black flex justify-center  bg-white  w-[15vh] h-[4vh] mt-6 ml-36">
                  <button type='submit'>Sign Up</button>
                </div>
                <div className="ml-14 text-white">______________________________________</div>
                <div className="font-serif text-white ml-28 ">Already have an account? <Link to="/">Login</Link>
                </div>
          </form>
          

      </div>

      </div>

    </div>
  )
}

export default SignupPage
