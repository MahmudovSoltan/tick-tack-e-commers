'use client'

import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import { getAllBasketProducts } from "@/app/store/slices/basketSlice"
import { useEffect } from "react"

const CheckoutRight = () => {
    const { baskets } = useAppSelector((state) => state.baskets)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAllBasketProducts())
    }, [])
    console.log(baskets);

    return (
        <div className="w-[40%]">
            <h3 className="checkout_title">
                Xülasə
            </h3>
            <div className="checkout_right_content">

                <div>
                    {
                        baskets?.items?.map((item) => (
                            <div className="user_product" key={item.id}>
                                <p>
                                    {item?.product?.title}
                                </p>
                                <p>
                                    {item?.product?.price} AZN
                                </p>
                            </div>

                        ))
                    }

                </div>


                <div className="checkout_right_bottom">
                    <div className="user_paid_info">
                        <p>
                            Ümumi:
                        </p>
                        <p>
                            {baskets?.total} AZN
                        </p>
                    </div>
                    <div className="user_paid_info">
                        <p>
                            Çatdırılma:
                        </p>
                        <p>
                            Pulsuz
                        </p>
                    </div>
                    <div className="custemer_last_sum">
                        <p>
                            Yekun məbləğ
                        </p>
                        <p>
                            {baskets?.total} AZN
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutRight