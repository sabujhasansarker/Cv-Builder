import React, { useContext, useEffect } from "react";
import SabujCv from "./SabujCv";
import DataContext from "../../context/DataContext";

const Contect = () => {
  const { data, getData } = useContext(DataContext);
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
      <SabujCv data={data && data} />
    </div>
  );
};

export default Contect;
