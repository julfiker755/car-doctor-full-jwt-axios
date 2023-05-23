import React from 'react';

const Scard = ({serviedd}) => {
    const {name,details}=serviedd || {}
    return (
        <div className='bg-[#C2C2C2] rounded-md text-black p-[30px] space-y-3 relative'>
            {/* <h1 className=''></h1> */}
            <h1 className='text-sm lg:text-2xl font-semibold'>{name}</h1>
            <p className='text-sm'>{details}</p>
        </div>
    );
};

export default Scard;