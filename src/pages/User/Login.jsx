import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";
import { FidgetSpinner } from "react-loader-spinner";
import { Link, useLocation, useNavigate } from "react-router-dom";
import banner from "../../assets/images/banner/dance-img.jpg";
import useAuth from "../../hooks/useAuth";
import Register from "./Register";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const { logInWithGoogle, logInWithEmailPassword } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const path = location?.state?.pathname || "/";

  // handle google signin
  const handleGoogleSignIn = () => {
    setLoading(true);
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
              navigate(path);
              toast.success("User Create Successfully");
              setLoading(false);
            }
          });
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    logInWithEmailPassword(data.email, data.password)
      .then((result) => {
        navigate(path);
        toast.success(`Welcome ${result.user?.displayName}`);
      })
      .catch((err) => toast.error(err.message));
  };
  // handle email signin

  return (
    <>
      <Helmet>
        <title>Login | Dance School</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="bg-cover bg-slate-600 bg-blend-overlay min-h-screen flex flex-col justify-center items-center  dark:bg-slate-900 py-10"
      >
        {!signUp ? (
          <div
            data-aos="zoom-in"
            className=" md:w-[31%] rounded-lg mx-auto bg-white p-10 mt-20"
          >
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

              <button
                className={`${
                  loading ? "py-0" : "py-3"
                } mt-10 text-center cursor-pointer bg-violet-700 w-full text-white text-lg rounded-lg flex justify-center items-center`}
              >
                {loading ? (
                  <FidgetSpinner
                    visible={true}
                    height="50"
                    width="50"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                    ballColors={["#ff0000", "#00ff00", "#0000ff"]}
                    backgroundColor="#F4442E"
                  />
                ) : (
                  "Log in"
                )}
              </button>
            </form>
          </div>
        ) : (
          <Register path={path} signUp={signUp} setSignUp={setSignUp} />
        )}
      </div>
    </>
  );
};

export default Login;
