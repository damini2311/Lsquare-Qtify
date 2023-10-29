import React from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
// import SearchApi from "../SearchApi/SearchApi";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search />
      {/* <SearchApi /> */}
      <Button children="Give Feedback" />
    </nav>
  );
};

export default Navbar;
