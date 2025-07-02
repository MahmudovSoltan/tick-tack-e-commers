import { PiMapPinSimpleAreaBold } from 'react-icons/pi';
import styles from '../css/landig.module.css'
import { AiTwotoneShop } from "react-icons/ai";
import { LuShoppingBasket, LuSquareUser } from 'react-icons/lu';

const Ourindicators = () => {
  return (
    <div className={styles.indicators_container}>
        <h2>
            Bizim göstəricilər
        </h2>
        <p>
            Biz yeni imkanlar axtarırıq və digərlərinin bilmıfikləri yerə getmeyə hazırıq
        </p>
        <div className={styles.indicators_cards}>
            <div className={styles.indicators_card}>
                <p className={styles.indicators_count}>
                    137
                </p>
                <p className={styles.indicators_text}>
                    Market sayı   <AiTwotoneShop color='green'/>

                </p>
            </div>
            <div className={styles.indicators_card}>
                <p className={styles.indicators_count}>
                    11
                </p>
                <p className={styles.indicators_text}>
                    Region   <PiMapPinSimpleAreaBold color='green'/>

                </p>
            </div>
            <div className={styles.indicators_card}>
                <p className={styles.indicators_count}>
                50000+
                </p>
                <p className={styles.indicators_text}>
                    Məhsul sayı   <LuShoppingBasket color='green'/>

                </p>
            </div>
            <div className={styles.indicators_card}>
                <p className={styles.indicators_count}>
                    137
                </p>
                <p className={styles.indicators_text}>
                    Əməkdaş sayı   <LuSquareUser color='green'/>

                </p>
            </div>
        </div>
    </div>
  )
}

export default Ourindicators