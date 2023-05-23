import React from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import imgerr from '../../assets/images/404/Frame.png'

const Errorpage = () => {
    const error = useRouteError();
    const {data}=error || {}
    const navigate=useNavigate()
    return (
        <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
          <img src={imgerr} alt="" />
          <h1 className='text-[red] font-bold text-3xl my-3'>{data}</h1>
          <button onClick={()=>navigate('/')} className='btn btn-primary'>Go Back</button>
        </main>
    );
};

export default Errorpage;