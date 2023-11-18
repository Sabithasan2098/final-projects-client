import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiousSequere = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSequere = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  axiousSequere.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("request stopped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      console.log("status error in the interceptors", error);
      return Promise.reject(error);
    }
  );

  axiousSequere.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("status error in the interceptors", status);
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiousSequere;
};

export default useAxiosSequere;
