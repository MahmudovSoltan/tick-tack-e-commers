import React from 'react'
import styles from './css/footer.module.css'
import FooterCompanies from './FooterCompanies'
import FooterOther from './FooterOther'
import FooterLaw from './FooterLaw'
import FooterSubscribe from './FooterSubscribe'
import FooterBottom from './FooterBottom'
const Footer = () => {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_top_content}>
                <div className={styles.footer_top_left}>
                    <FooterCompanies />
                    <FooterOther />
                    <FooterLaw />
                </div>
                <FooterSubscribe />
            </div>
            <FooterBottom />
        </footer>
    )
}

export default Footer
