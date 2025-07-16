import BasketProduct from "./BasketProduct"

const BaksetLeft = ({products,clearebasketFunc}) => {

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
            <BasketProduct products={products} />
        </div>
    )
}

export default BaksetLeft
