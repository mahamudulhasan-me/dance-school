import Lottie from "lottie-react";
import React from "react";
import { SiBytedance } from "react-icons/si";
import welcome from "../assets/dashboardWelcome.json";
import useAuth from "../hooks/useAuth";
const WelcomePage = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="border-l-4 pl-2 border-rose-500">
        <h1 className="text-4xl font-semibold ">
          Hello! <span className="text-violet-600">{user.displayName}</span>
        </h1>
        <div className="flex">
          <h1 className="text-3xl font-semibold ">
            Welcome to <span className="text-rose-600"> Dance School</span>
          </h1>
          <SiBytedance size={24} className="text-violet-600" />
        </div>
      </div>
      <Lottie
        animationData={welcome}
        loop={true}
        className="h-full w-3/5 mx-auto"
      />
    </div>
  );
};

export default WelcomePage;
