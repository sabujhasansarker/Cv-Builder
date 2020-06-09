import React from "react";
import AOS from "aos";
// Components
import Print from "./components/layout/Print";
import LeftIndex from "./components/sideBar/leftSide/LeftIndex";
import RightSide from "./components/sideBar/rightSide/RightSide";
import DataState from "./context/DataState";
import Contect from "./components/contents/Contect";

const App = () => {
  AOS.init({
    once: true,
  });
  return (
    <DataState>
      <div className="gridContainer">
        <div className="left" data-aos="fade-right">
          <LeftIndex />
        </div>
        <div className="center">
          <Contect />
          <Print />
        </div>
        <div className="right" data-aos="fade-left">
          <RightSide />
        </div>
      </div>
    </DataState>
  );
};

export default App;
