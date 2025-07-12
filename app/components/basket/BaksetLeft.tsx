import BasketProduct from "./BasketProduct"

const BaksetLeft = ({products}) => {
    return (
        <div className="basket_left_container">
            <div className="basket_let_top">
                <p className="basket_left_title">
                    Səbətim
                </p>
                <p className="basket_p cursor-pointer">
                    Səbəti təmizlə
                </p>
            </div>
            <BasketProduct products={products} />
        </div>
    )
}

export default BaksetLeft
