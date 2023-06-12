import React from "react";
import { SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
import award1 from "../../../assets/images/award/partner1.jpg";
import award2 from "../../../assets/images/award/partner2.jpg";
import award3 from "../../../assets/images/award/partner3.jpg";
import award4 from "../../../assets/images/award/partner4.jpg";
import award5 from "../../../assets/images/award/partner5.jpg";
const Award = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={award1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Award;
