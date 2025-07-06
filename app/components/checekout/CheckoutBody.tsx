"use client"

import LinkComponent from "@/app/ui/links"
import CheckoutRight from "./CheckoutRight"
import CheckoutLeft from "./CheckoutLeft"
import CheckoutConfirmModal from "./CheckoutConfirmModal"
import { useState } from "react"

const CheckoutBody = () => {
    const [isModal, setIsModal] = useState<boolean>(false)
    return (
        <div className="container mx-auto">
            <LinkComponent title="checkout" />
            <div className="flex gap-5">
                <CheckoutLeft setIsModal={setIsModal} />
                <CheckoutRight />
                {
                    isModal && <CheckoutConfirmModal setIsModal={setIsModal} />
                }

            </div>
        </div>
    )
}

export default CheckoutBody
