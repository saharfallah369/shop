
import React, { useRef, useState } from 'react';
import Image from "next/image";
import img from "@/assents/images/Rectangle.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

function TestSlider() {
  return (
    <div className='container'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper !min-h-[400px] !pb-16">
        <SwiperSlide className='border-2 border-red-500'>
            <div className="relative cursor-pointer min-h-80 content-center">
                <div className="bg-white justify-center ">
                    {/* {disCount ? <span className="py-4 px-2 left-1 text-center text-xs w-14 top-1 absolute rounded-full bg-red-500 text-white">
                        20 % 
                        تخفیف
                    </span> : ""} */}
                    <Image width={100} height={100} className='w-full border-2 border-blue-500' src={img} alt="" />
                </div>
                <h4 className="font-shabnam text-black mt-8 cursor-pointer">
                    تونیک زنانه افراتین مدل آسمان
                </h4>
                <span className="text-gray-400 text-xs">
                    220,000 تومان
                </span>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 border-red-500'>
        <div className="relative cursor-pointer min-h-80 content-center">
                <div className="bg-white justify-center ">
                    {/* {disCount ? <span className="py-4 px-2 left-1 text-center text-xs w-14 top-1 absolute rounded-full bg-red-500 text-white">
                        20 % 
                        تخفیف
                    </span> : ""} */}
                    <Image width={100} height={100} className='w-full border-2 border-blue-500' src={img} alt="" />
                </div>
                <h4 className="font-shabnam text-black mt-8 cursor-pointer">
                    تونیک زنانه افراتین مدل آسمان
                </h4>
                <span className="text-gray-400 text-xs">
                    220,000 تومان
                </span>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 border-red-500'>
        <div className="relative cursor-pointer min-h-80 content-center">
                <div className="bg-white justify-center ">
                    {/* {disCount ? <span className="py-4 px-2 left-1 text-center text-xs w-14 top-1 absolute rounded-full bg-red-500 text-white">
                        20 % 
                        تخفیف
                    </span> : ""} */}
                    <Image width={100} height={100} className='w-full border-2 border-blue-500' src={img} alt="" />
                </div>
                <h4 className="font-shabnam text-black mt-8 cursor-pointer">
                    تونیک زنانه افراتین مدل آسمان
                </h4>
                <span className="text-gray-400 text-xs">
                    220,000 تومان
                </span>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 border-red-500'>
        <div className="relative cursor-pointer min-h-80 content-center">
                <div className="bg-white justify-center ">
                    {/* {disCount ? <span className="py-4 px-2 left-1 text-center text-xs w-14 top-1 absolute rounded-full bg-red-500 text-white">
                        20 % 
                        تخفیف
                    </span> : ""} */}
                    <Image width={100} height={100} className='w-full border-2 border-blue-500' src={img} alt="" />
                </div>
                <h4 className="font-shabnam text-black mt-8 cursor-pointer">
                    تونیک زنانه افراتین مدل آسمان
                </h4>
                <span className="text-gray-400 text-xs">
                    220,000 تومان
                </span>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border-2 border-red-500'>
        <div className="relative cursor-pointer min-h-80 content-center">
                <div className="bg-white justify-center ">
                    {/* {disCount ? <span className="py-4 px-2 left-1 text-center text-xs w-14 top-1 absolute rounded-full bg-red-500 text-white">
                        20 % 
                        تخفیف
                    </span> : ""} */}
                    <Image width={100} height={100} className='w-full border-2 border-blue-500' src={img} alt="" />
                </div>
                <h4 className="font-shabnam text-black mt-8 cursor-pointer">
                    تونیک زنانه افراتین مدل آسمان
                </h4>
                <span className="text-gray-400 text-xs">
                    220,000 تومان
                </span>
            </div>
        </SwiperSlide>


      </Swiper>
    </div>
  )
}

export default TestSlider