import axios from "axios";

const axiousSequere = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSequere = () => {
  axiousSequere.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("request stopped by interceptors", token);
      config.headers.authorization = `Bearer${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return axiousSequere;
};

export default useAxiosSequere;
