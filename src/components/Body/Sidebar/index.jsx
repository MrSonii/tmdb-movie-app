import React from "react";

import classes from "./index.module.css";

function SideBar({ apiData }) {
  return (
    apiData && (
      <div>
        <nav>
          <ul>
            {apiData.results.map((data, ind) => {
              return (
                <li key={data.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}`}
                    alt={data.original_title}
                  />
                  <p>{data.original_title}</p>
                  <p>{data.vote_average}</p>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    )
  );
}

export default SideBar;
