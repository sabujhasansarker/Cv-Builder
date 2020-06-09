import React, { useEffect, useRef, useState, useContext } from "react";

import style from "./Style.module.css";

import DataContext from "../../../context/DataContext";

const Personal = () => {
  const { getData, addBio } = useContext(DataContext);
  const [data, setData] = useState();
  const [conuntryName, setConuntryName] = useState();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("cv")));
    getCount();
  }, []);
  const getCount = async () => {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`);
    const counDa = await response.json();
    setConuntryName(counDa);
  };
  const fromData = useRef();
  fromData.current = data && data;
  const { from, fromGroup } = style;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    let targetName = e.target.name;
    let targetValue = e.target.value;
    if (targetName === "f_name")
      addData({ value: { ...fromData.current, f_name: targetValue } });
    if (targetName === "m_name")
      addData({ value: { ...fromData.current, m_name: targetValue } });
    if (targetName === "per_address")
      addData({ value: { ...fromData.current, per_address: targetValue } });
    if (targetName === "birth")
      addData({ value: { ...fromData.current, birth: targetValue } });
    if (targetName === "sex")
      addData({ value: { ...fromData.current, sex: targetValue } });
    if (targetName === "marital")
      addData({ value: { ...fromData.current, marital: targetValue } });
    if (targetName === "religion")
      addData({ value: { ...fromData.current, religion: targetValue } });
    if (targetName === "nationality")
      addData({ value: { ...fromData.current, nationality: targetValue } });
    if (targetName === "height")
      addData({ value: { ...fromData.current, height: targetValue } });

    function addData({ value }) {
      fromData.current = value;
      addBio(fromData.current);
      getData();
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className={from}>
      <div className={fromGroup}>
        <label>Father Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Father name"
          name="f_name"
          ref={fromData.f_name}
          onChange={onChange}
          value={data && data.f_name}
        />
      </div>
      <div className={fromGroup}>
        <label>Mother Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Mother name"
          name="m_name"
          ref={fromData.m_name}
          onChange={onChange}
          value={data && data.m_name}
        />
      </div>
      <div className={fromGroup}>
        <label>Permanent Address</label>
        <input
          type="text"
          className="form-control"
          placeholder="Permanent Address"
          name="per_address"
          ref={fromData.per_address}
          onChange={onChange}
          value={data && data.per_address}
        />
      </div>
      <div className={fromGroup}>
        <label>Date of Birth</label>
        <input
          type="date"
          className="form-control"
          placeholder="Date of Birth"
          name="birth"
          ref={fromData.birth}
          onChange={onChange}
          value={data && data.birth}
        />
      </div>
      <div className={fromGroup}>
        <label>Sex</label>
        <select
          className="from-control"
          name="sex"
          ref={fromData.sex}
          onChange={onChange}
          value={data && data.sex}
        >
          <option selected disabled>
            Choose an option
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className={fromGroup}>
        <label>Marital Status</label>
        <select
          className="from-control"
          name="marital"
          ref={fromData.marital}
          onChange={onChange}
          value={data && data.marital}
        >
          <option selected disabled>
            Choose an option
          </option>
          <option value="Unmarried">Unmarried</option>
          <option value="Married">Married</option>
        </select>
      </div>
      <div className={fromGroup}>
        <label>Religion</label>
        <select
          className="from-control"
          name="religion"
          ref={fromData.religion}
          onChange={onChange}
          value={data && data.religion}
        >
          <option selected disabled>
            Choose an option
          </option>
          <option value="Islam">Islam</option>
          <option value="Hindu">Hindu</option>
          <option value="Buddhists">Buddhists</option>
          <option value="Christians">Christians</option>
        </select>
      </div>
      <div className={fromGroup}>
        <label>Nationality</label>
        <select
          className="from-control"
          name="nationality"
          ref={fromData.nationality}
          onChange={onChange}
          value={data && data.nationality}
        >
          <option selected disabled>
            Choose an option
          </option>
          {conuntryName &&
            conuntryName.map((country, index) => (
              <option value={country.demonym} key={index}>
                {country.demonym}
              </option>
            ))}
        </select>
      </div>
      <div className={fromGroup}>
        <label>Height</label>
        <input
          type="text"
          className="form-control"
          placeholder="Height"
          name="height"
          ref={fromData.height}
          onChange={onChange}
          value={data && data.height}
        />
      </div>
    </form>
  );
};

export default Personal;
