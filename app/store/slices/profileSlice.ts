import axiosInstance from '@/app/utils/axiosInstance';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



const initialState = {
    user: null,
    loading: false,

};

// ✅ Async thunk – API-dən product-ları gətirir
export const fetchProfile = createAsyncThunk(
    'profile/fetchProfile',
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get('/api/tiktak/profile');
            return response.data.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const profileEdit = createAsyncThunk(
    "profileEdit/getProfileEdit",
    async (data) => {
        try {
            const response = await axiosInstance.put(`/api/tiktak/profile`, data);
            return response.data.data;
        } catch (error: any) {
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
            .addCase(fetchProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase (profileEdit.pending,(state)=>{
                state.loading = true
            })
            .addCase (profileEdit.fulfilled,(state)=>{
                state.loading = false
            })
        
            
    },
});

export default productSlice.reducer;
