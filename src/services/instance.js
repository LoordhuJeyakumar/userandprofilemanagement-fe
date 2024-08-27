import axios from "axios";

const isDeployed = false;
const baseUrl = isDeployed ? "" : "http://localhost:3000/api/v1/";

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
    const accessToken = sessionStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export { authInstance, protectedInstance, baseUrl };
