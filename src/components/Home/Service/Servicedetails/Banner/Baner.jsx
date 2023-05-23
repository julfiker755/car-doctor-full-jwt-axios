import React from 'react';
import checkout from '../../../../../assets/images/checkout/checkout.png'
import {Link} from 'react-router-dom'

const Baner = () => {
    return (
        <div className='max-w-7xl py-[20px] mx-auto'>
           <div className='relative  after:content-[" "] after:absolute after:inset-x-0 after:inset-y-0 after:bg-gradient-to-r after:from-[#a40633] after:to-transparent after:rounded-md'>
           <img className='w-full' src={checkout} alt="" />
           <div className='absolute top-1/2 -translate-y-1/2 z-40 p-5'>
             <h1 className='text-sm lg:text-[50px] font-semibold text-white'>Service Details</h1>
           </div>
           <ul className='bg-[#FF3811] text-xs lg:text-xl text-white flex left-1/2 -translate-x-1/2 absolute bottom-2 w-fit p-1 lg:p-3 rounded-md space-x-2 z-40'>
                <li><Link to="/">Home</Link></li>
                <li>/</li>
                <li><Link>Service Details</Link></li>
             </ul>
           </div>
        </div>
    );
};

export default Baner;
