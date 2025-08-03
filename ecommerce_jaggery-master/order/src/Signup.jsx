import React, { useState } from 'react';
import './SignUp.css';
import {auth,db} from './Configuration'
import {getDoc,setDoc,doc} from 'firebase/firestore'
import { toast } from 'react-toastify';


import { createUserWithEmailAndPassword } from 'firebase/auth';


const SignUp = () => {


  let [fname,setfname]=useState('')
  let [email,setemail]=useState('')
  let [password,setpassword]=useState('')
  let [cpassword,setcpassword]=useState('')

  async function save(E){
    E.preventDefault()
    if(password!=cpassword){
      alert('kjndckjbsvdhb');
      return
    }
    try{
      await  createUserWithEmailAndPassword(auth,email,password)
      const User=auth.currentUser
      if(User)
        {
          await setDoc(doc(db, "User", User.uid), {
              firstName: fname,
              email: email,
          });
        }
       console.log("success")
       toast.success("Created Successfully",{position:'top-center'})

    }
    catch(error)
    {
      console.log(error.message);
      toast.error(error.message,{position:'top-center'})

    }


  }
  return (

    <div className="signup-page">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={save}>
          <input type="text" placeholder="Full Name" required  value={fname} onChange={(e)=>{setfname(e.target.value)}}/>
          <input type="email" placeholder="Email" required  value={email} onChange={(e)=>{setemail(e.target.value)}}  />
          <input type="password" placeholder="Password" required value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
          <input type="password" placeholder="Confirm Password" required value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>
          <button type="submit">Sign Up</button>
        </form>
        <div className="signup-links">
          <span>Already have an account? </span>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
