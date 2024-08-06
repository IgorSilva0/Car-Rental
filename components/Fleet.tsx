'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Fleet = () => {
    return (
        <div className="flex flex-col items-center h-96 w-full">
            <h2 className="text-2xl font-bold mt-10 mb-4">Discover Our Fleet</h2>
            <p className="mb-10">The Best Conditions for You to Book and Enjoy</p>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="h-full w-full max-w-6xl"  // Set max-width for the Swiper container
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
        </div>
    );
};

export default Fleet;
