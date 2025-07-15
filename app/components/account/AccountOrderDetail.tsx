'use client'

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { detailCheckout } from "@/app/store/slices/checkoutSlice";
import Image from "next/image";
import { useEffect } from "react";
import LoadingSpinner from "../lodanig/LoadingSpinner";


const products = [
  {
    name: "Portağal 1kq",
    count: 10,
    price: "30m/pulsuz",
    image: "https://cdn-icons-png.flaticon.com/512/415/415682.png", // portağal şəkli
  },
  {
    name: "Portağal 1kq",
    count: 10,
    price: "30m/pulsuz",
    image: "https://cdn-icons-png.flaticon.com/512/415/415682.png",
  },
  {
    name: "Portağal 1kq",
    count: 10,
    price: "30m/pulsuz",
    image: "https://cdn-icons-png.flaticon.com/512/415/415682.png",
  },
];

const OrderDetails = ({orderId}) => {
    const {chekoutProduct,loading} = useAppSelector((state)=>state.chekcout)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(detailCheckout(orderId))
  },[])
  console.log(chekoutProduct);
   if (loading) {
    return <LoadingSpinner/>
   }
  return (
    <div>
      <div className="order-info">
        <div>
          <p className="label">Sifariş nömrəsi</p>
          <p>#321321</p>
        </div>
        <div>
          <p className="label">Sifariş vaxtı</p>
          <p>{new Date(chekoutProduct?.createdAt).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="label">Sifariş nömrə</p>
          <p>#321321</p>
        </div>
        <div>
          <p className="label">Çatdırılma ünvanı</p>
          <p>{chekoutProduct?.address}</p>
        </div>
        <div>
          <p className="label">Sifariş nömrə</p>
          <p>#321321</p>
        </div>
        <div>
          <p className="label">Sifariş nömrə</p>
          <p>#321321</p>
        </div>
      </div>

      <h3 className="products-title">Məhsullar</h3>

      <div className="product-list">
        {chekoutProduct?.items?.map((product, index) => (
          <div className="product-row" key={index}>
            <Image className="!h-[67px] !w-[67px] object-cover" width={67} height={67} src={product.product.img_url} alt={product.name} />
            <p>{product.product.title}</p>
            <p>{product.quantity}</p>
            <p>{product.total_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
