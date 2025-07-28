'use client'
import { IoIosArrowRoundBack } from "react-icons/io"
import productImage from '@/app/assets/images/Web 1920 - 7-image3 1.svg'
import Image from "next/image"
import { FaHeart } from "react-icons/fa"
import { useRouter } from "next/navigation"
import { IItems } from "@/app/types/basket.type"
import { IProduct } from "@/app/types/product.type"



interface PropsType {
    product: IProduct | null,
    addbasket: (id: string) => void,
    deletebasket: (id: string) => void,
    isBasketProduct:IItems | undefined,
    addFavoritesFUnc: (id: string) => void
}
const ProductInfo = ({ product, addbasket, deletebasket, isBasketProduct, addFavoritesFUnc }: PropsType) => {

    const navigate = useRouter()



    return (
        <div className="product_info_container">
            <div className="favorites_icon">
                {
                    product?.is_favorite ? <FaHeart onClick={() => addFavoritesFUnc(String(product.id))} size={36} color="red" /> :
                        <svg onClick={() => addFavoritesFUnc(String(product?.id))} width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_41_3087)">
                                <path d="M33.0922 5.1136C31.2071 3.2285 28.7115 2.19819 26.0479 2.19819C23.3843 2.19819 20.8811 3.23613 18.996 5.12123L18.0115 6.10575L17.0117 5.10596C15.1266 3.22087 12.6157 2.17529 9.95211 2.17529C7.29619 2.17529 4.79291 3.21324 2.91545 5.0907C1.03036 6.97579 -0.00759016 9.47907 4.17904e-05 12.1426C4.17904e-05 14.8062 1.04562 17.3018 2.93071 19.1869L17.2635 33.5197C17.462 33.7182 17.7291 33.825 17.9886 33.825C18.248 33.825 18.5152 33.7258 18.7136 33.5274L33.0769 19.2174C34.962 17.3324 36 14.8291 36 12.1655C36.0076 9.50197 34.9773 6.99869 33.0922 5.1136ZM31.6269 17.7597L17.9886 31.3446L4.38078 17.7368C2.88492 16.241 2.06067 14.2567 2.06067 12.1426C2.06067 10.0286 2.87729 8.04427 4.37315 6.55603C5.86138 5.0678 7.84569 4.24355 9.95211 4.24355C12.0662 4.24355 14.0581 5.0678 15.554 6.56367L17.2788 8.28849C17.6833 8.69298 18.332 8.69298 18.7365 8.28849L20.446 6.57893C21.9419 5.08307 23.9338 4.25882 26.0403 4.25882C28.1467 4.25882 30.131 5.08307 31.6269 6.5713C33.1227 8.06716 33.9393 10.0515 33.9393 12.1655C33.947 14.2796 33.1227 16.2639 31.6269 17.7597Z" fill="currentColor" />
                            </g>
                            <defs>
                                <clipPath id="clip0_41_3087">
                                    <rect width="36" height="36" fill="currentColor" />
                                </clipPath>
                            </defs>
                        </svg>
                }



            </div>
            <div className="go_back max-w-max mb-4" onClick={() => navigate.back()}>
                <IoIosArrowRoundBack size={24} />
                geri qayıt
            </div>
            <div className="product_info_body">
                <div className="product_image">
                    {
                        product?.img_url ? <Image src={product?.img_url} alt="Product_image" width={250} height={150} /> : <Image src={productImage} alt="Product_image" width={250} height={150} />

                    }

                </div>
                <div className="product_body_content">
                    <h3>
                        {product?.title}
                    </h3>
                    <p>
                        {product?.description}
                    </p>
                    <div className="product_price">
                        {product?.price} AZN
                    </div>

                    {
                        isBasketProduct ? <div className="peroduct_btns">
                            <button onClick={() => deletebasket(String(product?.id))}>
                                <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.941406" width="13.9091" height="3" fill="#2B3043" />
                                </svg>


                            </button>
                            <div className="product_count">
                                {isBasketProduct?.quantity}
                            </div>
                            <button onClick={() => addbasket(String(product?.id))}>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.150391" y="6" width="13.9091" height="3" fill="#2B3043" />
                                    <rect x="8.5957" y="0.5" width="14" height="2.98052" transform="rotate(90 8.5957 0.5)" fill="#2B3043" />
                                </svg>

                            </button>
                        </div> : <button onClick={() => addbasket(String(product?.id))} className="basket_btn">
                            Səbətə əlavə et
                        </button>
                    }


                </div>
            </div>
        </div>
    )
}

export default ProductInfo