import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./carousel.module.css";
import { ReactComponent as RightArrow } from "../../assests/RightArrow.svg";

const CarouselRightSwiper = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  return (
    <div className={styles.rightswiper}>
      {/* {!isEnd && <RightArrow onClick={() => swiper.slideNext} />} */}
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightSwiper;
