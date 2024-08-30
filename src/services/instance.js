import axios from "axios";

/* const isDeployed = true;
const baseURL = isDeployed
  ? "https://userandprofilemanagement-be.onrender.com/api/v1/"
  : "http://localhost:3000/api/v1/"; */

  const baseURL = import.meta.env.VITE_BASE_URL;

  
const authInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const protectedInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

protectedInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export { authInstance, protectedInstance, baseURL };
