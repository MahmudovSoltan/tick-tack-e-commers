import BasketProduct from "./BasketProduct"

const BaksetLeft = () => {
    return (
        <div className="basket_left_container">
            <div className="basket_let_top">
                <p className="basket_left_title">
                    Səbətim
                </p>
                <p className="basket_p">
                    Səbəti təmizlə
                </p>
            </div>
            <BasketProduct/>
        </div>
    )
}

export default BaksetLeft
