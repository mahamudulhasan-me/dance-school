import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = ({ signUp, setSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
  return (
    <>
      <div className=" w-[31%] mx-auto bg-white p-10">
        <h1 className="text-center text-2xl text-slate-900 font-semibold my-2">
          SignUp for free
        </h1>

        <form className="space-y-4 mt-2">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="outline-none w-full  border-b-2 focus:border-violet-600 py-2 text-lg"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="outline-none w-full  border-b-2 focus:border-violet-600 py-2 text-lg"
          />
          <input
            type="url"
            name="photoUrl"
            id="photoUrl"
            placeholder="Photo URL"
            className="outline-none w-full  border-b-2 focus:border-violet-600 py-2 text-lg"
          />

          <div className="relative">
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="Password"
              className="outline-none w-full  border-b-2 focus:border-violet-600 py-2 text-lg"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-4 text-gray-500 hover:text-violet-600 text-xl"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          <div className="relative">
            <input
              type={`${showConfPassword ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="Confirm password"
              className="outline-none w-full  border-b-2 focus:border-violet-600 py-2 text-lg"
            />
            <div
              onClick={() => setShowConfPassword(!showConfPassword)}
              className="absolute right-0 top-4 text-gray-500 hover:text-violet-600 text-xl"
            >
              {showConfPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>

          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <input type="checkbox" name="" id="" className="w-4 h-4" />I agree
            to the{" "}
            <Link className="text-blue-600 underline">privacy policy</Link> and
            <Link className="text-blue-600 underline">terms of service</Link>.
          </div>

          <input
            type="submit"
            value="Login with email"
            className="mt-10 text-center cursor-pointer bg-violet-700 w-full text-white text-lg rounded-lg py-3"
          />
          <p className="text-center text-gray-500">
            Already have an account?
            <Link
              className="text-blue-700  hover:underline "
              onClick={() => setSignUp(!signUp)}
            >
              {" "}
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
