import React, { useState, useContext, useEffect } from "react";

import DataContext from "../../../context/DataContext";

const Education = () => {
  const { addEdu, getData, data, deleteEdu } = useContext(DataContext);
  useEffect(() => {
    getData();
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    field_of_study: "",
    result: "",
    degree: "",
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
    setFormData({ name: "", field_of_study: "", result: "", degree: "" });
  };
  return (
    <div className="edu_exp">
      {data &&
        data.education &&
        data.education.map((edu) => (
          <h1 onClick={() => deleteEdu(edu.id)}>{edu.name}</h1>
        ))}
      <form onSubmit={onSubmit}>
        <div className="from-group">
          <input
            type="text"
            placeholder="School name"
            name="name"
            onChange={onChange}
            value={formData.name}
          />
        </div>
        <div className="from-group">
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            onChange={onChange}
            value={formData.degree}
          />
        </div>
        <div className="from-group">
          <input
            type="text"
            placeholder="Field Of Study"
            name="field_of_study"
            onChange={onChange}
            value={formData.field_of_study}
          />
        </div>
        <div className="from-group">
          <input
            type="text"
            placeholder="Result"
            name="result"
            onChange={onChange}
            value={formData.result}
          />
        </div>
        <div className="from-group">
          <input type="submit" value="Sumbit" />
        </div>
      </form>
    </div>
  );
};

export default Education;
