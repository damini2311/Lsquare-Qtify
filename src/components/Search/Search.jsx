import React from "react";
import styles from "./Search.module.css";
import Searchicon from "../../assests/Searchicon.svg";

const Search = () => {
  return (
    <form className={styles.wrapper}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search a album of your choice"
        name="search"
      />
      <button className={styles.searchbtn}>
        <img src={Searchicon} alt="searchicon" />
      </button>
    </form>
  );
};

export default Search;
