import React from "react";

const RakibCv = ({ data: { profilePic, name } }) => {
  return (
    <div>
      <img
        style={{ margin: "0 auto", display: "flex" }}
        src={profilePic}
        alt=""
      />
    </div>
  );
};

export default RakibCv;
