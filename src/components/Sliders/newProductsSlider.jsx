
import ProductLeatest from '@/components/Products/productLeatestCard';
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation ,A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';

const NewProductSlider = () =>{
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
        </>
    )
}
export default NewProductSlider;