'use client'

import CheckoutBody from "@/app/components/checekout/CheckoutBody"
import Header from "../header"
import './css/checkout.css'
const Checkout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Header role="checkout" />
      </div>
      <section className="checkout_body">
        <CheckoutBody />
      </section>
    </div>
  )
}

export default Checkout
