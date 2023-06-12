import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import banner from "../../assets/images/banner/dance-img.jpg";
import useAuth from "../../hooks/useAuth";
import Register from "./Register";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const { logInWithGoogle, logInWithEmailPassword } = useAuth();

  const navigate = useNavigate();

  // handle google signin
  const handleGoogleSignIn = () => {
    logInWithGoogle()
      .then((result) => {
        const user = result.user;
        const { displayName, email, photoURL, phoneNumber, uid } = user;
        const userInfo = {
          name: displayName,
          email: email,
          photoUrl: photoURL,
          phoneNumber,
          gender: user?.gender || null,
          uid,
        };
        toast.success(`Welcome ${displayName}`);
        navigate("/");
        axios
          .post(
            `https://dance-school-server-roan.vercel.app/newUsers`,
            userInfo
          )
          .then((res) => {
            if (res.data.insertedId) {
              navigate("/");
              toast.success("User Create Successfully");
            }
          });
      })
      .catch((err) => toast.error(err.message));
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    logInWithEmailPassword(data.email, data.password)
      .then((result) => {
        navigate("/");
        toast.success(`Welcome ${result.user?.displayName}`);
      })
      .catch((err) => toast.error(err.message));
  };
  // handle email signin

  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="bg-cover bg-violet-900 bg-blend-overlay min-h-screen flex flex-col justify-center items-center bg-opacity-30 py-10"
    >
      {!signUp ? (
        <div className=" md:w-[31%] rounded-lg mx-auto bg-violet-50 p-10 mt-20">
          <h1 className="text-center text-2xl text-slate-900 font-semibold my-2">
            Login to your account
          </h1>

          <p className="text-center text-gray-500">
            Don&apos;t have an account?
            <Link
              className="text-blue-700  hover:underline"
              onClick={() => setSignUp(!signUp)}
            >
              {" "}
              Sign Up Free!
            </Link>
          </p>

          <div className="grid grid-cols-3 gap-8 my-6">
            <div className="bg-[#1877F2] social_login-icon">
              <FaFacebookF size={20} />
            </div>
            <div className="bg-[#1DA1F2] social_login-icon">
              <FaTwitter size={20} />
            </div>
            <div
              onClick={handleGoogleSignIn}
              className="bg-[#0F9D58] social_login-icon"
            >
              <FaGoogle />
            </div>
          </div>
          <div className="flex items-center gap-5 text-xl text-gray-400">
            <div className="w-full h-0.5 bg-gray-300"></div>
            <p>or</p>
            <div className="w-full h-0.5 bg-gray-300"></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-2">
            <div>
              <input
                type="email"
                required
                {...register("email")}
                placeholder="Email address"
                className="signIn-input"
              />
            </div>
            <div className="relative">
              <input
                type={`${showPassword ? "text" : "password"}`}
                required
                {...register("password")}
                placeholder="Password"
                className="signIn-input"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-4 text-gray-500 hover:text-violet-600 text-xl"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 text-gray-500">
                <input type="checkbox" name="" id="" className="w-4 h-4" />
                Remember me
              </div>
              <Link className="text-blue-700 hover:underline">
                Forget password?
              </Link>
            </div>

            <input
              type="submit"
              value="Login with email"
              className="mt-10 text-center cursor-pointer bg-violet-700 w-full text-white text-lg rounded-lg py-3"
            />
          </form>
        </div>
      ) : (
        <Register signUp={signUp} setSignUp={setSignUp} />
      )}
    </div>
  );
};

export default Login;
