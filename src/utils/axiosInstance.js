import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://196.223.240.154:8099/supapp/api/",
});

export default axiosInstance;
