import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "https://dance-school-server-roan.vercel.app/",
});
const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });
    axiosSecure.interceptors.response.use((response) => {
      return response;
    });
  }, []);
  return [axiosSecure];
};

export default useAxiosSecure;
