import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Service = () => {
  const [service,setservice]=useState([])
   useEffect(()=>{
     const getdata=async()=>{
      const {data}=await axios.get("http://localhost:5050/service")
      setservice(data)
     }
     getdata()
   },[])
    return (
        <div className='max-w-7xl mx-auto py-[40px]'>
           <div className='text-center'>
           <h1 className="text-sm lg:text-xl text-[red]">Service</h1>
            <h1 className='text-3xl lg:text-4xl font-semibold'>Our Service Area</h1>
            <p className='max-w-[500px] m-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
             {service.map(ser=><Card key={ser._id} service={ser}></Card>)}
           </div>
           <button className='btn btn-primary m-auto block'>More Services</button>
        </div>
    );
};

export default Service;