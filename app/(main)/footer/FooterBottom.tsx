import { FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import styles from './css/footer.module.css'
import { AiFillYoutube } from 'react-icons/ai'
const FooterBottom = () => {
  return (
    <div className={styles.footer_bootom}>
      <div>
        2024 Azerbaijan supermarket
      </div>
      <div>
        <ul className={styles.footer_socials}>
          <li>
            <FaFacebook size={24} />
          </li>
          <li><FaInstagram size={24} />
          </li>
          <li><AiFillYoutube size={24} /></li>
          <li><FaTelegramPlane size={24} /></li>
          <li><FaLinkedin size={24} /></li>
          <li><FaWhatsapp size={24} /></li>
        </ul>
      </div>
    </div>
  )
}

export default FooterBottom