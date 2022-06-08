import React from "react";

import classes from "./Header.module.css";

const searchButton = (e) => {
  e.preventDefault();
};

function Header({ onChange }) {
  return (
    <div className={classes.header_cont}>
      <header className={classes.header}>
        <p className={classes.logo}>TMDB</p>
        <form>
          <input
            type="text"
            placeholder="Ki dekhenga"
            id="search-box"
            className={classes.searchInp}
            onChange={onChange}
          />
          <button
            type="submit"
            onClick={searchButton}
            className={classes.searchButton}
          >
            &#128269;
          </button>
        </form>
      </header>
    </div>
  );
}

export default Header;
