import React, { useContext, useEffect } from "react";
import SabujCv from "./SabujCv";
import DataContext from "../../context/DataContext";
import RakibCv from "./RakibCv";

const Contect = () => {
  const { data, getData, cv, setCv } = useContext(DataContext);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <p style={{ lineHeight: "2", color: "red" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quae,
        ipsa, vero quis consequuntur aut amet asperiores sint in adipisci,
        quibusdam debitis esse? Eum ipsa qui nihil itaque iure quasi.
      </p>
      {cv === "sabuj" && <SabujCv data={data && data} />}
      {cv === "rakib" && <RakibCv data={data && data} />}
    </div>
  );
};

export default Contect;
