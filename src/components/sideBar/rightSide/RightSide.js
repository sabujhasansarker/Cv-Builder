import React, { useContext } from "react";
import DataContext from "../../../context/DataContext";

import sabujImage from "./sabuj.png";

const RightSide = () => {
  const { setCv, cv } = useContext(DataContext);
  return (
    <div className="all_cv">
      <img
        className={`cv_img ${cv === "sabuj" && "active"}`}
        onClick={() => setCv("sabuj")}
        src={sabujImage}
        alt="sabuj"
      />
      <img
        src="https://bit.ly/37ibs27"
        alt=""
        onClick={() => setCv("rakib")}
        className={`cv_img ${cv === "rakib" && "active"}`}
      />
      <img
        src="https://bit.ly/37gM9gU"
        alt=""
        onClick={() => setCv("fahad")}
        className={`cv_img ${cv === "fahad" && "active"}`}
      />
    </div>
  );
};

export default RightSide;
