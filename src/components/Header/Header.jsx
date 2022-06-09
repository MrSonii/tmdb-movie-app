import React, { createRef } from "react";

import classes from "./Header.module.css";

const searchButton = (e) => {
  e.preventDefault();
};

function Header({ onChange }) {
  const myRef = createRef();

  const debounce = (func, timeout = 400) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log("input changed");
        func.apply(this, args);
      }, timeout);
    };
  };

  const searchHandeler = debounce(() => onChange(myRef));

  return (
    <header className={classes.header}>
      <p className={classes.logo}>TMDB</p>
      <form>
        <input
          type="text"
          placeholder="Ki dekhenga"
          id="search-box"
          className={classes.searchInp}
          ref={myRef}
          onChange={searchHandeler}
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
  );
}

export default Header;
