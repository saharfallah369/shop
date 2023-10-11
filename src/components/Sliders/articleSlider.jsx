import ArticleCat from "@/components/Article/articleCat";
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ArticleSlider = () => {
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
                        slidesPerView: 2
                    },
                    1500:{
                        slidesPerView: 4
                    },
                    1300:{
                        slidesPerView: 4
                    },
                    1000:{
                        slidesPerView: 4
                    },
                    700:{
                        slidesPerView: 3
                    },
                    600:{
                        slidesPerView: 2
                    },
                }}
                slidesPerView={4} 
                modules={[Autoplay, Pagination, Navigation]}
                navigation={{ nextEl: ".arrowArticle-left", prevEl: ".arrowArticle-right" }}
                loop={true}
                autoplay = {{
                    delay:3300,
                    disableOnInteraction: false,
                }   }
                centeredSlides={true}
                className="grid grid-cols-12 h-[400px] gap-10 mt-10 mySwiper">

                    <SwiperSlide>
                        <ArticleCat />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ArticleCat />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ArticleCat />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ArticleCat />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ArticleCat />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ArticleCat />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ArticleCat />
                    </SwiperSlide>    
            </Swiper>
        </>
    )
}

export default ArticleSlider;