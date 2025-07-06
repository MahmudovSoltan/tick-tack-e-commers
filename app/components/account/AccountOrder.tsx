import { useState } from "react"
import OrderDetails from "./AccountOrderDetail"
import AccountOrderList from "./AccountOrderList"


const AccountOrder = () => {
  const [orderDetail, setOrderDetail] = useState<boolean>(false)
  return (
    <div className="tab_container">
      {
        !orderDetail && <h3 className="order_title">
          Sifariş tarixçəsi
        </h3>
      }


      <div>

        {
          !orderDetail ? <AccountOrderList setOrderDetail={setOrderDetail} /> : <OrderDetails />
        }



      </div>
    </div>
  )
}

export default AccountOrder
