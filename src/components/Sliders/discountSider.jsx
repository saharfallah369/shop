import ProductLeatest from '@/components/Products/productLeatestCard'
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
const DiscountSlider = () =>{
    return(
        <>
            <Swiper 
                    breakpoints={{
                        390:{
                            slidesPerView: 1
                        },
                        360:{
                            slidesPerView: 1
                        },
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
        </>
    )
}

export default DiscountSlider;