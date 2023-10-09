"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import img from "@/assents/images/imagePro.png"
import img1 from "@/assents/images/kids.png"
import img3 from "@/assents/images/image42.png"
import Image from 'next/image';
import Btn from '@/components/common/btn';

const ProductSlider = () =>{

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return(
        <>
        <Swiper
            spaceBetween={5}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs]}
            loop={true}
            navigation={{ nextEl: ".a-left", prevEl: ".a-right" }}
            className="mySwiper2"
        >
            <SwiperSlide>
                <Image src={img} className="w-full h-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={img3} className="w-full h-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={img} className="w-full h-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={img3} className="w-full h-full" alt="" />
            </SwiperSlide>
        </Swiper>



    <div className="grid grid-cols-12 gap-2 mt-3">
        <div className='col-span-8'>
            <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image src={img} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img1} alt="" />
                    </SwiperSlide>
                    
            </Swiper>
        </div>

        <div className='col-span-4 grid grid-cols-12 gap-2'>
            <Btn btnClass="col-span-4 col-start-2 a-right border-orange-200 hover:bg-gray-300 hover:text-white" icon="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            <Btn btnClass="col-span-4 a-left border-orange-200 hover:bg-gray-300 hover:text-white" icon="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />

        </div>
    </div>
        


        



    </>
    )

}

export default ProductSlider;