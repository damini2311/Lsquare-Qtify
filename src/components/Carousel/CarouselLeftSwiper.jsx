import React, { useEffect, useState } from "react";
import "swiper/css";
import { useSwiper } from "swiper/react";
import styles from "./carousel.module.css";
import { ReactComponent as LeftArrow } from "../../assests/LeftArrow.svg";

const CarouselLeftSwiper = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, [isBeginning, swiper, swiper.isBeginning]);

  return (
    <div className={styles.leftswiper}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftSwiper;
