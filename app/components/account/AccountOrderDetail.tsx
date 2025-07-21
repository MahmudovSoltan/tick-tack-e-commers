'use client'

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { detailCheckout } from "@/app/store/slices/checkoutSlice";
import Image from "next/image";
import { useEffect } from "react";
import LoadingSpinner from "../lodanig/LoadingSpinner";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import image from '@/app/assets/images/image 14.svg'

type CheckoutProduct = {
  createdAt?: string;
  address?: string;
  items?: {
    product: {
      img_url?: string;
      title?: string;
    };
    name?: string;
    quantity?: number;
    total_price?: number | string;
  }[];
  // add other properties as needed
};

const OrderDetails = ({ orderId ,goBack}: { orderId: string; goBack: () => void }) => {
  const { chekoutProduct, loading } = useAppSelector((state: { chekcout: { chekoutProduct: CheckoutProduct; loading: boolean } }) => state.chekcout)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(detailCheckout(orderId))
  }, [])
  console.log(chekoutProduct);
  if (loading) {
    return <LoadingSpinner />
  }
  return (
    <div>
      <div onClick={goBack} className="flex items-center gap-2.5 mb-2.5 cursor-pointer max-w-max">
        <IoArrowBackCircleOutline size={24} />
        Back
      </div>
      <div className="order-info">
        <div>
          <p className="label">Sifariş nömrəsi</p>
          <p>#321321</p>
        </div>
        <div>
          <p className="label">Sifariş vaxtı</p>
          <p>{new Date(chekoutProduct && chekoutProduct?.createdAt).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="label">Sifariş nömrə</p>
          <p>#321321</p>
        </div>
        <div>
          <p className="label">Çatdırılma ünvanı</p>
          <p>{chekoutProduct && chekoutProduct?.address}</p>
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
        { chekoutProduct && chekoutProduct?.items?.map((product, index) => (
          <div className="product-row" key={index}>
            {
              product.product.img_url ? <Image className="!h-[67px] !w-[67px] object-cover" width={67} height={67} src={product.product.img_url} alt={product.name} />:<Image className="!h-[67px] !w-[67px] object-cover" width={67} height={67} src={image} alt={product.name+index.toString()} />
            }

            <p>{product.product.title}</p>
            <p>{product.quantity}</p>
            <p>{product.total_price}/pulsuz</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
