import React, { useState, useContext, useEffect, Fragment } from "react";
import moment from "moment";

import DataContext from "../../../context/DataContext";

import style from "./Style.module.css";

const Certtification = () => {
  const { getData, data, addCertificates, deleteCertificates } = useContext(
    DataContext
  );
  useEffect(() => {
    getData();
  }, []);
  const { fromGroup } = style;
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    description: "",
    institution: "",
  });
  const onChange = (e) =>
    setFormData({
      ...formData,
      id: Math.random(),
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    addCertificates(formData);
    setFormData({
      name: "",
      date: "",
      description: "",
      institution: "",
    });
  };
  return (
    <div className="edu_exp">
      {data &&
        data.certificates &&
        data.certificates.map((cer) => (
          <div
            className="edu_sort"
            onClick={() => deleteCertificates(cer.id)}
            key={cer.id}
          >
            <p>
              {cer.name.length > 10 ? (
                <Fragment>{cer.name.substring(0, 10)} ...</Fragment>
              ) : (
                cer.name
              )}
              certificated from <br />
              {cer.institution.length > 20 ? (
                <Fragment>{cer.institution.substring(0, 10)} ...</Fragment>
              ) : (
                cer.institution
              )}{" "}
              in
              {moment(cer.date).format("YYYY")}
            </p>
          </div>
        ))}
      <form onSubmit={onSubmit}>
        <div className={fromGroup}>
          <input
            type="text"
            placeholder="Certificate Name "
            name="name"
            onChange={onChange}
            value={formData.name}
            required
          />
        </div>
        <div className={fromGroup}>
          <input
            type="text"
            placeholder="Institution Name "
            name="institution"
            onChange={onChange}
            value={formData.institution}
            required
          />
        </div>
        <div className={fromGroup}>
          <input
            type="date"
            name="date"
            onChange={onChange}
            value={formData.date}
            required
          />
        </div>
        <div className={fromGroup}>
          <textarea
            placeholder="Description "
            name="description"
            onChange={onChange}
            value={formData.description}
          />
        </div>
        <div className={fromGroup}>
          <input type="submit" value="Sumbit" />
        </div>
      </form>
    </div>
  );
};

export default Certtification;
