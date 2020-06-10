import React, { useState } from "react";
// Components
import Print from "./components/layout/Print";
import LeftIndex from "./components/sideBar/leftSide/LeftIndex";
import RightSide from "./components/sideBar/rightSide/RightSide";
import DataState from "./context/DataState";
import Contect from "./components/contents/Contect";

const App = () => {
  const [toggle, setToggle] = useState("center");
  return (
    <DataState>
      <div className="gridContainer">
        {toggle !== "left" && (
          <div className="leftScreen" onClick={() => setToggle("left")}>
            <img
              src="https://img.icons8.com/plasticine/100/000000/chevron-right.png"
              alt=""
              className="arro_img"
            />
          </div>
        )}
        <div className={`left ${toggle === "left" && "leftOpen"}`}>
          <LeftIndex />
          <div className="leftScreen" onClick={() => setToggle()}>
            <img
              src="https://img.icons8.com/plasticine/100/000000/chevron-right.png"
              alt=""
              className="arro_img"
            />
          </div>
        </div>
        <div className={`center `}>
          <Contect />
          <Print />
        </div>
        {toggle !== "right" && (
          <div className="rightScreen" onClick={() => setToggle("right")}>
            <img
              src="https://img.icons8.com/plasticine/100/000000/chevron-left.png"
              alt=""
              className="arro_img"
            />
          </div>
        )}
        <div className={`right ${toggle === "right" && "rightOpen"}`}>
          <RightSide />
          {toggle === "right" && (
            <div className="rightScreen" onClick={() => setToggle()}>
              <img
                src="https://img.icons8.com/plasticine/100/000000/chevron-left.png"
                alt=""
                className="arro_img"
              />
            </div>
          )}
        </div>
      </div>
    </DataState>
  );
};

export default App;
