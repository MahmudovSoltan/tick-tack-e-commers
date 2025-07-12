import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";

export const addBasketFunc = createAsyncThunk(
    "basket/addBasket",
    async (id) => {
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
const basketSlice = createSlice({
    name: "basket",
    initialState: {
        baskets: [],
        loading: false,

    },
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

    },
});

export default basketSlice.reducer;
