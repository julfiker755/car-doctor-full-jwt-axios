import React from 'react';
import Banner from './Banner/Banner';
import About from '../About/About';
import Support from './Support/Support';
import Product from './Product/Product';
import Temp from './Temp/Temp';
import Chose from './Chose/Chose';
import Service from './Service/Service';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase';

const Home = () => {
    const [user]=useAuthState(auth) || {}
    return (
        <>
         <Banner></Banner>
         <About></About>
         {user ? <Service></Service> :null}
         <Support></Support>
         <Product></Product>
         <Temp></Temp>
         <Chose></Chose>
        </>
    );
};

export default Home;