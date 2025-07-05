
const BasketTotalAmount = () => {
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
                            13,65 AZN
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
                            13,65 AZN
                        </p>
                    </div>
                    <button className="order_btn">
                        Sifarişi tamamla
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BasketTotalAmount
