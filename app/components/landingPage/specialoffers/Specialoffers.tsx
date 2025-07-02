import styles from '../css/landig.module.css'
const Specialoffers = () => {
    return (
        <section>
            <h2 className={styles.specialoffers_title}>
                Xüsisi Təkliflər
            </h2>
            <p className={styles.specialoffers_desc}>
                Tick-tack da hər gün super təklifləri qacırtma
            </p>
            <div className={styles.spectial_cards}>
                <div className={styles.spectial_card}>
                    <div className={styles.spectial_card_content}>
                        <h2>
                            Tick tack e-commers
                        </h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, cum.
                        </p>
                    </div>
                </div>
                <div className={styles.spectial_card}>
                    <div className={styles.spectial_card_content}>
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