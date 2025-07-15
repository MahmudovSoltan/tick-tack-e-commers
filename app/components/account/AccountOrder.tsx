import { useState } from "react"
import OrderDetails from "./AccountOrderDetail"
import AccountOrderList from "./AccountOrderList"


const AccountOrder = () => {
  const [orderDetail, setOrderDetail] = useState<boolean>(false)
  const [orderId,setOrderId]= useState(null)
  const detailOrderFunc= (id)=>{
    setOrderDetail(true)
    setOrderId(id)
  }
  return (
    <div className="tab_container">
      {
        !orderDetail && <h3 className="order_title">
          Sifariş tarixçəsi
        </h3>
      }


      <div>

        {
          !orderDetail ? <AccountOrderList  detailOrderFunc={detailOrderFunc} /> : <OrderDetails orderId={orderId}/>
        }



      </div>
    </div>
  )
}

export default AccountOrder
