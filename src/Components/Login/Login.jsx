import React, { useState} from 'react'
import {auth} from '../../Firebase/firebaseConfig'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {Link, useNavigate} from 'react-router-dom'
import './Login.css'

const Login = () => {
    const[email, setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[error,setError] = useState('')

const navigate = useNavigate()

    const handleSubmit= async(e)=>{
        try {
          e.preventDefault()  
        const userLoggedin= await signInWithEmailAndPassword(auth,email,password)
        if(userLoggedin){
            navigate('/')
        }
        } catch (error) {
            console.log(error);
            setError(error.message)
        }
    }
    
    return (
        <div>
          <div className="signupParentDiv">
            <img width="200px" height="180px" src="../../../Images/olx-logo.png" ></img>

            <form onSubmit={handleSubmit} style={{width:'300px'}}>
              <label htmlFor="fname">Email</label>
              <br />
              <input
                className="input"
                type="email"
                required={true}
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                
              />
              <br />
              
              <label htmlFor="lname">Password</label>
              <br />
              <input
                className="input"
                type="password"
                required={true}
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                
              />
              <br />
              <br />
              <button>Login</button>
             {error && <p style={{color:'red'}}>{error}</p>}
            </form>
            <Link to='/signUp'>SignUp</Link>
          </div>
          
        </div>
      );
    };
    
    export default Login;