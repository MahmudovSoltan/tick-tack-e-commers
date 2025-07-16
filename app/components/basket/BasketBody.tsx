'use client'

import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import BaksetLeft from "./BaksetLeft"
import BasketTotalAmount from "./BasketTotalAmount"
import { useEffect } from "react"
import { clearebasket, getAllBasketProducts } from "@/app/store/slices/basketSlice"
import LoadingSpinner from "../lodanig/LoadingSpinner"
import EmptyBasket from "./EmptyBasket"

const BasketBody = () => {
    const { baskets, loading } = useAppSelector((state) => state.baskets)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAllBasketProducts())
    }, [])
    const clearebasketFunc = async () => {
        await dispatch(clearebasket())
        await dispatch(getAllBasketProducts())
    }
    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <div className="basket_body_container">

            {
                baskets.length > 0 ? <>  <BaksetLeft products={baskets?.items} clearebasketFunc={clearebasketFunc} />
                    <BasketTotalAmount products={baskets} /></> :  <div className="flex items-center justify-center w-full mb-14 bg-white rounded-2xl"><EmptyBasket /></div> 
            }

        </div>
    )
}

export default BasketBody