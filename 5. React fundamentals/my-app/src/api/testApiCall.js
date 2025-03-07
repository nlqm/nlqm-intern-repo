import api, { createCancelableRequest } from "./api.js";
import axios from "axios";

const testApiCall = async () => {
    const { controller, signal } = createCancelableRequest(); // Create cancelable request

    try {
        const response = await api.post(
            "/posts",
            { 
            title: "Hello",
            body: "test post",
            userId: 1
            }
        );

        console.log("Response:", response.data);
    } catch (error) {
        if (axios.isCancel(error)) {
            console.log("Request cancel: ", error.message);
        } else {
            console.error("API error:", error.response?.data || error.message);
        }
    }
};

export default testApiCall;