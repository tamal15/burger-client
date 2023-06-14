import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Gallery.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Gallery = () => {
    return (
        <div className="py-5">
            <h1 data-text="User Reviews" className="text-center my-3 user-reviews ">UpComming Gallery</h1>
            <>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    // centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        loop: true,
                        speed: 600,

                        slideShadows: true
                    }
                    }
                    autoplay={{
                        delay: 1000
                    }}


                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/eating-pizza.jpg?quality=82&strip=1" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://st.depositphotos.com/1011514/3590/i/950/depositphotos_35905577-stock-photo-tasty-pizza.jpg" alt="..." width="250" height="300" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://insanelygoodrecipes.com/wp-content/uploads/2020/10/Hamburger-with-Sesame-Seeds-Cheese-and-Veggies-500x375.png" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F09-2022-sausage-pasta%2Fsausage-pasta-4" alt="..." width="250" height="300" />
                    </SwiperSlide>

                </Swiper>
            </>
        </div>
    );
};

export default Gallery;