import React, { Fragment } from "react";

const SabujCv = ({ data: { profilePic, name, education, experience } }) => {
  return (
    <Fragment>
      <h1>{name}</h1>
      <img src={profilePic} alt="" />
      {education && education.map((edu) => <h1>{edu.name}</h1>)}
      {experience && experience.map((exp) => <h1>{exp.name}</h1>)}
    </Fragment>
  );
};

export default SabujCv;
