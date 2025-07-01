"use client"
import styles from '../css/home.module.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
const SwiperCarusel = () => {
    return (

        <section>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                navigation={true}
                // autoplay={{
                //     delay: 2000, // 3 saniyə sonra slayd dəyişəcək
                //     disableOnInteraction: false, // istifadəçi toxunduqda dayanmaması üçün
                // }}
                modules={[Navigation, Autoplay]}
                className={`mySwiper  home_top_swiper`}

            >
                <SwiperSlide>
                    <div className={styles.home_swiper_card}>
                        <div className={styles.home_swiper_card_content}>
                            <h2>
                                Tick tack e-commers
                            </h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, cum.
                            </p>
                            <button className={styles.swiper_btn}>Ətraflı</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.home_swiper_card}>
                        <div className={styles.home_swiper_card_content}>
                            <h2>
                                Tick tack e-commers
                            </h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, cum.
                            </p>
                                 <button className={styles.swiper_btn}>Ətraflı</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.home_swiper_card}>
                         <div className={styles.home_swiper_card_content}>
                            <h2>
                                Tick tack e-commers
                            </h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, cum.
                            </p>
                                 <button className={styles.swiper_btn}>Ətraflı</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.home_swiper_card}>
                                   <div className={styles.home_swiper_card_content}>
                            <h2>
                                Tick tack e-commers
                            </h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, cum.
                            </p>
                                 <button className={styles.swiper_btn}>Ətraflı</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section>
    )
}

export default SwiperCarusel