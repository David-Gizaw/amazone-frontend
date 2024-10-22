import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazone-api-bu62.onrender.com",
  // baseURL: "http://localhost:5000",
});

export { axiosInstance };
