import React, { useState } from "react";
import './SignUp.css'
import {auth,db} from '../../Firebase/firebaseConfig'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import{setDoc, doc} from 'firebase/firestore'
import {Link, useNavigate} from 'react-router-dom'

const SignUp = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

const navigate = useNavigate()

    const handleSubmit= async (e)=>{

      try {
        e.preventDefault()
        
        const createUser = await createUserWithEmailAndPassword(auth,email,password)
        const user = createUser.user
        await updateProfile(user, {
          displayName:userName
        })
        const userId = createUser.user.uid
        const userDetails ={
         Username:userName,
         phoneNumber:number,
         userId:userId
        }
 
        await setDoc(doc(db,'users' ,userId), userDetails)
        console.log(createUser.user.uid);
        navigate('/login')
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
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            name="name"
            required={true}
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            required={true}
            name="phone"
            value={number}
            onChange={(e)=>setNumber(e.target.value)}
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
          <button>Signup</button>
          {error && <p style={{color:'red'}}>{error}</p>}
        </form>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
