import { IDataType } from '@/app/types/camping.type';
import styles from '../css/landig.module.css'


const Specialoffers = ({ data }: {data:IDataType}) => {
    const filtered = data?.data?.filter((item) => item.img_url).slice(0, 6);
    return (
        <section>
            <h2 className={styles.specialoffers_title}>
                Xüsisi Təkliflər
            </h2>
            <p className={styles.specialoffers_desc}>
                Tick-tack da hər gün super təklifləri qacırtma
            </p>
            <div className={styles.spectial_cards}>
                <div className={styles.spectial_card} style={{ backgroundImage: `url(${filtered?.[3].img_url})`, backgroundPosition: "center", objectFit: "fill" }}>
                    <div className={styles.spectial_card_content}>
                        <h2>
                            {filtered?.[3].title}
                        </h2>
                        <p>
                            {filtered?.[3].description}
                        </p>
                    </div>
                </div>
                <div className={styles.spectial_card} style={{ backgroundImage: `url(${filtered?.[1].img_url})`, backgroundPosition: "center", objectFit: "cover", backgroundSize: "100%" }}>
                    <div className={styles.spectial_card_content} >
                        <h2>
                            {filtered?.[1].title}
                        </h2>
                        <p>
                            {filtered?.[1].description}

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specialoffers