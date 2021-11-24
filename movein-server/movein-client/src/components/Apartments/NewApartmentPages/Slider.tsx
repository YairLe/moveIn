import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Pagination]);

interface IProps {
  imgValue: any;
}

const Slider: React.FC<IProps> = (props: IProps) => {
  const { imgValue } = props;
  return (
    <React.Fragment>
      <Swiper
        centeredSlides={true}
        className="mySwiper"
        style={{
          width: "100vw",
          marginBottom: "1rem",
        }}
        loop={true}
        spaceBetween={300}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
      >
        {Object.keys(imgValue).map((key) => {
          return (
            <SwiperSlide
              style={{
                height: "25rem",
                justifyContent: "center",
              }}
              key={`slide-${key}`}
            >
              <img
                src={URL.createObjectURL(imgValue[key])}
                style={{
                  listStyle: "none",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
                alt={`Slide ${key}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </React.Fragment>
  );
};

export default Slider;
