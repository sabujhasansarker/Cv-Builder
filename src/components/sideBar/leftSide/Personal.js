import React from "react";

import style from "./Style.module.css";

const Personal = () => {
  const { from, fromGroup } = style;
  return (
    <form className={from}>
      <div className={fromGroup}>
        <label for="exampleInputEmail1">Photo Url</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="https://i.imgur.com/Icr472Z.jpg"
        />
      </div>
    </form>
  );
};

export default Personal;
