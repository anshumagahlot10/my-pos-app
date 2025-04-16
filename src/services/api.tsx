// api.ts
import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const userString = localStorage.getItem("user");
        const user = userString ? JSON.parse(userString) : null;
        const token = user?.accessToken;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // If the response is successful, return it as is
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // If 401, clear token & redirect to login page
            localStorage.removeItem("user");
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);


export default api;
