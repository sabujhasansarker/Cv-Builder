import React, { useContext } from "react";
import DataContext from "../../../context/DataContext";

import sabujImage from "./sabuj.png";

const RightSide = () => {
  const { setCv } = useContext(DataContext);
  return (
    <div className="all_cv">
      <img
        className="cv_img"
        onClick={() => setCv("sabuj")}
        src={sabujImage}
        alt="sabuj"
      />
      <h1 onClick={() => setCv("rakib")}>rakib</h1>
    </div>
  );
};

export default RightSide;
