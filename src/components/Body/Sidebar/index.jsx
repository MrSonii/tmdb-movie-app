import React, { createRef } from "react";

import classes from "./index.module.css";

function SideBar({ apiData, onClick, makeGetCall }) {
  const myRef = createRef();

  const handleApiData = (num) => () => {
    makeGetCall(num) && myRef.current.scrollTo(0, 0);
  };

  return (
    apiData && (
      <nav className={classes.navBar} ref={myRef}>
        <ul className={classes.ul}>
          {apiData.results.map((data) => {
            return (
              <li
                key={data.id}
                data-all={JSON.stringify(data)}
                className={classes.li}
                onClick={onClick}
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
