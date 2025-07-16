'use client'
import ComponentSidebar from "@/app/ui/componentSideBar"
import sideBarImage from '@/app/assets/images/image 13.svg'
import MyBasket from "@/app/ui/myBasket";
import ProductInfo from "./ProductInfo";
import EmptyBasket from "../basket/EmptyBasket";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useEffect, useMemo, useState } from "react";
import { getAllCategory } from "@/app/store/slices/categorySlice";
import { fetchProducts, productDetailFunc } from "@/app/store/slices/productSlice";
import { addBasketFunc, deleteProduct, getAllBasketProducts, removeProduct } from "@/app/store/slices/basketSlice";
import { debounce } from "lodash";
import { addAndDeleteFavorites } from "@/app/store/slices/favoritesSLice";
import LoadingSpinner from "../lodanig/LoadingSpinner";




const ProductBody = ({ id }: string) => {
    const [loading, setLoading] = useState(true)
    const dispatch = useAppDispatch();
    const { product } = useAppSelector((state) => state.products)
    const { categories } = useAppSelector((state) => state.categories)
    const { baskets } = useAppSelector((state) => state.baskets)

    const isBasketProduct = baskets?.items?.find((basket) => basket?.product?.id == id);
    console.log(baskets, "products");

    useEffect(() => {
        dispatch(getAllCategory())
        dispatch(productDetailFunc(id))
        dispatch(getAllBasketProducts())
        dispatch(fetchProducts())
         setTimeout(()=>{
            setLoading(false)
         },500)
    }, [dispatch])


    const addbasket = useMemo(() => {

        return debounce(async (id: string) => {
            setLoading(true)
            await dispatch(addBasketFunc(id));
            await dispatch(getAllBasketProducts());
            setLoading(false)
        }, 500);
    }, [dispatch]);

    const deleteProductFunc = useMemo(() => {
        return debounce(async (id: string) => {
            setLoading(true)
            await dispatch(deleteProduct(id));
            await dispatch(getAllBasketProducts());
            setLoading(false)
        }, 500);
    }, [dispatch]);
    const removeProductFunc = useMemo(() => {
        return debounce(async (id: string) => {
            setLoading(true)
            await dispatch(removeProduct(id));
            await dispatch(getAllBasketProducts());
            setLoading(false)
        }, 500);
    }, [dispatch]);

    const addFavoritesFUnc = useMemo(() => {
        return debounce(async (id: string) => {
            setLoading(true)
            await dispatch(addAndDeleteFavorites(id));
            await dispatch(getAllBasketProducts());
            await dispatch(productDetailFunc(id))
            setLoading(false)
        }, 500);
    }, [dispatch]);

    if (loading) {
        return <LoadingSpinner />
    }

    return (
        <div>
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="categories_title">
                        Kateqorialar
                    </h2>
                    <div className="w-[375px] flex items-center justify-start">
                        <h2 className="categories_title">
                            Səbətim
                        </h2>

                    </div>

                </div>
                <div className="categories_body_container">
                    <ComponentSidebar currentCategory={product?.category?.name} image={sideBarImage} links={categories?.data} />
                    <ProductInfo
                        isBasketProduct={isBasketProduct}
                        product={product}
                        addbasket={addbasket}
                        deletebasket={deleteProductFunc}
                        addFavoritesFUnc={addFavoritesFUnc}
                    />
                    <div>

                        {
                            baskets?.items?.length > 0 ? <MyBasket removeProductFunc={removeProductFunc} baskets={baskets} addbasket={addbasket} deleteProduct={deleteProductFunc} /> : <EmptyBasket />
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBody
