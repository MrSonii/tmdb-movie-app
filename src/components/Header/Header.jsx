import React from "react";
import { useDispatch } from "react-redux";
import { getReq } from "../../redux/action";
import classes from "./Header.module.css";

function Header() {
  const dispatch = useDispatch();

  const onInputChangeHandeler = (e) => {
    dispatch(
      getReq({
        userInput: e.target.value === "" ? "a" : e.target.value,
      })
    );
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
