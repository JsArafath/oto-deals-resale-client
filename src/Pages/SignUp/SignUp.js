import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";
import './SignUp.css'
import MobileSignUp from "./MobileSignUp";
import { getAuth, sendEmailVerification } from "firebase/auth";

const SignUp = () => {
  const { createUser, googleSignIn, updateUser } =
  useContext(AuthContext);
  const auth = getAuth();
  const [verified , setVeriffied] = useState(false);
const {
  register,
  formState: { errors },
  handleSubmit,
} = useForm();
const [signUpError, setSignUPError] = useState("");
const navigate = useNavigate();
const [registeredUserEmail, setRegisteredUserEmail] = useState("");
const [token] = useToken(registeredUserEmail);
if (token) {
  navigate("/login");
}
//   console.log(user?.displayName);

const handleRegisterform = (data) => {
  console.log(data);
  console.log(data.userName);
  console.log(data.type);

  createUser(data.email, data.password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      const userInfo = {
        displayName: data.userName,
      };
      console.log(userInfo);
      verifyEmail();

      // update user info
      updateUser(userInfo)
        .then(() => {
          saveRegisteredUser(data.userName, data.email, data.type);
        })
        .catch((error) => console.error(error));
    })
    .catch((err) => console.error(err));
};

// verify email 
const verifyEmail = () => {
  sendEmailVerification(auth.currentUser)
  .then(() => {
   setVeriffied(true);
  });
}
//   function to save registered users data
const saveRegisteredUser = (name, email, role) => {
  const registeredUser = { name, email, role };
  fetch(" https://oto-deals-resale-server-jsarafath.vercel.app/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(registeredUser),
  })
    .then((res) => res.json())
    .then((data) => {
      // registeredUserToken(email);
      setRegisteredUserEmail(email);
      console.log(data);
     
    });
};

//   jwt token for registered user
//   const registeredUserToken = (email) => {
//     fetch(` https://oto-deals-resale-server-jsarafath.vercel.app/JWT?email=${email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.accessToken) {
//           localStorage.setItem("accessToken", data.accessToken);
//         }
//       });
//   };

const handleGoogleSignIn = () => {
  googleSignIn()
    .then((result) => {
      const user = result.user;
      console.log(user.displayName, user.email);
      const role = "Buyer";
      saveRegisteredUser(user.displayName, user.email, role);
    })
    .catch((error) => console.error(error));
};
  return (
   <div>
    {/* Dextop */}
    <div className="lg:block hidden">
    <div>
      <div className="h-[800px] flex justify-start pr-9 m-9 picss1 rounded-xl items-center ">
      <div className="w-96 p-7 bg-gray-00 m-9 rounded bg-banner">
        <h2 className="text-2xl text-gray-700  font-bold text-center">Register</h2>
   {
    verified &&  <div className="toast toast-top toast-end mt-24 mr-12">
    <div className="alert alert-info">
      <div className="text-white">
        <span>Email sent for verification</span>
      </div>
    </div>
    
  </div>
   }
        <form onSubmit={handleSubmit(handleRegisterform)}>
          <div className="form-control rounded w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-gray-700">User Name</span>
            </label>
            <input
              type="text"
              {...register("userName", {})}
              className="input input-bordered w-full  max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control  w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-gray-700">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
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
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full  max-w-xs"
            />
            <label className="label">
              {" "}
              <span className="label-text text-gray-700">Account Type</span>
            </label>
            <select
              {...register("type", {})}
              className="select w-full bg-gray-100 max-w-xs"
            >
              <option>Select Your Account Type</option>
              <option>Seller</option>
              <option>Buyer</option>
            </select>
            <label className="label">
              {" "}
              <span className="label-text text-gray-700">Forget Password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn bg-sky-500 rounded w-full"
            value="Register"
            type="submit"
          />
          <div>
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </div>
        </form>
        <p className="text-gray-700 pt-2 pb-2 text-sm">
          Already have an account?{" "}
          <Link className="text-blue-700 font-semibold" to="/login">
            Log In
          </Link>
        </p>
        {/* <div className="divider text-white">OR</div> */}
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline  text-gray-700 w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
    </div>
    </div>
    <MobileSignUp />
   </div>
  );
};

export default SignUp;
