
export type ICategories = {
    id: number,
    name: string,
    img_url?:string,
    description?: string,
    created_at?: string
}

export interface ICategoryInitialType {
    categories: ICategories[],
    loading: boolean,
    error: string | null,
}