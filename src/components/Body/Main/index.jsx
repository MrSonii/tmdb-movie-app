import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScreenHandeler } from "../../../redux/action";

import classes from "./index.module.css";

function Main({ data }) {
  const dispatch = useDispatch();
  const { hideScreen } = useSelector((state) => state.data);

  const hideShowScreen = (bool) => () => {
    dispatch(ScreenHandeler(bool));
  };

  return (
    <div className={classes.main}>
      <div className={classes.posterCont}>
        <img
          className={classes.border15px}
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}`}
          alt={`${data.original_title}`}
        />
      </div>
      <div className={classes.detailCont}>
        <h3>{data.original_title}</h3>
        <p>{data.overview}</p>
        <p>Rating: {data.vote_average}</p>
        <p>Total-votes: {data.vote_count}</p>
        <p>Release Date: &nbsp;{data.release_date}</p>
      </div>
      <img
        className={classes.backdrop_img}
        src={`https://image.tmdb.org/t/p/w220_and_h330_face${data.backdrop_path}`}
        alt=""
      />
      <button className={classes.close} onClick={hideShowScreen(!hideScreen)}>
        <span>&#10060;</span>
      </button>
    </div>
  );
}

export default Main;
