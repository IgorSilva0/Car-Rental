'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Fleet = () => {
    return (
        <div className="flex flex-col items-center h-fit w-full">
            <h2 className="text-2xl font-bold mt-10 mb-4">Discover Our Fleet</h2>
            <p className="mb-16">The Best Conditions for You to Book and Enjoy</p>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="h-fit w-full max-w-6xl" 
            >
              {cars.map((data, key)=>
                <SwiperSlide key={key} className="text-center text-lg text-black items-center">
                  <img src={data.src} alt='Car Image' className=' w-[100%] h-[95%]'/>
                </SwiperSlide>
              )}
              
            </Swiper>
            <button className='mt-12 py-2 px-4 hover:bg-gray-700 border-2 border-green-500 font-semibold rounded-md'>View All Car Groups</button>
        </div>
    );
};

export default Fleet;


const cars = [
  {
    src: '/imgs/cars/defender.png'
  },
  { 
    src: '/imgs/cars/discovery2020.png'
  },
  { 
    src: '/imgs/cars/velar20200.png'
  },
  { 
    src: '/imgs/cars/evoque2014.png'
  },
  { 
    src: '/imgs/cars/evoqueconvert2017.png'
  },
  { 
    src: '/imgs/cars/velar2019.png'
  },
  { 
    src: '/imgs/cars/evoqueconvert2018.png'
  },
  { 
    src: '/imgs/cars/rangerover2014.png'
  },
  { 
    src: '/imgs/cars/velar2023.png'
  },
  { 
    src: '/imgs/cars/sport2021.png'
  },
  { 
    src: '/imgs/cars/sport2022.png'
  },
  { 
    src: '/imgs/cars/velar2020.png'
  },
  { 
    src: '/imgs/cars/velar2021.png'
  },
  { 
    src: '/imgs/cars/sport2017.png'
  },
  { 
    src: '/imgs/cars/discoverysport2018.png'
  },
  { 
    src: '/imgs/cars/rangerover2016.png'
  },
  {
    src: '/imgs/cars/defender1.png'
  },
  { 
    src: '/imgs/cars/velar2022.png'
  },
  {
    src: '/imgs/cars/defender2.png'
  },
]