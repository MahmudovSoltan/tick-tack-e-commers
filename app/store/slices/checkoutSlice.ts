import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import Swal from "sweetalert2";
import { ICheckoutInital } from "@/app/types/checkoutSlice.type";
import { IfomrType } from "@/app/components/checekout/CheckoutBody";

export const addCheckoutFunc = createAsyncThunk(
    "checkout/addCheckout",
    async (data:IfomrType | null) => {
        try {
            const response = await axiosInstance.post(`/api/tiktak/orders/checkout`, data);
            Swal.fire({
                title: 'Sifariş uğurla tamamlandı',
                text: 'Əməkdaşlarımız sizinlə əlaqə saxlayıb sifarişinizi göndərəcəklər.',
                icon: 'success',
            })
            location.href = '/home'
            return response.data;
        } catch (error: unknown) {
            Swal.fire({
                title: 'Sifariş tamamlanmadi prablem oldu',
                icon: 'error',
            })
            console.log(error);

        }
    }
);
export const getAllCheckout = createAsyncThunk(
    "chekout/getAllCheckout",
    async () => {
        try {
            const response = await axiosInstance.get("/api/tiktak/orders/user")
            return response.data.data
        } catch (error) {
            console.log(error);

        }
    }
)
export const detailCheckout = createAsyncThunk(
    "basket/deleteProduct",
    async (id, thunkAPI) => {
        try {
            const response = await axiosInstance.get(`/api/tiktak/orders/user/${id}`);
            console.log(response.data);

            return response.data
        } catch (error: unknown) {
            console.log(error);
            return thunkAPI.rejectWithValue("Silinmə zamanı xəta baş verdi");
        }
    }
);
const initialState:ICheckoutInital = {
    chekoutProducts: [],
    loading: false,
    chekoutProduct: null,
}
const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCheckoutFunc.pending, (state) => {
                state.loading = true;
            })
            .addCase(addCheckoutFunc.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(detailCheckout.pending, (state) => {
                state.loading = true
            })
            .addCase(detailCheckout.fulfilled, (state, action) => {
                state.loading = false;
                state.chekoutProduct = action.payload
            })
            .addCase(getAllCheckout.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllCheckout.fulfilled, (state, action) => {
                state.loading = false;
                state.chekoutProducts = action.payload
            })

    },
});

export default checkoutSlice.reducer;
