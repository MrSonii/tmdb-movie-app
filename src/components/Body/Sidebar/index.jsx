import React from "react";

import classes from "./index.module.css";

function SideBar({ apiData, onClick }) {
  return (
    apiData && (
      <>
        <nav className={classes.navBar}>
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
            <button className={`${classes.page_nav_button} ${classes.pad_10}`}>
              prev
            </button>
            <button
              className={`${classes.page_nav_button} ${classes.pad_20LR}`}
            >
              move to {apiData.page + 1}
            </button>
          </div>
        </nav>
      </>
    )
  );
}

export default SideBar;
