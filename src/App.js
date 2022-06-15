import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { GetData, movDatahandler, ScreenHandeler } from "./redux/action";

import Header from "./components/Header/Header";
import SideBar from "./components/Body/Sidebar";
import Main from "./components/Body/Main";

function App() {
  const dispatch = useDispatch();
  const { hideScreen, movData, userInput } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(GetData(userInput, 1));
  }, []);

  const showScreen = (e) => {
    dispatch(ScreenHandeler(!hideScreen));
    dispatch(movDatahandler(JSON.parse(e.currentTarget.dataset.all)));
  };

  return (
    <div>
      <Header />
      <div className="body-cont">
        <SideBar onClick={showScreen} />
        {hideScreen && <Main data={movData} />}
      </div>
    </div>
  );
}

export default App;
