import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Box from "@mui/material/Box";
import BasicTabs from "../Tabs/SongsTabs";
import Tab from "../Tabs/SongsTabs";

const Section = ({ title, data, type }) => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.sectionContainer}>
      {type !== "songs" ? (
        <div className={styles.pageHeader}>
          <h3 className={styles.sectionLabel}>{title}</h3>
          <h3 className={styles.toggleLink} onClick={handleToggle}>
            {toggle ? "Collapse" : "Show all "}
          </h3>
        </div>
      ) : (
        <>{null}</>
      )}
      {data?.length ? (
        <div className={styles.cardContainer}>
          {!toggle ? (
            <div className={styles.contentWrapper}>
              <h3 className={styles.toggleLink}>
                Content is Collapsed please click on show all.
              </h3>
            </div>
          ) : (
            <Carousel
              data={data}
              component={(item) => <Card data={item} type={type} />}
            />
          )}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Section;
