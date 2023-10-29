import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./carousel.module.css";
import "swiper/css";
import CarouselLeftSwiper from "./CarouselLeftSwiper";
import CarouselRightSwiper from "./CarouselRightSwiper";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0, null);
  }, [data]);
};

const Carousel = ({ data, component }) => {
  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        style={{ padding: "0px 2px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftSwiper />
        <CarouselRightSwiper />
        {data.map((item) => {
          return <SwiperSlide>{component(item)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
