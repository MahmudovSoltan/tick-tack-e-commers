import styles from './css/footer.module.css'
const FooterLaw = () => {
  return (
    <div>
      <h4 className={styles.footer_lins_title}>
       Hüquq
      </h4>
      <ul className={styles.footer_lins}>
        <li>İstifadə şərtləri</li>
        <li>İmtina</li>
      </ul>
    </div>
  )
}

export default FooterLaw
