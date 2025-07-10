import styles from '../css/landig.module.css'
const Specialoffers = () => {
    const image_url1 = "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2024-02/Grocery%20Store.jpg"
    const image_url2 = "https://hopkinsdiabetesinfo.org/wp-content/uploads/2022/02/Food-Grocery-Vegetables-1140771380.jpg"
    return (
        <section>
            <h2 className={styles.specialoffers_title}>
                Xüsisi Təkliflər
            </h2>
            <p className={styles.specialoffers_desc}>
                Tick-tack da hər gün super təklifləri qacırtma
            </p>
            <div className={styles.spectial_cards}>
                <div className={styles.spectial_card} style={{ backgroundImage: `url(${image_url1})`, backgroundPosition: "center", objectFit: "fill" }}>
                    <div className={styles.spectial_card_content}>
                        <h2>
                            Tick tack e-commers
                        </h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, cum.
                        </p>
                    </div>
                </div>
                <div className={styles.spectial_card} style={{ backgroundImage: `url(${image_url2})`, backgroundPosition: "center", objectFit: "cover", backgroundSize: "100%" }}>
                    <div className={styles.spectial_card_content} >
                        <h2>
                            Tick tack e-commers
                        </h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, cum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specialoffers