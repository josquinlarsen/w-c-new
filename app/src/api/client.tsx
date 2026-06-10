import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/wallyandcoda",
});

// inject token into headers
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    };
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const responseInterceptor = (logout: () => void): void => {
    api.interceptors.response.use(
        (response) => (response),
        (error) => {
            if (error.response && error.response.status === 401) {
                alert("Expired token");
                logout();
            }
            return Promise.reject(error);
        }
    );
}

export default api;