import React from "react";
import styles from "./Card.module.css";
import { Tooltip } from "@mui/material";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        // if (type === "album") {
        const { image, follows, title, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top">
            <div className={styles.Card}>
              <div className={styles.cardimg}>
                <img src={image} alt="cardimage" />
              </div>

              {/* <button className={styles.btn}>{follows}</button> */}
              <div className={styles.banner}>
                <div className={styles.follow}>{`${follows} Follows`}</div>
              </div>
              <div className={styles.title}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }

      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;
