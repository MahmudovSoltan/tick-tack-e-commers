import { IProduct } from "./product.type";



export interface ICheckoutItems {
    id: number,
    quantity: number,
    total_price: string,
    product:IProduct
}

export interface ICheckoutProducts {
    id: number,
    orderNumber: string,
    total: string,
    deliveryFee: string,
    paymentMethod: string,
    status: string,
    note: string,
    address: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
    items: ICheckoutItems[],

}

export interface ICheckoutInital {
    chekoutProducts: ICheckoutProducts[],
    loading: boolean,
    chekoutProduct: null,
}