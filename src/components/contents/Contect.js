import React, { useContext, useEffect } from "react";

import SabujCv from "./SabujCv";
import DataContext from "../../context/DataContext";
import RakibCv from "./RakibCv";
import FahadCv from "./FahadCv";

const Contect = () => {
  const { data, getData, cv, deleteEdu, deleteExp } = useContext(DataContext);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="cv-container">
      {/* {cv === "sabuj" && (
        <SabujCv
          data={data ? data : ""}
          deleteEdu={deleteEdu}
          deleteExp={deleteExp}
        />
      )} */}
      {cv === "rakib" && (
        <RakibCv
          data={data ? data : ""}
          deleteEdu={deleteEdu}
          deleteExp={deleteExp}
        />
      )}
      {cv === "sabuj" && (
        <FahadCv
          data={data ? data : ""}
          deleteEdu={deleteEdu}
          deleteExp={deleteExp}
        />
      )}
    </div>
  );
};

export default Contect;
