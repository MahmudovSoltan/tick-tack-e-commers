"use client"

import LinkComponent from "@/app/ui/links"
import CheckoutRight from "./CheckoutRight"
import CheckoutLeft from "./CheckoutLeft"
import CheckoutConfirmModal from "./CheckoutConfirmModal"
import { useState } from "react"
import { useAppDispatch } from "@/app/store/hooks"
import { addCheckoutFunc } from "@/app/store/slices/checkoutSlice"
export interface IfomrType {
    paymentMethod:string,
    phone:string,
    address:string,
    note:string

}
const CheckoutBody = () => {
    const [isModal, setIsModal] = useState<boolean>(false)
    const [data, setData] = useState<IfomrType | null>(null)
    const dispatch = useAppDispatch()
    const openModal = (form:IfomrType) => {
        console.log(form,"checkout from");
        setData(form)
        setIsModal(true)
    }
    const handleSubmit = async () => {
       
        dispatch(addCheckoutFunc(data))
        setIsModal(false)
        
    }
    const closeModal = ()=>{
        setIsModal(false)
        setData(null)
    }
    return (
        <div className="container mx-auto">
            <LinkComponent title="checkout" />
            <div className="flex gap-5">
                <CheckoutLeft openModal={openModal} />
                <CheckoutRight />
                {
                    isModal && <CheckoutConfirmModal closeModal={closeModal} handleSubmit={handleSubmit} />
                }

            </div>
        </div>
    )
}

export default CheckoutBody
