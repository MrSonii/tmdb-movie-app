import React, { useState } from "react";

import classes from "./Header.module.css";

function Header() {
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <header className={classes.header}>
        <p className={classes.logo}>TMDB</p>
        <form>
          <input
            type="text"
            placeholder="Ki dekhenga"
            id="search-box"
            className={classes.searchInp}
          />
          <button type="submit" className={classes.searchButton}>
            &#128269;
          </button>
        </form>
      </header>
    </>
  );
}

export default Header;
