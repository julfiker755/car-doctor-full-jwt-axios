import React, { useState } from 'react';
import video1 from '../../../../../assets/images/team/3.jpg'
import { AiFillPlayCircle} from 'react-icons/ai';


const Video = () => {
    const [video,setvideo]=useState(null)
    return (
        <div className='max-w-3xl m-auto relative'>
            <img  className='rounded-md' src={video1} alt="" />
            <div className='absolute top-1/2 left-1/2 jim-middle cursor-pointer'>
                <AiFillPlayCircle onClick={()=>setvideo({video:'https://www.youtube.com/watch?v=nQxz4sg_Bac&list=RDMMnQxz4sg_Bac&start_radio=1'})} color="red" size={80}/>
               
            </div>
           {/* condition */}
           {video &&  <div className='fixed bg-[#176f88] left-0 top-0 w-full h-full z-[50]'>
                    <div className='z-[9999999]  fixed top-1/2 left-1/2 jim-middle'>
                    <div onClick={()=>setvideo(null)} className='bg-[red] text-white rounded-md w-fit p-2 fixed px-4 cursor-pointer -right-3 -top-4'>X</div>
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/nQxz4sg_Bac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>}
        </div>
    );
};

export default Video;