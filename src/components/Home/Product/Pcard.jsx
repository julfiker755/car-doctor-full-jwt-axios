import React from 'react';
import product1 from '../../../assets/images/products/1.png'
import { AiTwotoneStar } from 'react-icons/ai';

const Pcard = () => {
    return (
        <div className='border border-[#b3bdc0] p-2 rounded-md'>
        <div className='bg-[#B2B2B2] rounded-md'>
        <img src={product1} alt="" />
        </div>
        <div className='space-y-1 my-3 text-center'>
            <h1 className='flex justify-center'><AiTwotoneStar size={30} color="red"/><AiTwotoneStar size={30} color="red"/><AiTwotoneStar size={30} color="red"/><AiTwotoneStar size={30} color="red"/><AiTwotoneStar size={30} color="red"/></h1>
            <h1 className='text-sm lg:text-3xl font-bold'>Car Engine Plug</h1>
            <h1 className='text-xl text-[red]'>$20.00</h1>
        </div>
      </div>
    );
};

export default Pcard;