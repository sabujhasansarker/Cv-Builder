import React, { useEffect, useContext } from "react";

// Components
import Print from "./components/layout/Print";
import LeftIndex from "./components/sideBar/leftSide/LeftIndex";
import RightSide from "./components/sideBar/rightSide/RightSide";
import DataState from "./context/DataState";
import Contect from "./components/contents/Contect";

const App = () => {
  return (
    <DataState>
      <div className="gridContainer">
        <div className="left">
          <LeftIndex />
        </div>
        <div className="center">
          <Contect />
          <Print />
        </div>
        <div className="right">
          <RightSide />
        </div>
      </div>
    </DataState>
  );
};

export default App;
