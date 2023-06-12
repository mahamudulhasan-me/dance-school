import Lottie from "lottie-react";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import notfound from "../../assets/notfound.json";
const NotFound = () => {
  const { error, status } = useRouteError();
  return (
    <div className="flex justify-center items-center flex-col bg-slate-200 h-screen">
      <Lottie
        animationData={notfound}
        loop={true}
        className="h-[calc(100vh-12rem)]"
      />
      <h1 className="text-3xl -mt-10 font-medium text-rose-600 font-nunito">
        Oh No! Error {status}
      </h1>
      <p className="font-semibold">{error?.message}</p>
      <Link
        to={"./"}
        className="bg-pri w-36 h-10 mt-4 gap-2 flex justify-center items-center bg-violet-700 text-white font-semibold rounded-sm"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
