import React, { Fragment } from "react";
import moment from "moment";

const styles = {
  profile: {
    display: "flex",
    justifyContent: "space-between",
  },
  img: {
    width: "200px",
    height: "200px",
  },

  h4: {
    fontSize: "36px",
    margin: 0,
  },

  p: {
    lineHeight: "1.6",
    fontSize: "15px",
    margin: "0",
  },
  title: {
    background: "silver",
    display: "inline",
    padding: "5px 10px",
    borderRadius: "5px",
    fontWeight: "600",
  },
  text: {
    marginTop: "20px",
    fontSize: "15px",
    lineHeight: "1.5",
  },
  div: {
    marginBottom: "20px",
  },
  edu_exp_container: {
    display: "grid",
    gridTemplateColumns: "0.3fr 0px 1fr",
    gridColumnGap: "20px",
    justifyItems: "stretch",
    alignItems: "stretch",
    margin: "0px",
  },
  edu_exp_d: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "20px",
    justifyItems: "stretch",
    alignItems: "stretch",
  },
  edu_exp_: {
    display: "grid",
    gridTemplateColumns: "0.6fr 0px 1fr",
    gridColumnGap: "20px",
    justifyItems: "stretch",
    alignItems: "stretch",
    margin: "0px",
  },

  m_l: {
    marginLeft: "20px",
    marginTop: "20px",
  },
  mL_20: {
    margin: "0",
    marginLeft: "20px",
  },

  singleContainer: {
    display: "grid",
    gridTemplateColumns: " .6fr 0px 1fr",
    gridColumnGap: "20px",
    justifyItems: "stretch",
    alignItems: "stretch",
    margin: "5px 0px",
  },
};
const SabujCv = ({
  data: {
    name,
    address,
    phone,
    email,
    profilePic,
    career_objectve,
    sex,
    nationality,
    f_name,
    m_name,
    per_address,
    birth,
    marital,
    height,
    religion,
    education,
    experience,
    skills,
    certificates,
  },
}) => {
  return (
    <Fragment>
      <div style={styles.profile}>
        <div className="left">
          <h4 style={styles.h4}>{name}</h4>
          {address && (
            <p style={styles.p}>
              <b>Address:</b>
              {address}
            </p>
          )}
          {phone && (
            <p style={styles.p}>
              <b>Phone:</b>
              {phone}
            </p>
          )}
          {email && (
            <p style={styles.p}>
              <b>Email:</b>
              {email}
            </p>
          )}
        </div>
        <div className="right">
          {profilePic && <img src={profilePic} alt="" style={styles.img} />}
        </div>
      </div>
      {career_objectve && (
        <div style={styles.div}>
          <p style={styles.title}>Career Objective</p>
          <div style={styles.m_l}>
            <p style={styles.text}>{career_objectve}</p>
          </div>
        </div>
      )}

      <br />
      {/* Exp */}
      {experience && experience.length > 0 && (
        <div style={styles.div}>
          <p style={styles.title}>Work Experience:</p>
          <br />
          {experience.map((exp) => (
            <div style={styles.m_l} key={exp.id}>
              <b style={styles.edu_exp_container}>
                <span>Organization </span> <span>:</span>
                <span>{exp.organization}</span>
              </b>
              <p style={styles.edu_exp_container}>
                <b>Designation </b> <b>:</b>
                <span>{exp.designation}</span>
              </p>
              <p style={styles.edu_exp_container}>
                <b>Time Duration </b> <b>:</b>
                <span>
                  {" "}
                  {moment(exp.from).format("LL")}{" "}
                  {exp.to && (
                    <Fragment>- {moment(exp.to).format("LL")}</Fragment>
                  )}
                </span>
              </p>
              {exp.duties && (
                <p style={{ margin: "5px 0px" }}>
                  <b>Duties :</b>
                  <p style={styles.mL_20}>
                    {exp.duties.split("\n").map((d, index) => (
                      <p style={styles.p} key={index}>
                        &#10070; {d}
                      </p>
                    ))}
                  </p>
                </p>
              )}
            </div>
          ))}
          <br />
        </div>
      )}
      {/* exp end */}
      {/* Educaion */}
      {education && education.length > 0 && (
        <div style={styles.div}>
          <p style={styles.title}>Educational Qualification</p>
          <div style={styles.m_l}>
            {education.map((edu) => (
              <div style={{ marginBottom: "20px" }} key={edu.id}>
                <b style={styles.p}>
                  {edu.degree}
                  {edu.result ? "" : "(runing)"}
                </b>
                <b style={{ display: "block" }}>
                  <span>Institution Name </span>
                  <span style={{ margin: "0px 16px 0px 4px" }}>:</span>
                  <span>{edu.name}</span>
                </b>
                <div style={styles.edu_exp_d}>
                  <p style={styles.edu_exp_}>
                    <b>Group</b>
                    <b>:</b>
                    {edu.group}
                  </p>
                  <p style={styles.edu_exp_}>
                    {edu.passing_year && (
                      <Fragment>
                        <b>Passing Year </b> <b>:</b> {edu.passing_year}
                      </Fragment>
                    )}
                  </p>
                  <p style={styles.edu_exp_}>
                    {edu.board && (
                      <Fragment>
                        <b>Board </b> <b>:</b> {edu.board}
                      </Fragment>
                    )}
                  </p>
                  <p style={styles.edu_exp_}>
                    {edu.result && (
                      <Fragment>
                        <b>Result </b> <b>:</b> GPA {edu.result}
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <br />
        </div>
      )}
      {/* education end */}
      {/* certificates */}
      {certificates && certificates.length > 0 && (
        <div style={styles.div}>
          <p style={styles.title}>Certificates</p>
          <div style={styles.m_l}>
            {certificates.map((edu) => (
              <div style={{ marginBottom: "20px" }} key={edu.id}>
                <b style={styles.edu_exp_}>
                  <span>Certificates Name </span>
                  <span>:</span>
                  <span>{edu.name}</span>
                </b>
                <p style={styles.edu_exp_}>
                  <b>Institution Name </b>
                  <span>:</span>
                  <span>{edu.institution}</span>
                </p>
                <p style={styles.edu_exp_}>
                  <b>Year </b>
                  <span>:</span>
                  <span>{edu.date}</span>
                </p>
              </div>
            ))}
          </div>
          <br />
        </div>
      )}
      {/* certificates end */}

      {/* Skill */}
      {skills && (
        <div style={styles.div}>
          <p style={styles.title}>Skills</p>
          <div style={styles.m_l}>
            <p style={styles.p}>
              {skills.split("\n").map((skill, index) => (
                <Fragment key={index}>
                  &#10070; {skill} <br />
                </Fragment>
              ))}
            </p>
          </div>
          <br />
        </div>
      )}

      {/* skills end */}

      {/* Personal */}
      <div style={styles.div}>
        <p style={styles.title}>Personal Information</p>
        <div style={styles.m_l}>
          {name && (
            <p style={styles.singleContainer}>
              <span>&#10070; Name</span>
              <span>:</span>
              <span>{name}</span>
            </p>
          )}
          {f_name && (
            <p style={styles.singleContainer}>
              <span> &#10070; Father's Name </span>
              <span>:</span>
              <span>{f_name}</span>
            </p>
          )}
          {m_name && (
            <p style={styles.singleContainer}>
              <span> &#10070; Mother's Name </span> <span>:</span>
              <span>{m_name}</span>
            </p>
          )}
          {birth && (
            <p style={styles.singleContainer}>
              <span> &#10070; Date of birth </span>
              <span>:</span>
              <span> {moment(birth).format("LL")}</span>
            </p>
          )}
          {religion && (
            <p style={styles.singleContainer}>
              <span> &#10070; Religion </span> <span>:</span>
              <span>{religion}</span>
            </p>
          )}
          {sex && (
            <p style={styles.singleContainer}>
              <span> &#10070; Gender </span>
              <span>:</span>
              <span>{sex}</span>
            </p>
          )}
          {per_address && (
            <div style={styles.singleContainer}>
              <span>&#10070; Present Address</span>
              <span>:</span>
              <span>
                {per_address &&
                  per_address.split(",").map((per, index) => (
                    <Fragment key={index}>
                      {per} <br />
                    </Fragment>
                  ))}
              </span>
            </div>
          )}

          {marital && (
            <p style={styles.singleContainer}>
              <span> &#10070; Marital Status </span>
              <span>:</span>
              <span> {marital}</span>
            </p>
          )}
          {nationality && (
            <p style={styles.singleContainer}>
              <span> &#10070; Nationality </span> <span>:</span>
              <span>{nationality}</span>
            </p>
          )}
          {height && (
            <p style={styles.singleContainer}>
              <span> &#10070; Height </span> <span>:</span>
              <span>{height}″</span>
            </p>
          )}
        </div>
      </div>
      {/* Perrsonal end */}
    </Fragment>
  );
};

export default SabujCv;
