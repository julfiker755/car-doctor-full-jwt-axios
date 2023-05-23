import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase';
import Bookingbody from './Bookingbody';


const Booking = () => {
    const [orderinfo,setorderinfo]=useState([])
    const [user] = useAuthState(auth) || {}

    useEffect(()=>{
        const getdata=async()=>{
          const dd=JSON.parse(localStorage.getItem('assentoken'))
          const {data}=  await axios.get(`http://localhost:5050/order?email=${user.email}`,{headers:{
            authorization:`Bearer ${dd.token}`
          }})
          setorderinfo(data)
        }
        getdata()
    },[])
    
    // handle delete
    const handledelete=async(id)=>{
        const con=window.confirm('You are sure delete order')
        if(con){
         const {data}=await axios.delete(`http://localhost:5050/order/${id}`)
         if(data.deletedCount > 0){
          const renamming=orderinfo.filter(o=>o._id !== id)
          setorderinfo(renamming)
         }
        }
    }
    // handle confrim 
    const handleconfrom=async(id)=>{
       await axios.patch(`http://localhost:5050/order/${id}`,{stadus:'confirm'})
       .then(result=>{
        if(result.data.modifiedCount){
            const ramming=orderinfo.filter(order=>order._id !== id)
            const update=orderinfo.find(orderr=>orderr._id === id)
            update.stadus='confirm'
            const newbooking=[update,...ramming]
            setorderinfo(newbooking)
        }
       })
    }
    return (
        <div className='max-w-7xl mx-auto'>
          <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* row 1 */}
   <tbody>
      {orderinfo.map(info=><Bookingbody key={info._id} handledelete={handledelete} handleconfrom={handleconfrom} info={info}></Bookingbody>)}
   </tbody>
  </table>
</div>
        </div>
    );
};

export default Booking;