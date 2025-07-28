import { ICategories } from '@/app/types/category.type';
import { IProduct } from '@/app/types/product.type';
import axiosInstance from '@/app/utils/axiosInstance';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


export interface Product {
  id: number;
  title: string;
  price: number;
  img_url?: string;
  category:ICategories
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  product :IProduct |null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  product:null
};

// ✅ Async thunk – API-dən product-ları gətirir
export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    try {
      const response = await axiosInstance.get('/api/tiktak/products');
      return response.data.data;
    } catch (error: unknown) {
      console.log(error);
      
    }
  }
);
export const productDetailFunc = createAsyncThunk(
  "productDetail/getProductDelati",
  async (id:string) => {
    try {
      const response = await axiosInstance.get(`/api/tiktak/products/${id}`);
      return response.data.data
;
    } catch (error: unknown) {
      console.log(error);
      
    }
  }
)
export const productSearch = createAsyncThunk(
  "productSearch,productSearchfunc",
async (params:any)=>{
  try{
    const response = await axiosInstance.get("/api/tiktak/products",{
      params
    })
    console.log(response.data);
    
    return response.data
  }catch(error){
    console.log(error);
    
  }
}
)
// ✅ Slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(productDetailFunc.pending,(state) => {
        state.loading = false;
      })
      .addCase(productDetailFunc.fulfilled,(state,action) => {
        state.loading = false;
        state.product = action.payload
      })
  },
});

export default productSlice.reducer;
