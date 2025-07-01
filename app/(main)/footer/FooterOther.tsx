import styles from './css/footer.module.css'
const FooterOther = () => {
    return (
        <div>
            <h4 className={styles.footer_lins_title}>
                Digər
            </h4>
            <ul className={styles.footer_lins}>
                <li>Onlayn market</li>
                <li>Marketlərimiz</li>
                <li>Korparativ satış</li>
            </ul>
        </div>
    )
}

export default FooterOther
