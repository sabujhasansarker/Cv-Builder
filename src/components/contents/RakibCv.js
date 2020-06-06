import React from "react";

const RakibCv = ({ data: { profilePic, name } }) => {
  return (
    <div>
      <img src={profilePic} alt="" />
    </div>
  );
};

export default RakibCv;
