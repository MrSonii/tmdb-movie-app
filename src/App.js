import React, { useEffect, useState } from "react";
import { get } from "axios";

import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/Body/Sidebar";

function App() {
  const [userInput, setUserInput] = useState("");
  const [apiData, setApiData] = useState("");

  useEffect(() => {
    (async () => {
      const resp = await get(
        "https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=a&page=1&include_adult=false"
      );
      setApiData(resp.data);
      console.log(resp.data);
    })();
  }, []);

  const onInputChangeHandeler = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="app">
      <Header onChange={onInputChangeHandeler} />
      <SideBar apiData={apiData} />
    </div>
  );
}

export default App;
