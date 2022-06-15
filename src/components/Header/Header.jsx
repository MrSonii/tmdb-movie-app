import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetData, userInputHandeler } from "../../redux/action";
import classes from "./Header.module.css";

function Header() {
  //
  const dispatch = useDispatch();
  const { userInput } = useSelector((state) => state.data);

  const onInputChangeHandeler = (e) => {
    dispatch(userInputHandeler(e.target.value === "" ? "a" : e.target.value));
    dispatch(GetData(1, userInput));
  };

  const debounce = (func, timeout = 400) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const searchHandeler = debounce((e) => onInputChangeHandeler(e));

  return (
    <header className={classes.header}>
      <p className={classes.logo}>TMDB</p>
      <form>
        <input
          type="text"
          placeholder="Ki dekhenga"
          id="search-box"
          className={classes.searchInp}
          onChange={searchHandeler}
        />
      </form>
    </header>
  );
}

export default Header;
