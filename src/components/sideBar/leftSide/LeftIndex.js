import React, { useState, useContext, Fragment } from "react";

import style from "./Style.module.css";

// Components
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certification";
import Skills from "./Skills";
import References from "./References";
import Profile from "./Profile";

// context
import DataContext from "../../../context/DataContext";

const LeftIndex = () => {
  const { data } = useContext(DataContext);

  const [activeItem, setActiveItem] = useState("profile");
  const { left_list, left, active } = style;
  return (
    <div className={left}>
      <ul className={left_list}>
        <li
          onClick={() => setActiveItem("profile")}
          className={`${activeItem === "profile" ? active : ""}`}
        >
          Profile
        </li>
        {activeItem === "profile" && <Profile />}
        {data && (
          <Fragment>
            <li
              onClick={() => setActiveItem("personal")}
              className={`${activeItem === "personal" ? active : ""}`}
            >
              Personal
            </li>
            {activeItem === "personal" && <Personal />}
            <li
              onClick={() => setActiveItem("work")}
              className={`${activeItem === "work" ? active : ""}`}
            >
              Work Experience
            </li>
            {activeItem === "work" && <Experience />}
            <li
              onClick={() => setActiveItem("edu")}
              className={`${activeItem === "edu" ? active : ""}`}
            >
              Education
            </li>
            {activeItem === "edu" && <Education />}
            <li
              onClick={() => setActiveItem("Skills")}
              className={`${activeItem === "Skills" ? active : ""}`}
            >
              Skills
            </li>
            {activeItem === "Skills" && <Skills />}

            <li
              onClick={() => setActiveItem("Certifications")}
              className={`${activeItem === "Certifications" ? active : ""}`}
            >
              Certifications
            </li>
            {activeItem === "Certifications" && <Certifications />}

            <li
              onClick={() => setActiveItem("References")}
              className={`${activeItem === "References" ? active : ""}`}
            >
              References
            </li>
            {activeItem === "References" && <References />}
          </Fragment>
        )}
      </ul>
    </div>
  );
};

export default LeftIndex;
