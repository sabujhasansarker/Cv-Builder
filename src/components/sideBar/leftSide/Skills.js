import React, { useRef, useContext, useState, useEffect } from "react";

import style from "./Style.module.css";

import DataContext from "../../../context/DataContext";

const Skills = () => {
  const { getData, addBio } = useContext(DataContext);
  const [data, setData] = useState();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("cv")));
  }, []);
  const fromData = useRef();
  fromData.current = data && data;
  const { from, fromGroup } = style;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (e.target.name === "skills")
      addData({ value: { ...fromData.current, skills: e.target.value } });

    function addData({ value }) {
      fromData.current = value;
      addBio(fromData.current);
      getData();
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={fromGroup}>
        <textarea
          placeholder="Type your skills "
          name="duties"
          name="skills"
          onChange={onChange}
          ref={fromData.skills}
          onChange={onChange}
          value={data && data.skills}
        />
      </div>
    </form>
  );
};

export default Skills;
