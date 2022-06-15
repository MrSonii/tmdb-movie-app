import React, { createRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./index.module.css";
import { GetData } from "../../../redux/action";

function SideBar({ onClick }) {
  const { allProductData } = useSelector((state) => state.data);

  const myRef = createRef();
  const dispatch = useDispatch();

  const handleApiData = (num) => () => {
    dispatch(GetData(num)) && myRef.current.scrollTo(0, 0);
  };

  return (
    allProductData.results && (
      <nav className={classes.navBar} ref={myRef}>
        <ul className={classes.ul}>
          {allProductData.results.map((data) => {
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
          {allProductData.page > 1 && (
            <button
              className={`${classes.page_nav_button} ${classes.pad_10}`}
              onClick={handleApiData(allProductData.page - 1)}
            >
              prev
            </button>
          )}
          {allProductData.page < 500 && (
            <button
              className={`${classes.page_nav_button} ${classes.pad_20LR}`}
              onClick={handleApiData(allProductData.page + 1)}
            >
              move to {allProductData.page + 1}
            </button>
          )}
        </div>
      </nav>
    )
  );
}

export default SideBar;
