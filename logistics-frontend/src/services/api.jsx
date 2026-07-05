import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/"
});


// Automatically attach JWT access token
API.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem("access");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);


export default API;