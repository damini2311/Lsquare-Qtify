import React from "react";
import Qtify from "../../assests/Qtify.svg";

import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.qtify}>
      <img src={Qtify} alt="qtifylogo" />
    </div>
  );
};

export default Logo;
