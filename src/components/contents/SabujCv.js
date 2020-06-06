import React, { Fragment } from "react";

const SabujCv = ({ data: { profilePic, name } }) => {
  return (
    <Fragment>
      <h1>{name}</h1>
      <img src={profilePic} alt="" />
    </Fragment>
  );
};

export default SabujCv;
