import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";

const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouseltoggle] = useState(true); ////when "show all" show by default

  const handleToggle = () => {
    setCarouseltoggle(!carouselToggle);
  };

  return (
    <div>
      <div className={styles.header}>
        <p className={styles.topalbum}>{title}</p>
        <h4 className={styles.toggletext} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardwrapper}>
          {!carouselToggle ? (
            <div className={styles.Card}>
              {data.map((item) => (
                <Card data={item} type={type} />
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
