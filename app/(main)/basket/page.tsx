

import LinkComponent from "@/app/ui/links"
import Header from "../header"
import './css/basket.css'
import BasketBody from "@/app/components/basket/BasketBody"
const Basket = () => {
    return (
        <div >
            <div className="container mx-auto">
                <Header role="basket" />

            </div>
            <section className="basket_contianer">
                <div className="container mx-auto">
                    <LinkComponent title="Basket" />
                    <BasketBody />
                </div>
            </section>
        </div>
    )
}

export default Basket
