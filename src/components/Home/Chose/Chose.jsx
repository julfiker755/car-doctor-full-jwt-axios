import React from 'react';
import Ccard from './Ccard';
import chose1 from '../../../assets/icons/person.svg'
import chose2 from '../../../assets/icons/deliveryt.svg'
import chose3 from '../../../assets/icons/Group 38729.svg'
import chose4 from '../../../assets/icons/group.svg'
import chose5 from '../../../assets/icons/check.svg'
import chose6 from '../../../assets/icons/quote.svg'

const Chose = () => {
    const choseall=[
        {id:1,image:chose1,text:"Expert Team"},
        {id:2,image:chose2,text:"Timely Delivery"},
        {id:3,image:chose3,text:"24/7 Support"},
        {id:4,image:chose4,text:"Best Equipment"},
        {id:6,image:chose5,text:"100% Guranty"},
        {id:7,image:chose2,text:"Timely Delivery"},
    ]
    return (
        <div className='max-w-7xl mx-auto py-[40px]'>
        <div className='text-center my-6'>
        <h1 className="text-sm lg:text-xl text-[red]">Core Features</h1>
         <h1 className='text-3xl lg:text-4xl font-semibold'>Why Choose Us</h1>
         <p className='max-w-[700px] m-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-14 py-4'>
           {choseall.map(all=><Ccard key={all.id} data={all}></Ccard>)}
        </div>
     </div>
    );
};

export default Chose;