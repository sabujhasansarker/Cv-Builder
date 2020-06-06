import React, { useContext } from "react";
import DataContext from "../../../context/DataContext";

const RightSide = () => {
  const { setCv } = useContext(DataContext);
  return (
    <div className="">
      <h1 onClick={() => setCv("rakib")}>rakib</h1>
      <h1 onClick={() => setCv("sabuj")}>sabuj</h1>
    </div>
  );
};

export default RightSide;
