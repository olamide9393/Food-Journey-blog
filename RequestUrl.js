// axios.js

import axios from "axios";

<<<<<<< HEAD
const baseURL = "https://food-journey-blog.onrender.com/api/v1";
=======
const baseURL = "https://food-journey-blog.onrender.com/api/v1/";
>>>>>>> 50fe2a1091adba63ce3ceab07e2781ef8f83ea65
// const baseURL = "https://bulk-sms-23yv.onrender.com/api/v1";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

// You can set up interceptors, headers, or other configurations here

export default axiosInstance;
