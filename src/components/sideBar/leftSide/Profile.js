import React, { useEffect, useRef, useState, useContext } from "react";

import style from "./Style.module.css";

import DataContext from "../../../context/DataContext";

const Profile = () => {
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

    let targetName = e.target.name;
    let targetValue = e.target.value;
    if (targetName === "profilePic")
      addData({ value: { ...fromData.current, profilePic: targetValue } });
    if (targetName === "name")
      addData({ value: { ...fromData.current, name: targetValue } });
    if (targetName === "address")
      addData({ value: { ...fromData.current, address: targetValue } });
    if (targetName === "phone")
      addData({ value: { ...fromData.current, phone: targetValue } });
    if (targetName === "email")
      addData({ value: { ...fromData.current, email: targetValue } });
    if (targetName === "career_objectve")
      addData({ value: { ...fromData.current, career_objectve: targetValue } });

    function addData({ value }) {
      fromData.current = value;
      addBio(fromData.current);
      getData();
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className={from}>
      <div className={fromGroup}>
        <label>Photo Url</label>
        <input
          type="url"
          className="form-control"
          placeholder="https://profileImage.jpg"
          name="profilePic"
          ref={fromData.profilePic}
          onChange={onChange}
          value={data && data.profilePic ? data.profilePic : ""}
        />
      </div>
      <div className={fromGroup}>
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="name"
          name="name"
          ref={fromData.name}
          onChange={onChange}
          value={data && data.name ? data.name : ""}
        />
      </div>
      <div className={fromGroup}>
        <label>Address</label>
        <input
          type="text"
          className="form-control"
          placeholder="Adress"
          name="address"
          ref={fromData.address}
          onChange={onChange}
          value={data && data.address ? data.address : ""}
        />
      </div>
      <div className={fromGroup}>
        <label>Phone</label>
        <input
          type="text"
          className="form-control"
          placeholder="phone"
          name="phone"
          ref={fromData.phone}
          onChange={onChange}
          value={data && data.phone ? data.phone : ""}
        />
      </div>
      <div className={fromGroup}>
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="email"
          name="email"
          ref={fromData.email}
          onChange={onChange}
          value={data && data.email ? data.email : ""}
        />
      </div>
      <div className={fromGroup}>
        <label>Career Objective</label>
        <textarea
          className="form-control"
          placeholder="Career Objective"
          name="career_objectve"
          ref={fromData.career_objectve}
          onChange={onChange}
          value={data && data.career_objectve ? data.career_objectve : ""}
        />
      </div>
    </form>
  );
};

export default Profile;
