

import Image from 'next/image'
import './css/customecard.css'
import image1 from '@/app/assets/images/image 13.svg'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/app/store/hooks'
import LoadingSpinner from '@/app/components/lodanig/LoadingSpinner'
import { IBaskets } from '@/app/types/basket.type'

interface CardPropsType {
    title: string,
    image: string | undefined | null,
    onclik: () => void,
    price: number,
    baskets: IBaskets | null,
    id: number,
    deleteProductFunc: (id: string) => void
}
const Card = ({ title, image, onclik, price, id, baskets, deleteProductFunc }: CardPropsType) => {
    const navigate = useRouter()
    const isBasketProduct = baskets?.items?.find((basket) => basket?.product?.id === id);
    const { loading } = useAppSelector((state) => state.baskets)

    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <div className='card_content'>
            <div className='card_image' onClick={() => navigate.push(`/product/${id}`)}>
                {
                    image ? <Image src={image} alt={image + title} width={118} height={72} />
                        : <Image src={image1} alt={image1 + title} width={118} height={72} />
                }

            </div>
            <h6 className='card_title'>{title}</h6>
            <div className='card_price'>
                {price}Azn
            </div>
            {!isBasketProduct ? <div style={{ marginTop: "auto" }}>
                <button onClick={onclik} className='add_basket_btn'>Səbətə əlavə et</button>
            </div> : <div className="basket_buttons mt-auto mb-1.5">
                <button className="decriment_btn !w-[30px] !h-[25px] cursor-pointer" onClick={() => deleteProductFunc(String(id))}>
                    <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="15" height="3" fill="white" />
                    </svg>
                </button>
                <div className="basket_count">
                    {isBasketProduct?.quantity}
                </div>
                <button onClick={onclik} className="incriment_btn !w-[30px] !h-[25px]">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="6" width="15" height="3" fill="white" />
                        <rect x="9" width="15" height="3" transform="rotate(90 9 0)" fill="white" />
                    </svg>
                </button>
            </div>
            }

        </div>
    )
}

export default Card
