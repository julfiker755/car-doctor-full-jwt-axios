import React from 'react';
import { BsFillCalendar2DayFill } from 'react-icons/bs';
import { BsFillTelephoneFill} from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';
const Support = () => {
    return (
        <div className='max-w-7xl mx-auto py-[50px] space-y-2 rounded-xl px-5 bg-[#151515] text-white mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           <div className='flex items-center gap-4'>
               <BsFillCalendar2DayFill size={70}/>
             <div className='space-y-1'>
             <h1 className='text-sm lg:text-xl'>We are open monday-friday</h1>
             <h1 className='text-xl lg:text-2xl font-semibold'>7:00 am - 9:00 pm</h1>
             </div>
           </div>
           <div className='flex items-center gap-4'>
               <BsFillTelephoneFill size={70}/>
             <div className='space-y-1'>
             <h1 className='text-sm lg:text-xl'>Have a question?</h1>
             <h1 className='text-xl lg:text-2xl font-semibold'>+2546 251 2658</h1>
             </div>
           </div>
           <div className='flex items-center gap-4'>
               <TiLocation size={70}/>
             <div className='space-y-1'>
             <h1 className='text-sm lg:text-xl'>Need a repair? our address</h1>
             <h1 className='text-xl lg:text-2xl font-semibold'>Liza Street, New York</h1>
             </div>
           </div>
        </div>
    );
};

export default Support;