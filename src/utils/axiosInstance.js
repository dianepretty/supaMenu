import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "endpoint/",
});

export default axiosInstance;