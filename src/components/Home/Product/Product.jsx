import React from 'react';
import Pcard from './Pcard';

const Product = () => {
    return (
        <div className='max-w-7xl mx-auto py-[40px]'>
             <div className='text-center space-y-1'>
           <h1 className="text-sm lg:text-xl text-[red]">Popular Products</h1>
            <h1 className='text-3xl lg:text-5xl font-semibold text-[black]'>Browse Our Products</h1>
            <p className='max-w-[800px] m-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
             <Pcard></Pcard>
             <Pcard></Pcard>
             <Pcard></Pcard>
             <Pcard></Pcard>
             <Pcard></Pcard>
             <Pcard></Pcard>
             <Pcard></Pcard>
             <Pcard></Pcard>
           </div>
           <button className='btn btn-info m-auto block capitalize'>More Products</button>
        </div>
    );
};

export default Product;