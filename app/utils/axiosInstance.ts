import axios from "axios";
import { store } from "../store/store";
import { refreshTokenThunk } from "../store/slices/authSlice";
import { getCookie } from "./cookie";

const axiosInstance = axios.create({
  baseURL: "https://api.sarkhanrahimli.dev", // <- öz API linkinlə əvəz et
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 saniyə limit (istəyə bağlı)
});

// 🔐 Token avtomatik əlavə etmək üçün interceptor (istəyə bağlı)
axiosInstance.interceptors.request.use((config) => {
  const access_token = getCookie("access_token")
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const result = await store.dispatch(refreshTokenThunk());
        if (refreshTokenThunk.fulfilled.match(result)) {
          const newToken = result.payload.access_token;
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return axiosInstance(originalRequest);
        }
      } catch (error) {
        console.log(error);

      }

    }
  }
)

export default axiosInstance;
