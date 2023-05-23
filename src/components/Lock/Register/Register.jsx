import React, { useState } from 'react';
import loginimg from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
const Register=()=> {
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [pass,setpass]=useState('')
  const [confirm,setconfiram]=useState('')
  const [error,seterror]=useState('')
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  // handlesubmit
  const handlefrom=async(e)=>{
    e.preventDefault()
    seterror(null)
    if(pass !== confirm){
      seterror('Your Password not match')
    }
    // const data={name,email,pass,confirm}
    await createUserWithEmailAndPassword(email, pass)
    await updateProfile({displayName:name })
  }
    return (
        <div className="hero max-w-7xl mx-auto">
        <div className="flex items-center my-[60px] gap-[130px]">
          <div className="text-center hidden lg:block lg:text-left">
            <img src={loginimg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className='text-center font-semibold text-3xl'>Please Register</h1>
              <form onSubmit={handlefrom}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" onChange={(e)=>setname(e.target.value)} placeholder="Your Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" onChange={(e)=>setemail(e.target.value)} placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" onChange={(e)=>setpass(e.target.value)} placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" onChange={(e)=>setconfiram(e.target.value)} placeholder="password" className="input input-bordered" />
                {error && <h1 className='text-[red]'>{error}</h1>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              </form>
            <h1 className='text-center font-bold text-white my-4'>Already have an account? <Link className='text-[#297892]' to="/login">Login</Link></h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register ;