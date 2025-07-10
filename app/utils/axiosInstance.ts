import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.sarkhanrahimli.dev", // <- öz API linkinlə əvəz et
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 saniyə limit (istəyə bağlı)
});

// 🔐 Token avtomatik əlavə etmək üçün interceptor (istəyə bağlı)
axiosInstance.interceptors.request.use((config) => {
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});

export default axiosInstance;
