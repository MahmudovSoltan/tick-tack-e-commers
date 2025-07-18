import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { ICompingInitialType } from "@/app/types/camping.type";

export const getAllCampaigns = createAsyncThunk(
  "campaigns/getAll",
  async () => {
    try {
      const response = await axiosInstance.get("/api/tiktak/campaigns");
      return response.data;
    } catch (err: unknown) {

      console.log(err);
      
    }
  }
);
const initialState:ICompingInitialType =
{
  data: [],
  loading: false,
  error: null as string | null,
}
const campingSlice = createSlice({
  name: "campaigns",
  initialState:initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampaigns.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCampaigns.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllCampaigns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default campingSlice.reducer;
