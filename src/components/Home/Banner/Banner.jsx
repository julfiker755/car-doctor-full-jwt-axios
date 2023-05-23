import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'


const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto mt-8'>
      <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative h-[650px]  w-full">
    <img  src={img1} className="w-full rounded-xl" />
    <div className="absolute w-full h-full text-white bg-gradient-to-r from-[#09b48c] to-transparent">
      <div className='flex-col p-5 space-y-3 relative top-1/2 transform -translate-y-1/2'>
      <h1 className='text-3xl lg:text-5xl font-semibold'>Affordable<br/>Price For Car<br/>Servicing</h1>
      <p className='text-sm lg:text-xl'>There are many variations of passages of  available,<br/>but the majority have suffered alteration in some form</p>
      <div className='flex space-x-2'>
        <button className='btn btn-primary'>Discover More</button>
        <button className='btn btn-outline btn-secondary text-[blue]'>Latest Project</button>
      </div>
      </div>
    </div>
    <div className="absolute flex space-x-2 justify-end transform -translate-y-1/2 left-5 right-5 bottom-2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative h-[650px]  w-full">
    <img  src={img5} className="w-full rounded-xl" />
    <div className="absolute w-full h-full text-white bg-gradient-to-r from-[#09b48c] to-transparent">
      <div className='flex-col p-5 space-y-3 relative top-1/2 transform -translate-y-1/2'>
      <h1 className='text-3xl lg:text-5xl font-semibold'>Affordable<br/>Price For Car<br/>Servicing</h1>
      <p className='text-sm lg:text-xl'>There are many variations of passages of  available,<br/>but the majority have suffered alteration in some form</p>
      <div className='flex space-x-2'>
        <button className='btn btn-primary'>Discover More</button>
        <button className='btn btn-outline btn-secondary text-[blue]'>Latest Project</button>
      </div>
      </div>
    </div>
    <div className="absolute flex space-x-2 justify-end transform -translate-y-1/2 left-5 right-5 bottom-2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative h-[650px]  w-full">
    <img  src={img2} className="w-full rounded-xl" />
    <div className="absolute w-full h-full text-white bg-gradient-to-r from-[#09b48c] to-transparent">
      <div className='flex-col p-5 space-y-3 relative top-1/2 transform -translate-y-1/2'>
      <h1 className='text-3xl lg:text-5xl font-semibold'>Affordable<br/>Price For Car<br/>Servicing</h1>
      <p className='text-sm lg:text-xl'>There are many variations of passages of  available,<br/>but the majority have suffered alteration in some form</p>
      <div className='flex space-x-2'>
        <button className='btn btn-primary'>Discover More</button>
        <button className='btn btn-outline btn-secondary text-[blue]'>Latest Project</button>
      </div>
      </div>
    </div>
    <div className="absolute flex space-x-2 justify-end transform -translate-y-1/2 left-5 right-5 bottom-2">
      <a href="#slide6" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative h-[650px]  w-full">
    <img  src={img3} className="w-full rounded-xl" />
    <div className="absolute w-full h-full text-white bg-gradient-to-r from-[#09b48c] to-transparent">
      <div className='flex-col p-5 space-y-3 relative top-1/2 transform -translate-y-1/2'>
      <h1 className='text-3xl lg:text-5xl font-semibold'>Affordable<br/>Price For Car<br/>Servicing</h1>
      <p className='text-sm lg:text-xl'>There are many variations of passages of  available,<br/>but the majority have suffered alteration in some form</p>
      <div className='flex space-x-2'>
        <button className='btn btn-primary'>Discover More</button>
        <button className='btn btn-outline btn-secondary text-[blue]'>Latest Project</button>
      </div>
      </div>
    </div>
    <div className="absolute flex space-x-2 justify-end transform -translate-y-1/2 left-5 right-5 bottom-2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide5" className="carousel-item relative h-[650px]  w-full">
    <img  src={img4} className="w-full rounded-xl" />
    <div className="absolute w-full h-full text-white bg-gradient-to-r from-[#09b48c] to-transparent">
      <div className='flex-col p-5 space-y-3 relative top-1/2 transform -translate-y-1/2'>
      <h1 className='text-3xl lg:text-5xl font-semibold'>Affordable<br/>Price For Car<br/>Servicing</h1>
      <p className='text-sm lg:text-xl'>There are many variations of passages of  available,<br/>but the majority have suffered alteration in some form</p>
      <div className='flex space-x-2'>
        <button className='btn btn-primary'>Discover More</button>
        <button className='btn btn-outline btn-secondary text-[blue]'>Latest Project</button>
      </div>
      </div>
    </div>
    <div className="absolute flex space-x-2 justify-end transform -translate-y-1/2 left-5 right-5 bottom-2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide6" className="carousel-item relative h-[650px]  w-full">
    <img  src={img4} className="w-full rounded-xl" />
    <div className="absolute w-full h-full text-white bg-gradient-to-r from-[#09b48c] to-transparent">
      <div className='flex-col p-5 space-y-3 relative top-1/2 transform -translate-y-1/2'>
      <h1 className='text-3xl lg:text-5xl font-semibold'>Affordable<br/>Price For Car<br/>Servicing</h1>
      <p className='text-sm lg:text-xl'>There are many variations of passages of  available,<br/>but the majority have suffered alteration in some form</p>
      <div className='flex space-x-2'>
        <button className='btn btn-primary'>Discover More</button>
        <button className='btn btn-outline btn-secondary text-[blue]'>Latest Project</button>
      </div>
      </div>
    </div>
    <div className="absolute flex space-x-2 justify-end transform -translate-y-1/2 left-5 right-5 bottom-2">
      <a href="#slide6" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default Banner;