
import React from 'react';
import AADHI from './AADHI.avif'

const Home = () => {
    return (
        <div className='bg-black'>
        <div 
            className="bg-no-repeat bg-center  h-screen opacity-40" 
            style={{ backgroundImage: `url(${AADHI})` }}
        >
            <div className="  flex items-center justify-center h-full">
                <h1 className="text-white text-4xl">Hello, World!</h1>
            </div>
        </div>
        </div>
    );
};

export default Home;
