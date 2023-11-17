import { FaGoogle } from "react-icons/fa";
import useAuth from "./hooks/useAuth";
import useAxiosPublic from "./hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      console.log(result.user);
      const uesrInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", uesrInfo).then((res) => {
        console.log(res.data);
      });
      navigate("/");
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <button onClick={handleGoogleLogin} className="btn btn-active btn-block">
        <FaGoogle></FaGoogle> Login with google
      </button>
    </div>
  );
};

export default SocialLogin;
