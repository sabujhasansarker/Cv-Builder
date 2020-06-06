import React from "react";

// Components
import Print from "./components/layout/Print";
import LeftIndex from "./components/sideBar/leftSide/LeftIndex";
import RightSide from "./components/sideBar/RightSide";

const App = () => {
  return (
    <div class="gridContainer">
      <div class="left">
        <LeftIndex />
      </div>
      <div class="center">
        <Print />
      </div>
      <div class="right">
        <RightSide />
      </div>
    </div>
  );
};

export default App;
