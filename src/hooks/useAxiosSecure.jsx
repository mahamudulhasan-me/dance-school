import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/",
});
const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      return config;
    });
    axiosSecure.interceptors.response.use((response) => {
      return response;
    });
  }, []);
  return [axiosSecure];
};

export default useAxiosSecure;
