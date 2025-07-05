import product from '@/app/assets/images/image 14.svg'
import Image from 'next/image'
import { MdDeleteOutline } from 'react-icons/md'
const BasketProduct = () => {
    return (
        <div className='basket_product_container'>
            <div className='product_content'>
                <div>
                    <Image src={product} alt='product' width={114} height={98} />
                </div>
                <div>
                    <h6 className='priduct_name'>
                        Portağal 1 kq
                    </h6>
                    <p className='product_price'>
                        2.35 AZN
                    </p>
                </div>
                <div className='product_btns'>
                    <button>
                        <MdDeleteOutline size={24} />
                    </button>
                    <div className='product_count'>
                        1
                    </div>
                    <button>
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0859 8.74609H20.0156V12.1641H12.0859V21.1484H8.45312V12.1641H0.523438V8.74609H8.45312V0.445312H12.0859V8.74609Z" fill="currentColor" />
                        </svg>

                    </button>
                </div>

            </div>
            <div className='product_content'>
                <div>
                    <Image src={product} alt='product' width={114} height={98} />
                </div>
                <div>
                    <h6 className='priduct_name'>
                        Portağal 1 kq
                    </h6>
                    <p className='product_price'>
                        2.35 AZN
                    </p>
                </div>
                <div className='product_btns'>
                    <button>
                        <MdDeleteOutline size={24} />
                    </button>
                    <div className='product_count'>
                        1
                    </div>
                    <button>
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0859 8.74609H20.0156V12.1641H12.0859V21.1484H8.45312V12.1641H0.523438V8.74609H8.45312V0.445312H12.0859V8.74609Z" fill="currentColor" />
                        </svg>

                    </button>
                </div>

            </div>
        </div>
    )
}

export default BasketProduct