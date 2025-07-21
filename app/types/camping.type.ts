type IData={
    id: number,
    title: string,
    description: string,
    img_url: string,
    created_at: string
}

export type IDataType = {
data: IData[]
}
export interface ICompingInitialType {
    data: IDataType | null,
    loading: boolean,
    error: string | null,
}