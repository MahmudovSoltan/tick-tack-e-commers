import Image from 'next/image'
import './css/emptyBasket.css'
import emptyBasketImagre from '@/app/assets/images/sebet 1.svg'
const EmptyBasket = () => {
    return (
        <div className='empty_basket_container'>
            <div>
                <Image src={emptyBasketImagre} alt='basket-image' width={239} height={200} />
            </div>
            <div className='empty_info'>
                Səbətiniz boşdur
            </div>
            <p className='empty_basket_text'>
                Sifariş vermək üçün
                səbətinizə məhsul əlavə edin
            </p>
        </div>
    )
}

export default EmptyBasket
