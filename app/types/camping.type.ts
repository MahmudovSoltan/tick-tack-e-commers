
 export type IDataType ={
    id:number,
    title:string,
    description:string,
    img_url:string,
    created_at:string
}

export interface ICompingInitialType {
    data: IDataType[],
    loading: boolean,
    error: string | null,
}