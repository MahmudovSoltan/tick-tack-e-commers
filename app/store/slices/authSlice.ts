import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { AuthState, ILoginFomtType } from "@/app/types/auth.type";
import { toast } from "react-toastify";
import { getCookie, removeCookie, setCookie } from "@/app/utils/cookie";


const initialState: AuthState = {
  user: null,
  access_token: typeof window !== "undefined" ? getCookie("access_token") : null,
  refresh_token: typeof window !== "undefined" ? getCookie("refresh_token") : null,
  loading: false,
  error: null,
};

// 🔐 LOGIN
export const login = createAsyncThunk(
  "auth/login",
  async (data: ILoginFomtType) => {
    try {
      const response = await axiosInstance.post("/api/tiktak/auth/login", data);

      const access_token = response.data.data.tokens.access_token;
      const refresh_token = response.data.data.tokens.refresh_token;

      const user = response.data.profile;

      toast.success("Daxil oldunuz ")


      setCookie("access_token", access_token, 10)
      setCookie("refresh_token", refresh_token, 10)
      return { user, access_token, refresh_token };
    } catch (error: unknown) {
      toast.error("Daxil ola bilmədiz ")
       console.log(error);
       
    }
  }

);

// 🔏 REGISTER
export const register = createAsyncThunk(
  "auth/register",
  async (data: ILoginFomtType) => {
    try {
      await axiosInstance.post("/api/tiktak/auth/signup", data); // 👈 Bükmə yoxdur
      toast.success("Qeydiyyatdan keçdiz")
      setCookie("authTab", "0")
    } catch (error: unknown) {
      toast.error("Qeydiyyatdan keçə bilmədiz ")
       console.log(error);
       
    }
  }
);



// ⬇️ login/register-dən sonra əlavə et

// 🔁 Refresh Token funksiyası
export const refreshTokenThunk = createAsyncThunk(
  "auth/refreshToken",
  async (_, thunkAPI) => {
    try {
      const refresh_token = localStorage.getItem("refresh_token");
      if (!refresh_token) throw new Error("Refresh token yoxdur");

      const response = await axiosInstance.post("/api/tiktak/auth/refresh", {
        refresh_token,
      });

      const { access_token, refresh_token: new_refresh_token } = response.data.data.tokens;

      setCookie("access_token", access_token, 1)
      setCookie("refresh_token", new_refresh_token, 1)

      return {
        access_token,
        refresh_token: new_refresh_token,
      };
    } catch (error: unknown) {
      console.log(error);
      
      removeCookie("access_token")
      removeCookie("refresh_token")
      toast.error("Sessiyanız bitdi. Zəhmət olmasa yenidən daxil olun.");
      window.location.href = "/auth";
      return thunkAPI.rejectWithValue("Token refresh alınmadı");
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
      removeCookie("access_token")
      removeCookie("refresh_token")
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
        state.user = action?.payload?.user;
        state.access_token = action?.payload?.access_token;
        state.refresh_token = action?.payload?.refresh_token;
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
      })

      .addCase(refreshTokenThunk.fulfilled, (state, action) => {
        state.access_token = action.payload.access_token;
        state.refresh_token = action.payload.refresh_token;
      })
      .addCase(refreshTokenThunk.rejected, (state) => {
        state.user = null;
        state.access_token = null;
        state.refresh_token = null;
        state.loading = false;
      })

  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
