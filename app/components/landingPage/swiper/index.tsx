"use client"
import styles from '../css/landig.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IDataType } from '@/app/types/camping.type';
import Image from 'next/image';



interface PropsType {
    data?: IDataType | null;
}
const SwiperCarusel = ({ data }: PropsType) => {


    const filtered = data?.data?.filter((item) => item.img_url).slice(0, 5);
    const navigate = useRouter()
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        setUser(token);
    }, []);
    const handleNavigate = () => {
        if (user) {
            navigate.push("/home")
        } else if (!user) {
            navigate.push("/auth")
        }
    }


    return (
        <section>
            <Swiper
                // slidesPerView={2}
                spaceBetween={30}
                loop={true}
                navigation={true}
                // autoplay={{
                //     delay: 2000,
                //     disableOnInteraction: false,
                // }}
                // modules={[Navigation, Autoplay]}
                breakpoints={{
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1000: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                }}
                className={`mySwiper home_top_swiper ${styles.main_swiper}`}

            >
                <SwiperSlide>
                    <div className={`${styles.home_swiper_card}   ${styles.home_swiper_zero}`}>
                        <div className={styles.home_swiper_card_content}>
                            <h2>{filtered?.[0].title}</h2>
                            <p>{filtered?.[0].description}</p>
                            <button className={styles.swiper_btn} onClick={handleNavigate}>Ətraflı</button>
                        </div>
                        <div className={styles.home_swiper_card_image}>
                            {
                                filtered?.[0].img_url && <Image
                                    src={filtered?.[0].img_url}
                                    width={200}
                                    height={200}
                                    alt={filtered?.[0].title}
                                    className={styles.card_image}
                                />
                            }

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.home_swiper_card}   ${styles.home_swiper_one}`}>
                        <div className={`${styles.home_swiper_card_content} `}>
                            <h2>{filtered?.[1].title}</h2>
                            <p>{filtered?.[1].description}</p>
                            <button className={styles.swiper_btn} onClick={handleNavigate}>Ətraflı</button>
                        </div>
                        <div className={styles.home_swiper_card_image}>
                            {
                                filtered?.[1].img_url && <Image
                                    src={filtered?.[1].img_url}
                                    width={200}
                                    height={200}
                                    alt={filtered?.[1].title}
                                    className={styles.card_image}
                                />}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.home_swiper_card}   ${styles.home_swiper_two}`}>
                        <div className={styles.home_swiper_card_content}>
                            <h2>{filtered?.[2].title}</h2>
                            <p>{filtered?.[2].description}</p>
                            <button className={styles.swiper_btn} onClick={handleNavigate}>Ətraflı</button>
                        </div>
                        <div className={styles.home_swiper_card_image}>
                            {
                                filtered?.[2].img_url && <Image
                                    src={filtered?.[2].img_url}
                                    width={200}
                                    height={200}
                                    alt={filtered?.[2].title}
                                    className={styles.card_image}
                                />
                            }
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section >
    )
}

export default SwiperCarusel