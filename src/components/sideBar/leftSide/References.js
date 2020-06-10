import React, { useState, useContext, useEffect, Fragment } from "react";

import DataContext from "../../../context/DataContext";

import style from "./Style.module.css";

const References = () => {
  const { addreferences, getData, data, deletereferences } = useContext(
    DataContext
  );
  useEffect(() => {
    getData();
  }, []);
  const { fromGroup } = style;
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    call: "",
    org: "",
  });
  const onChange = (e) =>
    setFormData({
      ...formData,
      id: Math.random(),
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    addreferences(formData);
    setFormData({
      name: "",
      designation: "",
      email: "",
      call: "",
      org: "",
    });
  };
  return (
    <div className="edu_exp">
      {data &&
        data.references &&
        data.references.map((ref) => (
          <div
            className="edu_sort"
            onClick={() => deletereferences(ref.id)}
            key={ref.id}
          >
            <h4>
              {ref.name.length > 20 ? (
                <Fragment>{ref.name.substring(0, 20)}...</Fragment>
              ) : (
                ref.name
              )}
            </h4>
            <p>
              {ref.designation.length > 20 ? (
                <Fragment>{ref.designation.substring(0, 20)}...</Fragment>
              ) : (
                ref.designation
              )}{" "}
              at{" "}
              {ref.org.length > 20 ? (
                <Fragment>{ref.org.substring(0, 20)}...</Fragment>
              ) : (
                ref.org
              )}
            </p>
          </div>
        ))}
      <form onSubmit={onSubmit}>
        <div className={fromGroup}>
          <input
            type="text"
            placeholder="Name "
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
            placeholder="Designation"
            name="designation"
            onChange={onChange}
            value={formData.designation}
          />
        </div>
        <div className={fromGroup}>
          <input
            type="text"
            placeholder="Name of the organization"
            name="org"
            onChange={onChange}
            value={formData.org}
            required
          />
        </div>
        <div className={fromGroup}>
          <input
            type="text"
            placeholder="Call"
            name="call"
            onChange={onChange}
            value={formData.call}
            required
          />
        </div>
        <div className={fromGroup}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={onChange}
            value={formData.email}
          />
        </div>
        <div className={fromGroup}>
          <input type="submit" value="Sumbit" />
        </div>
      </form>
    </div>
  );
};

export default References;
