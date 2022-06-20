import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { getReq } from "./redux/action";
import Header from "./components/Header/Header";
import SideBar from "./components/Body/Sidebar";
// import Main from "./components/Body/Main";

function App() {
  const dispatch = useDispatch();

  const { userInput, pageNum } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getReq({ userInput, pageNum }));
  }, []);

  return (
    <div>
      <Header />
      <div className="body-cont">
        <SideBar />
        {/* {hideScreen && <Main data={movData} />} */}
      </div>
    </div>
  );
}

export default App;
