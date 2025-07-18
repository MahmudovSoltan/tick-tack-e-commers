import { IProduct } from "./product.type"

export type IItems = {
    id: number,
    quantity: number,
    total_price: string
    product: IProduct
}
export type IBaskets = {
    total: string,
    count: number,
    items: IItems[]
}

export interface IBasketInitailStateType {
    baskets: IBaskets | null,
    loading: boolean
}