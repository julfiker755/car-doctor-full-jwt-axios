import React from 'react';
import fotderimg from '../../assets/logo.svg'
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const Fooder = () => {
    // max-w-7xl mx-auto
    return (
       <div className='bg-neutral'>
         <footer className="footer max-w-7xl mx-auto p-10 text-neutral-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
         <div>
          <img className='w-[60px]' src={fotderimg} alt="" />
          <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
          <ul className='flex justify-center space-x-4'>
                <li className='bg-[#395185] p-2 rounded-full'><FaFacebook size={20}/></li>
                <li className='bg-[#55ACEE] p-2 rounded-full'><AiFillTwitterCircle color="white" size={20}/></li>
                <li className='bg-[#C216A6] p-2 rounded-full'><BsInstagram size={20}/></li>
                <li className='bg-[#e36e7a] p-2 rounded-full'><FcGoogle size={20}/></li>
            </ul>
        </div>
        <div>
          <span className="footer-title">About</span> 
          <a className="link link-hover"> Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
       </div>
    );
};

export default Fooder;