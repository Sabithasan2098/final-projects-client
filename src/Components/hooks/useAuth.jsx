import { useContext } from "react";
import { AuthContext } from "../../Providers/Provider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
