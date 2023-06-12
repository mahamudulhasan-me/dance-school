import Aos from "aos";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";

const Main = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
