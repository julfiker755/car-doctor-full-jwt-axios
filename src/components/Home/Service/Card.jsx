import React from 'react';
import {  AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Card = ({service}) => {
  const navigate=useNavigate()
  const {_id,title,price,img}=service || {}
    return (
        <div className='border border-[#106076] p-2 rounded-md'>
        <img src={img} alt="" />
        <div className='space-y-1 my-2'>
            <h1 className='text-sm lg:text-xl font-bold'>{title}</h1>
             <div className='flex justify-between text-[red]'>
                <span>Price:${price}</span>
                <span onClick={()=>navigate(`/servicedis/${_id}`)}  className='cursor-pointer'><AiOutlineArrowRight size={20}/></span>
             </div>
        </div>
      </div>
    );
};

export default Card;