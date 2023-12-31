import { updateProfile } from "@firebase/auth";
import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FidgetSpinner } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = ({ signUp, setSignUp, path }) => {
  // auth hook
  const { createNewUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [loading, setLoading] = useState(false);
  // check password validity
  const [passError, setPassError] = useState("");
  const [solidPassword, setSolidPassword] = useState("");
  const passwordHandle = (e) => {
    setPassError("");
    const password = e.target.value;
    if (!/(?=.*[a-z])/.test(password)) {
      setPassError("At least one  letter is required");
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setPassError("At lest one capital letter is required");
    } else if (!/(?=.*[0-9])/.test(password)) {
      setPassError("At least one digit is required");
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setPassError("At least one special character is required");
    } else if (!/(?=.{6,})/.test(password)) {
      setPassError("Password must be 6 characters long");
    } else {
      setSolidPassword(password);
    }
  };
  // check confirm password
  const checkConfirmPassword = (e) => {
    setPassError("");
    const confirmPass = e.target.value;
    if (confirmPass != solidPassword) {
      return setPassError("Password don't match");
    }
    setPassError("");
  };

  const navigate = useNavigate();
  // react hook from functionality
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    const { name, email, photoUrl, phoneNumber, gender } = data;
    data.password = solidPassword;
    createNewUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: data.name,
          photoURL: data.photoUrl,
          phoneNumber: data.phoneNumber,
        })
          .then(() => {
            const userInfo = {
              name,
              email,
              photoUrl,
              phoneNumber,
              gender,
              uid: user.uid,
            };
            axios
              .post(
                `https://dance-school-server-roan.vercel.app/newUsers`,
                userInfo
              )
              .then((res) => {
                if (res.data.insertedId) {
                  toast.success(`User Create Successfully`);
                  navigate(path);
                  setLoading(false);
                }
              });
          })
          .catch((error) => {
            toast.error(error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Register | Dance School</title>
      </Helmet>
      <div
        data-aos="fade-left"
        className=" md:w-[31%] w-[95%] rounded-lg  mx-auto bg-white p-10 mt-20"
      >
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
            onChange={passwordHandle}
            placeholder="Password"
            className="signIn-input"
          />

          <input
            type={`${showPassword ? "text" : "password"}`}
            required
            onChange={checkConfirmPassword}
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
          <p className="text-rose-600">{passError}</p>

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
              {...register("phoneNumber")}
              placeholder="Phone number"
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
            className={`${loading ? "py-0" : "py-3"} ${
              acceptTerms ? "bg-opacity-70" : "bg-opacity-100"
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
              "Sign up"
            )}
          </button>

          <p className="text-center text-gray-500">
            Already have an account?
            <Link
              className="text-blue-700  hover:underline "
              onClick={() => setSignUp(!signUp)}
            >
              {" "}
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
