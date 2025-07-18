

import { useAppDispatch } from '@/app/store/hooks';
import { addBasketFunc, deleteProduct, getAllBasketProducts } from '@/app/store/slices/basketSlice';
import { IItems } from '@/app/types/basket.type';
import { debounce } from 'lodash';
import Image from 'next/image'
import { useMemo } from 'react';
import { FiMinus } from 'react-icons/fi';

import { MdDeleteOutline } from 'react-icons/md'

interface PropsType {
    products:IItems[]
}
const BasketProduct = ({ products }:PropsType) => {
    const dispatch = useAppDispatch()
    const addbasket = useMemo(() => {
        return debounce(async (id: string) => {
            await dispatch(addBasketFunc(id));
            await dispatch(getAllBasketProducts());
        }, 500);
    }, [dispatch]);
    const deleteProductFunc = useMemo(() => {
        return debounce(async (id: string) => {
            await dispatch(deleteProduct(id));
            await dispatch(getAllBasketProducts());
        }, 500);
    }, [dispatch]);

    return (
        <div className='basket_product_container'>
            {
                products?.map((product) => (
                    <div key={product?.id} className='product_content'>
                        <div>
                            {

                                product?.product?.img_url && <Image src={product?.product?.img_url} alt='product' width={114} height={98} />
                            }
                        </div>
                        <div>
                            <h6 className='priduct_name'>
                                {product?.product?.title}
                            </h6>
                            <p className='product_price'>
                                {product?.product?.price} AZN
                            </p>
                        </div>
                        <div className='product_btns'>
                            <button
                                onClick={() => deleteProductFunc(String(product?.product?.id))}
                                className='hover:!text-[#F29298]'
                            >
                                {
                                    product?.quantity > 1 ? <FiMinus size={24} /> : <MdDeleteOutline size={24} />

                                }

                            </button>
                            <div className='product_count'>
                                {product?.quantity}
                            </div>
                            <button onClick={() => addbasket(String(product?.product?.id))}>
                                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0859 8.74609H20.0156V12.1641H12.0859V21.1484H8.45312V12.1641H0.523438V8.74609H8.45312V0.445312H12.0859V8.74609Z" fill="currentColor" />
                                </svg>

                            </button>
                        </div>

                    </div>
                ))
            }


        </div>
    )
}

export default BasketProduct