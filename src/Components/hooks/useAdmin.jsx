import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSequere from "./useAxiosSequere";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSequere = useAxiosSequere();
  const { data: isadmine, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSequere.get(`/users/admin/${user.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isadmine, isAdminLoading];
};

export default useAdmin;
