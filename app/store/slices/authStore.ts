import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { ILoginFomtType } from "@/app/types/auth.type";

interface AuthState {
  user: any;
  refresh_token: string | null;
  access_token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  access_token: typeof window !== "undefined" ? localStorage.getItem("access_token") : null,
  refresh_token: typeof window !== "undefined" ? localStorage.getItem("refresh_token") : null,
  loading: false,
  error: null,
};

// 🔐 LOGIN
export const login = createAsyncThunk(
  "auth/login",
  async (data: ILoginFomtType, thunkAPI) => {
    console.log(data)
    try {
      const response = await axiosInstance.post("/api/tiktak/auth/login", {
        data
      });

      const access_token = response.data.tokens.access_token;
      const refresh_token = response.data.tokens.refresh_token;

      const user = response.data.profile;
              
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      return { user, access_token, refresh_token };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Giriş zamanı xəta baş verdi.");
    }
  }
  
);

// 🔏 REGISTER
export const register = createAsyncThunk(
  "auth/register",
  async (
    data: ILoginFomtType,
    thunkAPI
  ) => {
    try {
      const response = await axiosInstance.post("/api/tiktak/auth/signup", {
        data
      });
            

    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Qeydiyyat zamanı xəta baş verdi.");
    }
  }
);

// 🔄 SLICE
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.access_token = null;
      state.refresh_token = null
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("access_token");
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.access_token = action.payload.access_token;
        state.refresh_token = action.payload.refresh_token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state,) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
