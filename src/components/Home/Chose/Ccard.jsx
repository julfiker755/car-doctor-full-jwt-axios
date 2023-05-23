import React from 'react';


const Ccard = ({data}) => {
    const {image,text}=data
    return (
        <div className='group border border-[#177f93] text-center cursor-pointer m-auto p-3 rounded-lg transition hover:bg-[#FF3811]'>
           <img className='m-auto group-hover:text-[white] h-[80px] w-[80px]' src={image} alt="" />
           <h1 className='text-sm  text-black font-bold group-hover:text-[white]'>{text}</h1>
        </div>
    );
};

export default Ccard;