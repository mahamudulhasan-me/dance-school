import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = ({ signUp, setSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(true);

  // react hook from functionality
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className=" w-[31%] mx-auto bg-violet-50 p-10 mt-20">
        <h1 className="text-center text-2xl text-slate-900 font-semibold my-2">
          SignUp for free
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">
          <input
            type="text"
            required
            {...register("name")}
            placeholder="Full Name"
            className="signIn-input"
          />
          <input
            type="email"
            required
            {...register("email")}
            placeholder="Email address"
            className="signIn-input"
          />
          <input
            type="url"
            required
            {...register("photoUrl")}
            placeholder="Photo URL"
            className="signIn-input"
          />

          <input
            type={`${showPassword ? "text" : "password"}`}
            required
            {...register("password")}
            placeholder="Password"
            className="signIn-input"
          />

          <input
            type={`${showPassword ? "text" : "password"}`}
            required
            {...register("confirmPassword")}
            placeholder="Confirm password"
            className="signIn-input"
          />
          <div className="flex items-center gap-1 font-semibold text-gray-500">
            <input
              type="checkbox"
              className="w-4 h-4"
              onChange={() => setShowPassword(!showPassword)}
            />
            <p>Show Password</p>
          </div>

          <div className="text-gray-500 flex justify-between gap-2">
            <select
              required
              {...register("gender")}
              className="select select-bordered   max-w-xs"
            >
              <option disabled selected>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            <input
              type="number"
              required
              {...register("mobileNumber")}
              placeholder="Mobile number"
              className="signIn-input"
            />
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-4 h-4"
              onChange={() => setAcceptTerms(!acceptTerms)}
            />
            I agree to the{" "}
            <Link className="text-blue-600 underline">privacy policy</Link> and
            <Link className="text-blue-600 underline">terms of service</Link>.
          </div>
          <button
            type="submit"
            disabled={acceptTerms}
            className={`mt-10 text-center bg-violet-700  w-full text-white text-lg rounded-lg py-3 ${
              acceptTerms ? "bg-opacity-70" : "bg-opacity-100"
            }`}
          >
            Login with email
          </button>
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
