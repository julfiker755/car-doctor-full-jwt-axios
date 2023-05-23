import React from 'react';
import Tempcard from './Tempcard';
import temp1 from '../../../assets/images/team/1.jpg'
import temp2 from '../../../assets/images/team/2.jpg'
import temp3 from '../../../assets/images/team/3.jpg'

const Temp = () => {
    const tempdata=[
        {id:1,img:temp1,},
        {id:2,img:temp2,},
        {id:3,img:temp3,},
    ]
    return (
        <div className='max-w-7xl mx-auto py-[40px]'>
        <div className='text-center my-6'>
        <h1 className="text-sm lg:text-xl text-[red]">Team</h1>
         <h1 className='text-3xl lg:text-4xl font-semibold'>Meet Our Team</h1>
         <p className='max-w-[700px] m-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-4'>
            {/* card */}
            {tempdata.map(temp=><Tempcard key={temp.id} temp={temp}></Tempcard>)}
        </div>
     </div>
    );
};

export default Temp;