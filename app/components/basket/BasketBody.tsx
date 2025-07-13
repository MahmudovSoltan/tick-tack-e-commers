'use client'

import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import BaksetLeft from "./BaksetLeft"
import BasketTotalAmount from "./BasketTotalAmount"
import { useEffect } from "react"
import { getAllBasketProducts } from "@/app/store/slices/basketSlice"

const BasketBody = () => {
    const { baskets } = useAppSelector((state) => state.baskets)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAllBasketProducts())
    }, [])
    return (
        <div className="basket_body_container">
            <BaksetLeft products={baskets?.items} />
            <BasketTotalAmount products={baskets} />
        </div>
    )
}

export default BasketBody