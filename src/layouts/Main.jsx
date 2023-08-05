import Aos from "aos";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import BackToTop from "../components/BackToTop/BackToTop";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";

const Main = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative">
      <BackToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
