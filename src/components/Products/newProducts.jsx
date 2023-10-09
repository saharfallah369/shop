import React from "react";
import SectionTitle from "../common/SectionTitle";
import ProductLeatest from '@/components/Products/productLeatestCard'
import Btn from "../common/btn";

import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation ,A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';



const newProduct = () =>{
    return(
        <div className="mb-10">  
            <div className="container">
                <SectionTitle title="جدیدترین محصولات ما" subTitle="Products categorization" />
                <div className="grid grid-cols-12 gap-2 mb-3">
                    
                    <Btn title={"مشاهده همه"} btnClass="col-span-2 max-sm:col-span-4 border-orange-200 hover:bg-gray-300 hover:text-white"  />
                    <Btn btnClass="col-span-1 max-sm:col-span-2 arrow-right max-sm:col-start-8 col-start-11 border-orange-200 hover:bg-gray-300 hover:text-white" icon="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    <Btn btnClass="col-span-1 max-sm:col-span-2 arrow-left border-orange-200 hover:bg-gray-300 hover:text-white" icon="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />

                </div>

            </div>
            

                <Swiper 
                breakpoints={{
                    500:{
                        slidesPerView: 1
                    },
                    1500:{
                        slidesPerView: 3
                    },
                    1300:{
                        slidesPerView: 3
                    },
                    1000:{
                        slidesPerView: 3
                    },
                    700:{
                        slidesPerView: 3
                    },
                    600:{
                        slidesPerView: 3
                    },
                }}
                spaceBetween={50} 
                slidesPerView={3} 
                modules={[Autoplay, Pagination, Navigation , A11y]}
                navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                loop={true}
                autoplay = {{
                    delay:3000,
                    disableOnInteraction: false,
                }}
                
                centeredSlides={true}
                className="container min-h-[420px] max-sm:h-[500px] mySwiper">

                    <SwiperSlide>
                        <ProductLeatest />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductLeatest />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductLeatest />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductLeatest />
                    </SwiperSlide>




                    
                </Swiper>



        </div>
    )
}
export default newProduct;