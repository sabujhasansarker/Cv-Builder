import React, { useState } from "react";

import style from "./Style.module.css";

// Components
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Honors from "./Honors";
import Certifications from "./Certification";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import Languages from "./Languages";
import References from "./References";
import Additional from "./Additional";
import Profile from "./Profile";

const LeftIndex = () => {
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
          onClick={() => setActiveItem("award")}
          className={`${activeItem === "award" ? active : ""}`}
        >
          Honors &amp; Awards
        </li>
        {activeItem === "award" && <Honors />}
        <li
          onClick={() => setActiveItem("Certifications")}
          className={`${activeItem === "Certifications" ? active : ""}`}
        >
          Certifications
        </li>
        {activeItem === "Certifications" && <Certifications />}
        <li
          onClick={() => setActiveItem("Skills")}
          className={`${activeItem === "Skills" ? active : ""}`}
        >
          Skills
        </li>
        {activeItem === "Skills" && <Skills />}
        <li
          onClick={() => setActiveItem("Hobbies")}
          className={`${activeItem === "Hobbies" ? active : ""}`}
        >
          Hobbies
        </li>
        {activeItem === "Hobbies" && <Hobbies />}
        <li
          onClick={() => setActiveItem("Languages")}
          className={`${activeItem === "Languages" ? active : ""}`}
        >
          Languages
        </li>
        {activeItem === "Languages" && <Languages />}
        <li
          onClick={() => setActiveItem("References")}
          className={`${activeItem === "References" ? active : ""}`}
        >
          References
        </li>
        {activeItem === "References" && <References />}
        <li
          onClick={() => setActiveItem("Additional")}
          className={`${activeItem === "Additional" ? active : ""}`}
        >
          Additional Information
        </li>
        {activeItem === "Additional" && <Additional />}
      </ul>
    </div>
  );
};

export default LeftIndex;
