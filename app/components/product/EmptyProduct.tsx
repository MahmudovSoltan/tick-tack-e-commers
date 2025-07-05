import image from '@/app/assets/images/Group 42.svg'
import Image from 'next/image'
const EmptyProduct = () => {
    return (
        <div className='empty_product_contianer'>
            <div>
                <Image src={image} alt='empt_image' width={208} height={208} />
            </div>
            <p className='empty_product_text'>
                Bu kateqoriyada məhsul yoxdur
            </p>
        </div>
    )
}

export default EmptyProduct
