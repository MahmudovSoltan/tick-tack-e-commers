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



interface PropsType {
    data? : {data:IDataType[]}
}
const SwiperCarusel = ({ data }:PropsType) => {
    const filtered = data?.data?.filter((item) => item.img_url).slice(1, 5);
    const navigate = useRouter()
    const bg_url = "https://www.bigbasketco.com/wp-content/uploads/good-l-corp-what-americas-best-grocery-stores-have-in-common.jpg"
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

    console.log(data);
    
    return (
        <section>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                className={`mySwiper  home_top_swiper`}

            >

                {
                    filtered?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={styles.home_swiper_card} style={{ backgroundImage: `url(${bg_url})`, backgroundPosition: "center" }}>
                                <div className={styles.home_swiper_card_content}>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <button className={styles.swiper_btn} onClick={handleNavigate}>Ətraflı</button>
                                </div>
                                {/* <div className={styles.home_swiper_card_image}>
                                    <Image
                                        src={item.img_url}
                                        width={200}
                                        height={200}
                                        alt={item.title}
                                        className={styles.card_image}
                                    />
                                </div> */}
                            </div>
                        </SwiperSlide>

                    ))
                }

                {/* <SwiperSlide>
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
                </SwiperSlide> */}
                {/* <SwiperSlide>
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
                </SwiperSlide> */}
                {/* <SwiperSlide>
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
                </SwiperSlide> */}

            </Swiper>

        </section>
    )
}

export default SwiperCarusel