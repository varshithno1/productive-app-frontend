import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: `${baseURL}/api/v1`,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
