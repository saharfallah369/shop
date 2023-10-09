import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Image from 'next/image';
import img1 from '@/assents/images/Arefset1.png';
import img2 from '@/assents/images/assents.png';
import img3 from '@/assents/images/chanel.png';
import img4 from '@/assents/images/guchi.png';

import { FreeMode, Pagination } from 'swiper/modules';

const Brand = () =>{


    useEffect(() => {
        const stylesheet = document.styleSheets[0];
            stylesheet.insertRule(".swiper-pagination-bullet-active { background: orange !important; }", 0);
            
        }, []);

    return(
        <>
        <div className='container relative'>
            <Swiper
            breakpoints={{
                500:{
                    slidesPerView: 5
                },
                700:{
                    slidesPerView: 5
                },
            }}
            slidesPerView={7}
            spaceBetween={30}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            >
                <div className='grid grid-cols-12 gap-4 '>
                    <SwiperSlide >
                        <Image className='col-span-2 max-sm:col-span-3 mb-11' src={img1} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='col-span-2 max-sm:col-span-3 mb-11' src={img2} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='col-span-2 max-sm:col-span-3 mb-11' src={img3} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='col-span-2 max-sm:col-span-3 mb-11' src={img4} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='col-span-2 max-sm:col-span-3 mb-11' src={img3} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='col-span-2 max-sm:col-span-3 mb-11' src={img1} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='col-span-2 max-sm:col-span-3 mb-11' src={img3} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='col-span-2 max-sm:col-span-3 mb-11' src={img4} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='col-span-2 max-sm:col-span-3 mb-11' src={img3} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='col-span-2 max-sm:col-span-3 mb-11' src={img1} alt='' />
                    </SwiperSlide>
                </div>
            </Swiper>

        </div>
        

        </>
    )
}

export default Brand;