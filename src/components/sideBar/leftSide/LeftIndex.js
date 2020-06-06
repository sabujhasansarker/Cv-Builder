import React from "react";

import style from "./Style.module.css";

// Components
import Personal from "./Personal";
import Education from "./Education";

const LeftIndex = () => {
  const { left_list, left } = style;
  return (
    <div className={left}>
      <ul className={left_list}>
        <li>Personal</li>
        <li>Work Experience</li>
        <li>Education</li>
        <li>Honors &amp; Awards</li>
        <li>Certifications</li>
        <li>Skills</li>
        <li>Hobbies</li>
        <li>Languages</li>
        <li>References</li>
        <li>Additional Information</li>
      </ul>

      <Personal />
      <Education />
    </div>
  );
};

export default LeftIndex;
