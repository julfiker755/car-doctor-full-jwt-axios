import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='max-w-7xl mx-auto py-[50px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='m-auto'>
                    <div className='relative'><img className='max-w-[510px] rounded-xl' src={person} alt="" />
                    <div className='absolute -bottom-[20%] -right-[10%]'><img  className='max-w-[300px] top-0 border-[#17979e] border-[15px] rounded-md' src={parts} alt="" /></div>
                    </div>
                   
                </div>
                <div className='space-y-3'>
                    <h1 className='text-xl text-[red]'>About Us</h1>
                    <h2 className='text-4xl font-semibold'>We are qualified<br/> & of experience <br/>in this field</h2>
                    <p className='text-sm lg:text-xl'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-sm lg:text-xl'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className='btn btn-primary'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;