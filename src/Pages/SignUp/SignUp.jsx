import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Provider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Components/hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { createUser, updateProFile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateProFile(data.name, data.photoUrl)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "You are successfully registered",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          })
          .catch((error) => console.log(error.message));
        reset();
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  type="text"
                  {...register("photoUrl", { required: true })}
                  placeholder="photo url"
                  className="input input-bordered"
                />
                {errors.photoUrl && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    // pattern:
                    //   / (?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]) /,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500">
                    Maximam 20 cracter be added
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    Minimum 6 cracter be added
                  </span>
                )}
                {/* {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    Password must have one uppercase,one lowercase, one number
                    and one special chracter
                  </span>
                )} */}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
              <p className="text-orange-400">
                Already have an account{" "}
                <Link to={"/login"}>
                  <span className="font-bold text-orange-500">
                    Please login
                  </span>
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
