import { IItems } from "@/app/types/basket.type"
import BasketProduct from "./BasketProduct"

interface PropsType {
  products?:IItems[],
   clearebasketFunc:()=>void 
}

const BaksetLeft = ({products,clearebasketFunc}:PropsType) => {
    console.log(products);
    
    return (
        <div className="basket_left_container">
            <div className="basket_let_top">
                <p className="basket_left_title">
                    Səbətim
                </p>
                <p onClick={clearebasketFunc} className="basket_p cursor-pointer">
                    Səbəti təmizlə
                </p>
            </div>
            {
                products &&  <BasketProduct products={products} />
            }
        
        </div>
    )
}

export default BaksetLeft
