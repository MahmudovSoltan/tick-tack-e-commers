import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { ICategoryInitialType } from "@/app/types/category.type";

export const getAllCategory = createAsyncThunk(
    "categorys/getAll",
    async () => {
        try {
            const response = await axiosInstance.get("/api/tiktak/categories");
            return response.data.data;
        } catch (error: unknown) {
            console.log(error);
            
        }
    }
);
const initialState:ICategoryInitialType = {
        categories: [],
        loading: false,
        error: null as string | null,
    }
const categorySlice = createSlice({
    name: "category",
    initialState ,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(getAllCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default categorySlice.reducer;
