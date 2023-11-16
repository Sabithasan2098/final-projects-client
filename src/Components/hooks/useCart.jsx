import { useQuery } from "@tanstack/react-query";
import useAxiosSequere from "./useAxiosSequere";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSequer = useAxiosSequere();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSequer.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
