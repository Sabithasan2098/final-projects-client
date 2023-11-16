import axios from "axios";

const axiousSequere = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSequere = () => {
  return axiousSequere;
};

export default useAxiosSequere;
