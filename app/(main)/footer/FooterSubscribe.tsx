import styles from './css/footer.module.css'
const FooterSubscribe = () => {
  return (
    <div>

      <h4 className={styles.footer_lins_title}>
        Yeniliklərə abune olun
      </h4>
      <div className={styles.footer_input}>
        <input type="text" placeholder='E-mail daxil edin' />
        <button>Göndər</button>
      </div>
    </div>
  )
}

export default FooterSubscribe
