import { UserType } from '@/app/types/auth.type';
import axiosInstance from '@/app/utils/axiosInstance';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface InitialStateType {
    loading:boolean,
    user:UserType | null
}

const initialState:InitialStateType = {
    user: null,
    loading: false,

};

// ✅ Async thunk – API-dən product-ları gətirir
export const fetchProfile = createAsyncThunk(
    'profile/fetchProfile',
    async () => {
        try {
            const response = await axiosInstance.get('/api/tiktak/profile');
            return response.data.data;
        } catch (error: unknown) {
            console.log(error);
            
        }
    }
);
export const profileEdit = createAsyncThunk(
    "profileEdit/getProfileEdit",
    async (data:UserType) => {
        try {
            const response = await axiosInstance.put(`/api/tiktak/profile`, data);
            return response.data.data;
        } catch (error: unknown) {
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
