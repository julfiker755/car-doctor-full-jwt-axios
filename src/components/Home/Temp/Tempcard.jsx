import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';


const Tempcard = ({temp}) => {
    const {img}=temp
    return (
        <div className='border border-[#b3bdc0] p-4 rounded-md'>
        <img className='rounded-lg' src={img} alt="" />
        <div className='space-y-1 my-3 text-center'>
            <h1 className='text-sm lg:text-3xl font-bold'>Car Engine Plug</h1>
            <h1 className='text-xl text-[red]'>Engine Expert</h1>
            <ul className='flex justify-center space-x-4'>
                <li className='bg-[#395185] p-2 rounded-full'><FaFacebook size={20}/></li>
                <li className='bg-[#55ACEE] p-2 rounded-full'><AiFillTwitterCircle color="white" size={20}/></li>
                <li className='bg-[#C216A6] p-2 rounded-full'><BsInstagram size={20}/></li>
                <li className='bg-[#e36e7a] p-2 rounded-full'><FcGoogle size={20}/></li>
            </ul>
        </div>
      </div>
    );
};

export default Tempcard;