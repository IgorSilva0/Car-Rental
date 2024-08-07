'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Destinations = () => {

    return(
        <div className="flex flex-col items-center h-fit w-full mb-10">
            <h2 className="text-2xl font-bold mt-10 mb-4">Destinations to Discover and Get Inspired</h2>
            <p className="mb-16">More than just hiring cars, we look after your journey. Explore our travel tips to inspire your next adventure.</p>
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation]}
              className="h-[30vh] w-full max-w-6xl hover:cursor-pointer" 
            >
              <SwiperSlide className="text-center text-lg text-black flex justify-center items-center bg-white">
                Slide 1
              </SwiperSlide>
              <SwiperSlide className="text-center text-lg text-black flex justify-center items-center bg-white">
                Slide 2
              </SwiperSlide>
              <SwiperSlide className="text-center text-lg text-black flex justify-center items-center bg-white">
                Slide 3
              </SwiperSlide>
              <SwiperSlide className="text-center text-lg text-black flex justify-center items-center bg-white">
                Slide 4
              </SwiperSlide>
              <SwiperSlide className="text-center text-lg text-black flex justify-center items-center bg-white">
                Slide 5
              </SwiperSlide>
              <SwiperSlide className="text-center text-lg text-black flex justify-center items-center bg-white">
                Slide 6
              </SwiperSlide>
              <SwiperSlide className="text-center text-lg text-black flex justify-center items-center bg-white">
                Slide 7
              </SwiperSlide>
              <SwiperSlide className="text-center text-lg text-black flex justify-center items-center bg-white">
                Slide 8
              </SwiperSlide>
              <SwiperSlide className="text-center text-lg text-black flex justify-center items-center bg-white">
                Slide 9
              </SwiperSlide>
            </Swiper>
            <button className='mt-12 py-2 px-4 hover:bg-gray-700 border-2 border-green-500 font-semibold rounded-md'>See All Destinations</button>
        </div>
    )
}

export default Destinations