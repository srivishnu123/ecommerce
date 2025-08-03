import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Configuration";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'

import './Login.css';

const Login = () => {

     let [email,setemail]=useState('')
       let [password,setpassword]=useState('')
       let navigate=useNavigate()
       async function log(e){
        e.preventDefault();
        try{
          await signInWithEmailAndPassword(auth,email,password);
           console.log("created successfully");
            toast.success("Login Successfully",{position:'top-center'})
           navigate('/mainpage')
          
       }
       catch(error)
       {
              console.log(error.message);
            toast.error(error.message,{position:'top-center'})
       }
    
       }

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={log}>
          <input type="text" placeholder="email" required value={email} onChange={(e)=>{setemail(e.target.value)}}/>
          <input type="password" placeholder="Password" required  value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
          <button type="submit">Log In</button>
          </form>
      
        <div className="login-links">
          <a href="/forgotpassword">Forgot Password?</a>
          <span> | </span>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
