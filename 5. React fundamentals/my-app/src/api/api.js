import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// Create axios instance
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "*/*", // Default header
        "Request-ID": Math.random.toString(36).substring(7), // generate request ID
    },
    timeout: 5000, // Time limitation 5 seconds
})

// Add request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authToken"); // Get token from local storage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Add token if available
        }
        return config;
    },
    (error) => {
        return Promise.reject(error) // Handle errors
    }
);

// Add request Cancellation 
export const createCancelableRequest = () => {
    const controller = new AbortController(); // Create a cancer controller
    return { controller, signal: controller.signal };
};

export default api;