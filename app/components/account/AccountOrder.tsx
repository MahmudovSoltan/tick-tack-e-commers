'use client'

import { useEffect, useState } from "react"
import OrderDetails from "./AccountOrderDetail"
import AccountOrderList from "./AccountOrderList"
import { getCookie, setCookie } from "@/app/utils/cookie"


const AccountOrder = () => {
  const [orderDetail, setOrderDetail] = useState<boolean>(false)
  const [orderId, setOrderId] = useState<string | null>(null)

  // İlk yüklənmədə cookie-ləri oxu
  useEffect(() => {
    const detail = getCookie("orderDetail")
    const id = getCookie("orderId")

    if (detail === "true" && id) {
      setOrderDetail(true)
      setOrderId(id)
    }
  }, [])

  // orderDetail və orderId dəyişəndə cookie-lərə yaz
  useEffect(() => {
    setCookie("orderDetail", orderDetail.toString())
    setCookie("orderId", orderId ?? "")
  }, [orderDetail, orderId])

  const detailOrderFunc = (id: string) => {
    setOrderDetail(true)
    setOrderId(id)
  }

  const closeDetail = () => {
    setOrderDetail(false)
    setOrderId(null)
  }

  return (
    <div className="tab_container">
      {
        !orderDetail && <h3 className="order_title">Sifariş tarixçəsi</h3>
      }

      <div>
        {
          !orderDetail
            ? <AccountOrderList detailOrderFunc={detailOrderFunc} />
            : <OrderDetails orderId={orderId} goBack={closeDetail} />
        }
      </div>
    </div>
  )
}

export default AccountOrder
