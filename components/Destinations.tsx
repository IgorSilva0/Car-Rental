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
              className="h-fit w-full max-w-6xl hover:cursor-pointer" 
            >
              {places.map((data, key) => 
                <SwiperSlide  key={key} className=" items-center custom-clip-places">
                  <img src={data.src} alt='Place image' className='h-52'/>
              </SwiperSlide>
              )}
              
            </Swiper>
            <button className='mt-12 py-2 px-4 hover:bg-gray-700 border-2 border-green-500 font-semibold rounded-md'>See All Destinations</button>
        </div>
    )
}

export default Destinations

const places = [
  {
    src: '/imgs/places/bath-statue-in-front.jpg'
  },
  {
    src: '/imgs/places/london-bridge.jpg'
  },
  {
    src: '/imgs/places/cambridge-oxford.jpg'
  },
  {
    src: '/imgs/places/canterbury.jpg'
  },
  {
    src: '/imgs/places/cardiff.jpg'
  },
  {
    src: '/imgs/places/edinburgh.jpg'
  },
  {
    src: '/imgs/places/liverpool.jpg'
  },
  {
    src: '/imgs/places/loch-ness-inverness.jpg'
  },
  {
    src: '/imgs/places/london.jpg'
  },
  {
    src: '/imgs/places/stonehenge-salisbury.jpg'
  },
  {
    src: '/imgs/places/windsor.jpg'
  },
  {
    src: '/imgs/places/bath-statue-in-front.jpg'
  },
  {
    src: '/imgs/places/york.jpg'
  },
  {
    src: '/imgs/places/northern-irelands-giants-causeway.jpg'
  },
  {
    src: '/imgs/places/belfast.jpg'
  },
  {
    src: '/imgs/places/glasgow-loch-lomond.jpg'
  },
  {
    src: '/imgs/places/cotswolds.jpg'
  },
  {
    src: '/imgs/places/lake-district.jpg'
  },
  {
    src: '/imgs/places/football-mad-city.jpg'
  },
  {
    src: '/imgs/places/wales-biggest-mountain.jpg'
  },
  {
    src: '/imgs/places/the-channel-islands.jpg'
  }
]