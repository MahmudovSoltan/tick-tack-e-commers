export interface ILoginFomtType {
    phone: string,
    password: string,
    [key: string]: string;
}


export interface UserType {
  id?:number,
  full_name:string,
  phone:string,
  address:string,
  img_url?:string,
  role?:string,
  created_at?:string
}
export interface AuthState {
  user: UserType |null;
  refresh_token: string | null;
  access_token: string | null;
  loading: boolean;
  error: string | null;
}
