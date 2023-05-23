import React, { useEffect, useState } from 'react';
import img1 from '../../../../../assets/images/services/3.jpg'
import {  AiOutlineArrowRight } from 'react-icons/ai';
import { FcDocument } from 'react-icons/fc';
import logo from '../../../../../assets/logo.svg'
import Scard from './Scard';
import Video from './Video';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Sbody = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const [serviced,setserviced]=useState([])
    useEffect(()=>{
      const getdata=async()=>{
       const {data}=await axios.get(`http://localhost:5050/service/${id}`)
       setserviced(data)
      }
      getdata()
    },[id])
    return (
        <div className='max-w-7xl mx-auto py-[30px] grid grid-cols-1 lg:grid-cols-4 gap-10'>
            <div className='col-span-3'>
                <img className='max-w-full rounded-md m-auto' src={img1} alt="photo" />
                <div className='py-[20px] space-y-2'>
                    <h1 className='text-sm lg:text-3xl font-bold capitalize'>Unique Car Engine Service</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                </div>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[50px]'>
                    {serviced?.facility?.map((s,index)=><Scard key={index} serviedd={s}></Scard>)}
                </div>

                <p className='py-[30px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                <div className='py-[20px] space-y-2'>
                    <h1 className='text-sm lg:text-3xl font-bold capitalize'>3 Simple Steps to Process</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                </div>
                <Video></Video>
            </div>
            {/* right coluam */}
            <div className='hidden lg:block text-black'>
                {/* service */}
                <ul className='bg-[#F3F3F3] p-4 space-y-2 rounded-md'>
                    <li className='text-[30px] font-semibold'>Services</li>
                    <li className='flex bg-[#FF3811] text-white cursor-pointer justify-between p-3 rounded-md'><span>Engine Repair</span><span><AiOutlineArrowRight /></span></li>
                    <li className='flex hover:bg-[#FF3811] hover:text-white cursor-pointer justify-between bg-white p-3 rounded-md'><span>Automatic Services</span><AiOutlineArrowRight /></li>
                    <li className='flex hover:bg-[#FF3811] hover:text-white cursor-pointer justify-between bg-white p-3 rounded-md'><span>Engine Repair</span><AiOutlineArrowRight/></li>
                    <li className='flex hover:bg-[#FF3811] hover:text-white cursor-pointer justify-between bg-white p-3 rounded-md'><span>Engine Oil Change</span><AiOutlineArrowRight/></li>
                    <li className='flex hover:bg-[#FF3811] hover:text-white cursor-pointer justify-between bg-white p-3 rounded-md'><span>Battery Charge</span><AiOutlineArrowRight/></li>
                </ul>
                {/* service download */}
                <ul className='bg-[#151515] p-6 space-y-3 rounded-md mt-5 text-white'>
                    <li className='text-[30px] font-semibold'>Download</li>
                    <li className='flex  text-white cursor-pointer justify-between'>
                       <div className='flex  items-center gap-2'>
                       <FcDocument size={30}/>
                        <div className='text-xs'>
                        <h1>Our Brochure</h1>
                        <h1>Download</h1>
                        </div>
                       </div>
                   <span className='bg-[#FF3811] rounded-md p-3'> <AiOutlineArrowRight /></span>
                   </li>
                   <li className='flex  text-white cursor-pointer justify-between'>
                       <div className='flex  items-center gap-2'>
                       <FcDocument size={30}/>
                        <div className='text-xs'>
                        <h1>Company Details</h1>
                        <h1>Download</h1>
                        </div>
                       </div>
                   <span className='bg-[#FF3811] rounded-md p-3'> <AiOutlineArrowRight /></span>
                   </li>
                </ul>
                 {/* Help */}
                 <ul className='bg-[#151515] p-6 space-y-3 rounded-md mt-5 text-white'>
                   <img className='m-auto  w-[80px] text-white' src={logo} alt="" />
                   <li className='text-center'>Need Help? We Are Here <br/>To Help You</li>
                   <div className='bg-[white] text-black text-center rounded-md p-8 relative'>
                     <h1><span className='text-[#FF3811] font-bold'>Car Doctor</span> Special</h1>
                     <h1>Save up to <span className='text-[#FF3811] font-bold'>60% off</span></h1>
                     <button  className='bg-[#FF3811] rounded-md text-white absolute -bottom-3 left-1/2 -translate-x-1/2 p-2'>Get A Quote</button>
                   </div>
                </ul>
                {/* text */}
                <div className='text-center py-[20px]'>
                    <h1 className='text-[40px] font-semibold text-white'>Price ${serviced.price}</h1>
                    <button onClick={()=>navigate("/checkout")}  className='bg-[#FF3811] rounded-md text-white py-2 px-6'>Proceed Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Sbody;