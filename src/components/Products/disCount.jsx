import React,{useRef} from "react";
import Btn from "@/components/common/Btn"
import ProductLeatest from '@/components/Products/productLeatestCard'

import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useSwiper } from 'swiper/react';


const disCount = () =>{
    const next = useRef(null);
    const prev = useRef(null);
    const onClickBtn=()=>{
        console.log('hi');
    }
    return(
        <>
            <div className="grid grid-cols-12 gap-4 bg-red-100 h-[400px] max-sm:h-auto">
                <div className="col-span-4 max-sm:col-span-12 grid grid-cols-12 h-[400px] max-sm:h-[180px]">
                    <div className="col-span-9 col-start-4 max-sm:col-start-1 max-sm:col-span-12  mr-5">
                        <h4 className="text-black text-3xl mt-10 mb-1 font-bold">تخفیفات ویژه</h4>
                        <span className="text-themeColorO text-xs">Special Sale</span>
                        <p className="text-gray-500 mt-1">تا 50% تخفیف ویــژه بـرای شمــا عزیزان</p>

                        <div className="grid grid-cols-12 gap-1 mt-4">
                            <Btn title={"مشاهده همه"} btnClass="col-span-4"  />
                            <Btn onClickBtn={onClickBtn} btnClass="col-span-2 col-start-8 right-a" ref={prev}  icon="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"  />
                            <Btn onClickBtn={onClickBtn} btnClass="col-span-2 left-a" ref={next} icon="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                            {/* <button ref={next}  className={"text-xs border-2 h-8 border-gray-400 transition ease-out duration-300 rounded-full " }>
                                next

                            </button>

                            <button ref={prev}  className={"text-xs border-2 h-8 border-gray-400 transition ease-out duration-300 rounded-full " }>
                                prev

                            </button>
                         */}
                        </div>
                    </div>
                </div>

                <div className="col-span-8 max-sm:col-span-10 max-sm:col-start-2  max-sm:h-auto max-sm:mt-0 h-[350px] mt-10">
                    
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
                            slidesPerView: 2
                        },
                        600:{
                            slidesPerView: 2
                        },
                    }}
                    spaceBetween={50} 
                    slidesPerView={3} 
                    modules={[Autoplay, Pagination, Navigation]}
                    navigation={{ 
                        nextEl: ".right-a", 
                        prevEl: ".left-a" 
                    }}
                    loop={true}
                    autoplay = {{
                        delay:2000,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={true}
                    className="container content-center h-[450px] mySwiper">

                        <SwiperSlide>
                            <ProductLeatest disCount="20" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductLeatest disCount="25" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductLeatest disCount="50" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductLeatest disCount="10" />
                        </SwiperSlide>




                        
                    </Swiper>

                </div>

            </div>
        
        </>
    )

}

export default disCount;