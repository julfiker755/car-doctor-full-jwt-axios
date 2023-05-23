import React, { useState } from 'react';
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Checkconfiram = () => {
    const [user,setuser]=useState({
        fastname:"",
        date:"",
        price:"",
        email:"",
       
    })
    const [user1] = useAuthState(auth) || {}
  const navigate=useNavigate()
   
  // handleinput
    const handleinput=(event)=>{
        const {name,value}=event.target
        if(name === 'quantity'){
            setuser((prevalue)=>({...prevalue,[name]:parseFloat(value)}))
        }else{
            setuser((prevalue)=>({...prevalue,[name]:value}))
        }     
    }

    // handlefrom
    const handlefrom=async(e)=>{
        e.preventDefault()
        await axios.post('http://localhost:5050/order',user)
        navigate('/bookings')
    } 
    return (
        <div className='max-w-7xl mx-auto py-4'> 
            <form onSubmit={handlefrom} className='grid grid-cols-1 lg:grid-cols-2 lg:py-[50px] max-w-[700px] mx-auto'>
                 <div className='space-y-3'>
                    <div>
                    <input name="fastname" defaultValue={user1?.displayName}  onChange={(e)=>handleinput(e)} type="text" placeholder="Enter name" className="input input-bordered input-info w-full max-w-xs"/>
                    </div>
                    <div>
                    <input name="date" onChange={(e)=>handleinput(e)} type="date" placeholder="Enter last name" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                 </div>
                 <div className='space-y-3'>
                 <div>
                    <input name="price" onChange={(e)=>handleinput(e)} type="text" placeholder="Enter Price" className="input input-bordered input-info w-full max-w-full" />
                 </div>
                 <div>
                    <input name="email" onChange={(e)=>handleinput(e)} defaultValue={user1?.email} type="text" placeholder="Enter Your email" className="input input-bordered input-info w-full max-w-full" />
                 </div>
                 </div>
                 <div className='col-span-2'>
                    <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full my-3 max-w-full" ></textarea>
                    </div>
                    <button className='col-span-2 btn btn-primary my-6 capitalize'>Order confiram</button>
            </form>

        </div>
    );
};
export default Checkconfiram;