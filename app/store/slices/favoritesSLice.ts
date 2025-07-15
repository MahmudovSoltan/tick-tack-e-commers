import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";


export const getAllFavorites = createAsyncThunk(
    "favorites/getAllFavorites",
    async () => {
        try {
            const response = await axiosInstance.get("/api/tiktak/products/favorites")
            return response.data.data
        } catch (error) {
            console.log(error);

        }
    }
)
export const addAndDeleteFavorites = createAsyncThunk(
    "tagle/tagleFavorites",
    async (id, thunkAPI) => {
        try {
            const response = await axiosInstance.get(`/api/tiktak/products/${id}/favorite`);
     
            return response.data
        } catch (error: unknown) {
            console.log(error);
            return thunkAPI.rejectWithValue("Silinmə zamanı xəta baş verdi");
        }
    }
);




const favositestSlice = createSlice({
    name: "favorites",
    initialState: {
        favosites: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllFavorites.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllFavorites.fulfilled, (state, action) => {
                state.loading = false;
                state.favosites = action.payload
            })
            .addCase(addAndDeleteFavorites.pending,(state)=>{
                state.loading = true
            })
            .addCase(addAndDeleteFavorites.fulfilled,(state)=>{
                state.loading = false;
            })

    },
});

export default favositestSlice.reducer;
