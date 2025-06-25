"use client"
import styles from '../css/home.module.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const SwiperCarusel = () => {
    return (

        <section>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                 
                loop={true}
               
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={styles.home_swiper_card}>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.home_swiper_card}>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.home_swiper_card}>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.home_swiper_card}>

                    </div>
                </SwiperSlide>

            </Swiper>

        </section>
    )
}

export default SwiperCarusel