
import React from 'react';
import { CarouselDefault } from './CarouselDefault';
import { CarouselMobile } from './CarouselMobile';
import ontimeicon from '../../assets/home/always-on-time-icon.svg';
import bookonlineicon from '../../assets/home/book-online-icon.svg';
import excellenticon from '../../assets/home/excellent-service-icon.svg';
import ConsultationButton from '../Navbar/ConsultationButton';


const Home = () => {
    return (
        <div className=''>
            <CarouselDefault className="hidden md:block " />
            <CarouselMobile className="" />
            <div className=' lg:hidden bg-gray-300 text-center mx-4 rounded-md p-4 my-4 flex items-center justify-center'>
                    <ConsultationButton />
            </div>
            <div className='bg-black text-white rounded-md flex  items-center justify-around mx-4 py-5'>
                <a href="">
                    <div className='flex flex-col items-center'>
                        <img src={excellenticon} className='w-12 sm:w-20' alt="Excelent" />
                        <span className=' text-xs font-bold sm:text-xl'>Excelent service </span>
                    </div>
                </a>
                <a href="">
                    <div className='flex   flex-col items-center'>
                        <img src={ontimeicon} className='w-12 sm:w-20' alt="on time" />
                        <span className='text-xs font-bold sm:text-xl' >Always on time </span>
                    </div>
                </a>
                <a href="">
                    <div className='flex flex-col  items-center'>
                        <img src={bookonlineicon} className='w-12 sm:w-20' alt="Easy to book" />
                        <span className='text-xs font-bold sm:text-xl'> Easy to book </span>
                    </div>
                </a>

            </div>

        </div>
    );
};

export default Home;
