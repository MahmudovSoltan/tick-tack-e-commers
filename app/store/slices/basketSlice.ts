import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import { IBasketInitailStateType } from "@/app/types/basket.type";

export const addBasketFunc = createAsyncThunk(
    "basket/addBasket",
    async (id:string) => {
        try {
            const response = await axiosInstance.post(`/api/tiktak/basket/${id}/add`);
            toast.success("Məhsul əlavə edildi")
            return response.data;
        } catch (error: unknown) {
            console.log(error);

        }
    }
);
export const getAllBasketProducts = createAsyncThunk(
    "basket/allBasketProduct",
    async () => {
        try {
            const response = await axiosInstance.get("/api/tiktak/basket")
            return response.data.data
        } catch (error) {
            console.log(error);

        }
    }
)
export const deleteProduct = createAsyncThunk<
    void,
    string,
    { rejectValue: string }
>(
    "basket/deleteProduct",
    async (id, thunkAPI) => {
        try {
            await axiosInstance.post(`/api/tiktak/basket/${id}/remove`);
            toast.success("Mehsul silindi")
        } catch (error: unknown) {
            console.log(error);
            toast.error("Mehsul silinmedi")
            return thunkAPI.rejectWithValue("Silinmə zamanı xəta baş verdi");
        }
    }
);

export const removeProduct = createAsyncThunk(
    'removeBasket/removeProduct',
    async (id:string, thunkAPI) => {
        try {
            await axiosInstance.delete(`/api/tiktak/basket/${id}/remove-all`);
            toast.success("Mehsul silindi")
        } catch (error: unknown) {
            console.log(error);
            toast.error("Mehsul silinmedi")
            return thunkAPI.rejectWithValue("Silinmə zamanı xəta baş verdi");
        }
    }
)
export const clearebasket = createAsyncThunk(
'cleareBasket/clearbasketFunc',
    async (_, thunkAPI) => {
        try {
            await axiosInstance.delete(`/api/tiktak/basket/clear`);
            toast.success("Mehsul silindi")
        } catch (error: unknown) {
            console.log(error);
            toast.error("Mehsul silinmedi")
            return thunkAPI.rejectWithValue("Silinmə zamanı xəta baş verdi");
        }
    }
)
const initialState:IBasketInitailStateType ={
        baskets: null,
        loading: false,

    }
const basketSlice = createSlice({
    name: "basket",
    initialState :initialState ,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBasketProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllBasketProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.baskets = action.payload;
            })

            .addCase(addBasketFunc.pending, (state) => {
                state.loading = true;
            })
            .addCase(addBasketFunc.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteProduct.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(removeProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(removeProduct.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(clearebasket.pending, (state) => {
                state.loading = true;
            })
            .addCase(clearebasket.fulfilled, (state) => {
                state.loading = false;
            })


    },
});

export default basketSlice.reducer;
