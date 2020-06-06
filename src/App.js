import React from "react";

// Components
import Print from "./components/layout/Print";
import LeftIndex from "./components/sideBar/leftSide/LeftIndex";
import RightSide from "./components/sideBar/rightSide/RightSide";

const App = () => {
  return (
    <div className="gridContainer">
      <div className="left">
        <LeftIndex />
      </div>
      <div className="center">
        <Print />
      </div>
      <div className="right">
        <RightSide />
      </div>
    </div>
  );
};

export default App;
