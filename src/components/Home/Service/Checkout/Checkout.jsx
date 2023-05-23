import React from 'react';
import CheckBanner from './CheckBanner';
import Checkconfiram from './Checkconfiram';

const Checkout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
           <CheckBanner></CheckBanner>
           <Checkconfiram></Checkconfiram>
        </div>
    );
};

export default Checkout;