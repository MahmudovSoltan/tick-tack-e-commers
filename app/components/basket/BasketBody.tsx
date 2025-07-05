import BaksetLeft from "./BaksetLeft"
import BasketTotalAmount from "./BasketTotalAmount"

const BasketBody = () => {
    return (
        <div className="basket_body_container">
            <BaksetLeft />
            <BasketTotalAmount/>
        </div>
    )
}

export default BasketBody