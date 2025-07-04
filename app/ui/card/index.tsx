

import Image from 'next/image'
import './css/customecard.css'
interface CardPropsType {
    title: string,
    image: string,
    onclik: () => void,
    price: number
}
const Card = ({ title, image, onclik, price }: CardPropsType) => {
    return (
        <div  className='card_content'>
            <div className='card_image'>
                <Image src={image} alt={image + title} width={118} height={72} />
            </div>
            <h6 className='card_title'>{title}</h6>
            <div className='card_price'>
                {price}Azn
            </div>
            <div style={{marginTop:"auto"}}>
                <button onClick={onclik} className='add_basket_btn'>Səbətə əlavə et</button>
            </div>
        </div>
    )
}

export default Card
