import React from "react";

const SabujCv = ({ data: { profilePic } }) => {
  console.log(profilePic);
  return <img src={profilePic} alt="" />;
};

export default SabujCv;
