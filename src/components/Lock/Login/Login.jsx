import React, { useState } from 'react';
import loginimg from '../../../assets/images/login/login.svg'
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import axios from 'axios';
const Login = () => {
  const [email,setemail]=useState('')
  const [pass,setpass]=useState('')
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user]=useAuthState(auth)
  const location=useLocation()
  const navigate=useNavigate()
  let from = location.state?.from?.pathname || "/";
 
  
  const handlefrom=async(e)=>{
    e.preventDefault()
    const success=await signInWithEmailAndPassword(email,pass)
    const loginuser={
      user:success.user?.email
   }
    if(success){
      const {data}=await axios.post('http://localhost:5050/jwt',loginuser)
      localStorage.setItem('assentoken',JSON.stringify(data))
    }
    navigate(from, { replace: true })
    
    
  }
  
  
  
    return (
        <div className="hero max-w-7xl mx-auto">
        <div className="flex items-center my-[60px] gap-[130px]">
          <div className="text-center hidden lg:block lg:text-left">
            <img src={loginimg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <h1 className='text-center font-semibold text-3xl'>Please Login</h1>
                <form onSubmit={handlefrom}>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" onChange={(e)=>setemail(e.target.value)} type="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" onChange={(e)=>setpass(e.target.value)} placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
                </form>
              <h1 className='text-center font-semibold text-[#268385]'>Or Login</h1>
              <ul className='flex justify-center space-x-4'>
                <li onClick={()=>signInWithGoogle()} className='bg-[#9d2d38] p-2 rounded-full cursor-pointer'><FcGoogle size={20}/></li>
                <li onClick={()=>signInWithGithub()} className='bg-[#0a3c8b] p-2 rounded-full cursor-pointer'><AiFillGithub size={20}/></li>
                <li onClick={()=>signInWithFacebook()} className='bg-[#395185] p-2 rounded-full cursor-pointer'><FaFacebook size={20}/></li>
            </ul>
            <h1 className='text-center font-bold text-white my-4'>Have an account? <Link className='text-[#297892]' to="/register">Register</Link></h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
