import React, { useEffect, useState } from "react";
import icon from "../../assets/images/icons/icon1.webp";
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const topOffset = window.pageYOffset || document.documentElement.scrollTop;

    // Set visibility based on the scroll position (e.g., show the button when scrolling down 200 pixels)
    setIsVisible(topOffset > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling animation
    });
  };

  useEffect(() => {
    // Add event listener for scrolling
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" bottom-5 right-0 z-30 fixed animate-bounce cursor-pointer  duration-500 transition-all">
      {isVisible && <img src={icon} alt="" onClick={scrollToTop} />}
    </div>
  );
};

export default BackToTop;
