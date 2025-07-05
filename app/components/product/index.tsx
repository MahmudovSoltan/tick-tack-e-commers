'use client'
import ComponentSidebar from "@/app/ui/componentSideBar"
import sideBarImage from '@/app/assets/images/image 13.svg'
import MyBasket from "@/app/ui/myBasket";
import ProductInfo from "./ProductInfo";
import EmptyBasket from "../basket/EmptyBasket";
import EmptyProduct from "./EmptyProduct";
const categories = [
    "Tərəvəzlər",
    "Qış meyvələri",
    "Dietik Batonlar",
    "Xlebçı",
    "Diabetik Məhsullar",
    "Dietik İçkilər",
    "Qlütensiz Məhsullar",
]



const ProductBody = () => {
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
                    <ComponentSidebar image={sideBarImage} links={categories} />
                    {/* <ProductInfo /> */}
                    <EmptyProduct />
                    <div>
                        {/* <MyBasket /> */}
                        <EmptyBasket />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBody
