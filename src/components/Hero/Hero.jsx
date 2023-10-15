import React from "react";
import styles from "./Hero.module.css";
import hero from "../../assests/hero.png";
import headphone from "../../assests/headphone.svg";

const Hero = () => {
  return (
    <div className={styles.Herosec}>
      <div className={styles.hero}>
        <img src={hero} alt="" />
      </div>
      <div className={styles.headphone}>
        <img src={headphone} alt="" />
      </div>
    </div>
  );
};

export default Hero;
