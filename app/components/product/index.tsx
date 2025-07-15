'use client'
import ComponentSidebar from "@/app/ui/componentSideBar"
import sideBarImage from '@/app/assets/images/image 13.svg'
import MyBasket from "@/app/ui/myBasket";
import ProductInfo from "./ProductInfo";
import EmptyBasket from "../basket/EmptyBasket";
import EmptyProduct from "./EmptyProduct";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useEffect, useMemo } from "react";
import { getAllCategory } from "@/app/store/slices/categorySlice";
import { fetchProducts, productDetailFunc } from "@/app/store/slices/productSlice";
import { addBasketFunc, deleteProduct, getAllBasketProducts } from "@/app/store/slices/basketSlice";
import { debounce } from "lodash";
const categories = [
    "Tərəvəzlər",
    "Qış meyvələri",
    "Dietik Batonlar",
    "Xlebçı",
    "Diabetik Məhsullar",
    "Dietik İçkilər",
    "Qlütensiz Məhsullar",
]



const ProductBody = ({ id }: string) => {
    const dispatch = useAppDispatch();
    const { product ,products} = useAppSelector((state) => state.products)
    const { categories } = useAppSelector((state) => state.categories)
    const { baskets } = useAppSelector((state) => state.baskets)

    const filterProduct = products.find((product) => product.id == product.id)
    const isBasketProduct = baskets?.items?.find((basket) => basket?.product?.id == id);
console.log(baskets,"products");

    useEffect(() => {
        dispatch(getAllCategory())
        dispatch(productDetailFunc(id))
        dispatch(getAllBasketProducts())
        dispatch(fetchProducts())
    }, [dispatch])


    const addbasket = useMemo(() => {
        console.log("click");

        return debounce(async (id: string) => {
            await dispatch(addBasketFunc(id));
            await dispatch(getAllBasketProducts());
        }, 500);
    }, [dispatch]);

    const deleteProductFunc = useMemo(() => {
        console.log("click");
        return debounce(async (id: string) => {
            await dispatch(deleteProduct(id));
            await dispatch(getAllBasketProducts());
        }, 500);
    }, [dispatch]);

    console.log(product, "product");

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
                    <ProductInfo isBasketProduct={isBasketProduct} product={filterProduct} addbasket={addbasket} deletebasket={deleteProductFunc} />
                    <div>

                        {
                            baskets?.items?.length > 0 ? <MyBasket baskets={baskets} addbasket={addbasket} deleteProduct={deleteProductFunc} /> : <EmptyBasket />
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBody
