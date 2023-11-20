import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Components/hooks/useAdmin";
import useAuth from "../Components/hooks/useAuth";

const AdminPrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isadmine, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <span className="loading loading-ball loading-lg "></span>;
  }
  if (user && isadmine) {
    return children;
  }
  return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default AdminPrivateRoute;
