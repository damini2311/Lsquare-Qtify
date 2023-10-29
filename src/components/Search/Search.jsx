// import React from "react";
// import styles from "./Search.module.css";
// import Searchicon from "../../assests/Searchicon.svg";

// const Search = () => {
//   return (
//     <form className={styles.wrapper}>
//       <input
//         className={styles.search}
//         type="text"
//         placeholder="Search a album of your choice"
//         name="search"
//       />
//       <button className={styles.searchbtn}>
//         <img src={Searchicon} alt="searchicon" />
//       </button>
//     </form>
//   );
// };

// export default Search;
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ReactComponent as Searchicon } from "../../assests/Searchicon.svg";
import styles from "./Search.module.css";

const Search = ({ data }) => {
  const [val, setVal] = useState(null);
  const changeHandler = (e) => {
    setVal(e.target.value);
  };
  const clickHandler = () => {};
  return (
    <div className={styles.searchBar}>
      <Autocomplete
        className={styles.searchInput}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            onChange={changeHandler}
          />
        )}
      />
      <button className={styles.btn} type="submit" onClick={clickHandler}>
        <Searchicon />
      </button>
    </div>
  );
};

export default Search;
