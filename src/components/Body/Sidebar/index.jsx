import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReq, screen } from "../../../redux/action";

import classes from "./index.module.css";

function SideBar() {
  const dispatch = useDispatch();

  const { apiData } = useSelector((state) => state.data);

  const handleApiData = (num) => () => {
    dispatch(getReq({ pageNum: num }));
  };

  const showScreen = () => {
    dispatch(screen(true));
  };

  return (
    apiData.results && (
      <nav className={classes.navBar}>
        <ul className={classes.ul}>
          {apiData.results.map((data) => {
            return (
              <li
                key={data.id}
                data-all={JSON.stringify(data)}
                className={classes.li}
                onClick={showScreen}
              >
                <img
                  className={classes.poster}
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}`}
                  alt={data.original_title}
                />
                <p>{data.original_title}</p>
                <p>Rating: {data.vote_average}</p>
              </li>
            );
          })}
        </ul>
        <div className={classes.page_nav}>
          {apiData.page > 1 && (
            <button
              className={`${classes.page_nav_button} ${classes.pad_10}`}
              onClick={handleApiData(apiData.page - 1)}
            >
              prev
            </button>
          )}
          {apiData.page < 500 && (
            <button
              className={`${classes.page_nav_button} ${classes.pad_20LR}`}
              onClick={handleApiData(apiData.page + 1)}
            >
              move to {apiData.page + 1}
            </button>
          )}
        </div>
      </nav>
    )
  );
}

export default SideBar;
