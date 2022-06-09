import React, { useEffect, useState } from "react";
import { get } from "axios";

import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/Body/Sidebar";
import Main from "./components/Body/Main";

function App() {
  const [userInput, setUserInput] = useState("");
  const [apiData, setApiData] = useState("");
  const [detailScreen, setDetailScreen] = useState(false);
  const [currMov, setCurrMovie] = useState(null);

  const makeGetCall = async () => {
    const resp = await get(
      "https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=a&page=1&include_adult=false"
    );
    setApiData(resp.data);
    console.log(resp.data);
  };

  useEffect(() => {
    makeGetCall();
  }, []);

  const onInputChangeHandeler = (e) => {
    setUserInput(e.target.value);
  };

  const showScreen = (e) => {
    setDetailScreen(true);
    setCurrMovie(JSON.parse(e.currentTarget.dataset.all));
  };

  const hideScreen = () => {
    setDetailScreen(false);
  };
  return (
    <div>
      <Header onChange={onInputChangeHandeler} />
      <div className="body-cont">
        <SideBar
          apiData={apiData}
          onClick={showScreen}
          makeGetCall={makeGetCall}
        />
        {detailScreen && <Main data={currMov} onClick={hideScreen} />}
      </div>
    </div>
  );
}

export default App;
