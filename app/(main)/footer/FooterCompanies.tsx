import styles from './css/footer.module.css'
const FooterCompanies = () => {
  return (
    <div>
        <h4 className={styles.footer_lins_title}>
            Şirkət
        </h4>
        <ul className={styles.footer_lins}>
            <li>Xüsusi təkliflər</li>
            <li>haqqımızda</li>
            <li>Kartlar</li>
            <li>İcarə verməyə yeriniz var?</li>
            <li>Xəbərlər</li>
            <li>Karyera</li>
            <li>Müştəri xidmətləri</li>
        </ul>
    </div>
  )
}

export default FooterCompanies