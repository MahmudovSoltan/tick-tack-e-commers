'use client'

import { useRouter } from "next/navigation"

const BasketTotalAmount = ({products}) => {

    
    const navigate = useRouter()
    return (
        <div className="w-[40%] min-h-[427px]">
            <p className="basket_left_title mb-[10px]">
                Yekun məbləğ
            </p>
            <div className="basket_total_amount_content">
                <div className="basket_amount">
                    <div>
                        <p>
                            Ümumi
                        </p>
                        <p>
                            {products?.total} AZN
                        </p>
                    </div>
                    <div>
                        <p>
                            Çatırılma
                        </p>
                        <p>
                            Pulsuz
                        </p>
                    </div>

                </div>
                <div>

                    <div className="last_ammount">
                        <p>
                            Yekun məbləğ
                        </p>
                        <p>
                            {products?.total} AZN
                        </p>
                    </div>
                    <button className="order_btn" onClick={()=>navigate.push("/checkout")}>
                        Sifarişi tamamla
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BasketTotalAmount
