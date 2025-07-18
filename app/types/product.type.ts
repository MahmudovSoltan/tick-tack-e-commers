interface ICategory {
        id: number,
        name: string,
        img_url:string,
        description?:string,
        created_at?: string
    }
export interface IProduct {
    id: number,
    title: string,
    img_url:string | null ,
    description: string
    price: string,
    type:string,
    created_at: string,
    category: ICategory,
    is_favorite?:boolean
}