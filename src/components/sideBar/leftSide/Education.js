import React, { useState, useContext, useEffect, Fragment } from "react";

import DataContext from "../../../context/DataContext";

import style from "./Style.module.css";

const Education = () => {
  const { addEdu, getData, data, deleteEdu } = useContext(DataContext);
  useEffect(() => {
    getData();
  }, []);
  const { fromGroup } = style;
  const [formData, setFormData] = useState({
    name: "",
    group: "",
    result: "",
    degree: "",
    board: "",
    passing_year: "",
  });
  const onChange = (e) =>
    setFormData({
      ...formData,
      id: Math.random(),
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    addEdu(formData);
    setFormData({
      name: "",
      group: "",
      passing_year: "",
      result: "",
      degree: "",
      board: "",
    });
  };
  return (
    <div className="edu_exp">
      {data &&
        data.education &&
        data.education.map((edu) => (
          <div
            className="edu_sort"
            onClick={() => deleteEdu(edu.id)}
            key={edu.id}
          >
            <h4>
              {edu.name.length > 20 ? (
                <Fragment>{edu.name.substring(0, 20)}...</Fragment>
              ) : (
                edu.name
              )}
            </h4>
            <p>
              {" "}
              {edu.degree.length > 20 ? (
                <Fragment>{edu.degree.substring(0, 20)}...</Fragment>
              ) : (
                edu.degree
              )}
            </p>
          </div>
        ))}
      <form onSubmit={onSubmit}>
        <div className={fromGroup}>
          <input
            type="text"
            placeholder="Institution Name "
            name="name"
            onChange={onChange}
            value={formData.name}
            required
          />
        </div>
        <div className={fromGroup}>
          <input
            required
            type="text"
            placeholder="Degree"
            name="degree"
            onChange={onChange}
            value={formData.degree}
          />
        </div>
        <div className={fromGroup}>
          <input
            type="text"
            placeholder="Board"
            name="board"
            onChange={onChange}
            value={formData.board}
          />
        </div>
        <div className={fromGroup}>
          <input
            type="text"
            placeholder="Group"
            name="group"
            onChange={onChange}
            value={formData.group}
            required
          />
        </div>
        <div className={fromGroup}>
          <input
            type="text"
            placeholder="Result"
            name="result"
            onChange={onChange}
            value={formData.result}
          />
        </div>
        <div className={fromGroup}>
          <input
            type="text"
            placeholder="Passing Year"
            name="passing_year"
            onChange={onChange}
            value={formData.passing_year}
          />
        </div>
        <div className={fromGroup}>
          <input type="submit" value="Sumbit" />
        </div>
      </form>
    </div>
  );
};

export default Education;
