import React, { useState, useContext, useEffect, Fragment } from "react";

import DataContext from "../../../context/DataContext";

import style from "./Style.module.css";

const Experience = () => {
  const { getData, data, addExp, deleteExp } = useContext(DataContext);
  useEffect(() => {
    getData();
  }, []);

  const { fromGroup } = style;

  const [formData, setFormData] = useState({
    organization: "",
    designation: "",
    from: "",
    to: "",
    duties: "",
  });
  const onChange = (e) =>
    setFormData({
      ...formData,
      id: Math.random(),
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    addExp(formData);
    setFormData({
      organization: "",
      designation: "",
      from: "",
      to: "",
      duties: "",
    });
  };
  return (
    <div className="edu_exp">
      {data &&
        data.experience &&
        data.experience.map((exp) => (
          <div
            className="edu_sort"
            key={exp.id}
            onClick={() => deleteExp(exp.id)}
          >
            <h4>
              {exp.organization.length > 20 ? (
                <Fragment>{exp.organization.substring(0, 20)}...</Fragment>
              ) : (
                exp.organization
              )}
            </h4>
            <p>
              {" "}
              {exp.designation.length > 20 ? (
                <Fragment>{exp.designation.substring(0, 20)}...</Fragment>
              ) : (
                exp.designation
              )}
            </p>
          </div>
        ))}
      <form onSubmit={onSubmit}>
        <div className={fromGroup}>
          <input
            type="text"
            placeholder="Organization name"
            name="organization"
            required
            onChange={onChange}
            value={formData.organization}
          />
        </div>
        <div className={fromGroup}>
          <label htmlFor="from">From :</label>
          <input
            type="date"
            name="from"
            required
            onChange={onChange}
            value={formData.from}
          />
        </div>
        <div className={fromGroup}>
          <input
            type="text"
            placeholder="Designation"
            name="designation"
            required
            onChange={onChange}
            value={formData.designation}
          />
        </div>
        <div className={fromGroup}>
          <label htmlFor="to">To :</label>
          <input
            type="date"
            name="to"
            onChange={onChange}
            value={formData.to}
          />
        </div>
        <div className={fromGroup}>
          <textarea
            placeholder="Dities "
            name="duties"
            onChange={onChange}
            value={formData.duties}
          />
        </div>
        <div className={fromGroup}>
          <input type="submit" value="Sumbit" />
        </div>
      </form>
    </div>
  );
};

export default Experience;
