import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";
import './Login.css'

const LogIn = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const { logIn } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const [token] = useToken(loginUserEmail);
  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  const handleLoginform = (data) => {
    console.log(data);
    console.log(data);
    setLoginError("");
    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        setLoginUserEmail(data.email);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  return (
    <div>

      {/* Dextop */}
      <div className="lg:block hidden">
      <div className="h-[800px] flex justify-end pr-9 pics1 rounded-xl m-9 items-center">
      <div className="w-96 p-7 bg-gray-0 rounded">
        <h1 className="text-2xl text-center text-gray-800 font-bold">Login</h1>
        <form onSubmit={handleSubmit(handleLoginform)}>
          <div className="form-control  w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-gray-700">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                // required: "Email Address is required",
              })}
              className="input input-bordered w-full  max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-gray-700">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                // required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full  max-w-xs"
            />
            <br></br>
<ReCAPTCHA
    sitekey="6LdOXMslAAAAAND24vmD-7CYna0j6ucuZJPriidS"
    onChange={onChange}
  />
            <label className="label">
              {" "}
              <span className="label-text text-gray-700">Forget Password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn bg-gray-800 rounded w-full mb-1"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p className="text-gray-700 text-sm">
          Don't have an account?{" "}
          <Link className="text-blue-700 font-semibold" to="/signup">
            Register
          </Link>
        </p>
      </div>
    </div>
      </div>

    {/* Mobile */}

    <div className="lg:hidden">
    <div className=" h-[800px] flex justify-end pr-9 pics2 items-center">
      <div className="w-96 p-7 bg-gray-0 ">
        <h1 className="text-2xl text-center text-gray-200 font-bold">Login</h1>
        <form onSubmit={handleSubmit(handleLoginform)}>
          <div className="form-control  w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-gray-100">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                // required: "Email Address is required",
              })}
              className="input input-bordered w-full  max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-gray-100">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                // required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full  max-w-xs"
            />

            <label className="label">
              {" "}
              <span className="label-text text-gray-100">Forget Password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn bg-sky-900 mb-2 rounded w-full"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p className="text-gray-100 text-sm">
          Don't have an account?{" "}
          <Link className="text-gray-900 font-semibold" to="/signup">
            Register
          </Link>
        </p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default LogIn;
