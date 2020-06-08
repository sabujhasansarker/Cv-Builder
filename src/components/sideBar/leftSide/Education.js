import React, { useState, useContext, useEffect } from "react";

import DataContext from "../../../context/DataContext";

const Education = () => {
  const { addEdu, getData, data } = useContext(DataContext);

  useEffect(() => {
    getData();
  }, []);
  const [education, setEducation] = useState(
    data && data.education ? data.education : []
  );

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
    getData();
    setEducation(data && data.education);
  };
  return (
    <div className="edu_exp">
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
      <button>Add Education</button>
    </div>
  );
};

export default Education;
