import React, { Fragment } from "react";
import moment from "moment";

const styles = {
  p: {
    margin: "0",
  },
  singleGrid: {
    display: "grid",
    gridTemplateColumns: "0.2fr .05fr 1fr",
    margin: "0",
  },
  underline: { textDecoration: "underline", margin: "0" },
  hrHeading: {
    background: "black",
    border: "0px",
    height: "1px",
    margin: "10px 0px",
  },
  hr: {
    background: "black",
    border: "0px",
    height: "1px",
    margin: "0px 0px 10px 0px",
  },
  mb_20: {
    marginBottom: "20px",
  },
};

const FahadCv = ({
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
    references,
  },
}) => {
  return (
    <Fragment>
      <h1
        style={{
          textAlign: " center",
          textDecoration: "underline",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        curriculum vitae
      </h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h2 style={styles.underline}>{name}</h2>
          <h4 style={styles.underline}>Contact & Address :</h4>
          <p style={styles.p}>
            <span>Call No </span>
            <span style={{ margin: "0px 10px 0px 16px" }}>:</span>
            <span>{phone}</span>
          </p>
          <p style={styles.p}>
            <span>Email </span>
            <span style={{ margin: "0px 10px 0px 28px" }}>:</span>
            <span>{email}</span>
          </p>
          <p style={styles.p}>
            <span>Address </span>
            <span style={{ margin: "0px 10px 0px 10px" }}>:</span>
            <span>{address}</span>
          </p>
        </div>
        <img
          src={profilePic}
          alt=""
          style={{ width: " 150px", height: "150px" }}
        />
      </div>
      <hr style={styles.hrHeading} />
      <div style={styles.mb_20}>
        <h4 style={{ margin: "0" }}>Object</h4>
        <hr style={styles.hr} />
        {career_objectve}
      </div>

      {/* Expreance */}
      {experience && (
        <div style={styles.mb_20}>
          <h4 style={{ margin: "0" }}>Experience</h4>
          <hr style={styles.hr} />
          {experience.map((exp) => (
            <div style={{ marginBottom: "10px" }} key={exp.id}>
              <p style={styles.singleGrid}>
                <span>Organization</span>
                <span>:</span>
                <b>
                  {exp.organization}
                  {exp.to ? "" : " (runing) "}
                </b>
              </p>
              <p style={styles.singleGrid}>
                <span>Designation</span> <span>:</span>
                <span>{exp.designation}</span>
              </p>
              <p style={styles.singleGrid}>
                <span>Time Duration </span> <span>:</span>{" "}
                <span>
                  {moment(exp.from).format("LL")}{" "}
                  {exp.to && (
                    <Fragment>- {moment(exp.to).format("LL")}</Fragment>
                  )}
                </span>
              </p>
              {exp.duties && (
                <p style={styles.singleGrid}>
                  <span>Duties</span> <span>:</span>{" "}
                  <span>
                    {exp.duties.split("\n").map((du, index) => (
                      <span style={{ display: "block" }} key={index}>
                        {" "}
                        &#10070; {du}
                      </span>
                    ))}
                  </span>
                </p>
              )}
            </div>
          ))}
        </div>
      )}
      {/* Education */}
      {education && (
        <div style={styles.mb_20}>
          <h4 style={{ margin: "0" }}>Education</h4>
          <hr style={styles.hr} />
          {education.map((edu) => (
            <div style={{ marginBottom: "10px" }} key={edu.id}>
              <p style={styles.singleGrid}>
                <span>Exam</span>
                <span>:</span>
                <b>
                  {edu.degree}
                  {edu.result ? "" : " (runing)"}
                </b>
              </p>
              {edu.passing_year && (
                <p style={styles.singleGrid}>
                  <span>Year</span> <span>:</span>{" "}
                  <span>{edu.passing_year}</span>
                </p>
              )}

              <p style={styles.singleGrid}>
                <span>Institution</span> <span>:</span> <span>{edu.name}</span>
              </p>
              <p style={styles.singleGrid}>
                <span>Group</span> <span>:</span> <span>{edu.group}</span>
              </p>
            </div>
          ))}
        </div>
      )}
      {/* skills */}
      {skills && (
        <div style={styles.mb_20}>
          <h4 style={{ margin: "0" }}>Skills</h4>
          <hr style={styles.hr} />
          <p style={styles.p}>
            {skills.split("\n").map((skill, index) => (
              <Fragment key={index}>
                &#10070; {skill} <br />
              </Fragment>
            ))}
          </p>
        </div>
      )}

      {/* Personal */}
      <div style={styles.mb_20}>
        <h4 style={{ margin: "0" }}>Personal</h4>
        <hr style={styles.hr} />
        <div style={{ marginBottom: "10px" }}>
          {name && (
            <p style={styles.singleGrid}>
              <span>Name</span>
              <span>:</span>
              <span>{name}</span>
            </p>
          )}
          {f_name && (
            <p style={styles.singleGrid}>
              <span>Father Name</span>
              <span>:</span>
              <span>{f_name}</span>
            </p>
          )}
          {m_name && (
            <p style={styles.singleGrid}>
              <span>Mother Name</span>
              <span>:</span>
              <span>{m_name}</span>
            </p>
          )}
          {birth && (
            <p style={styles.singleGrid}>
              <span>Birth Day</span>
              <span>:</span>
              <span>{moment(birth).format("LL")}</span>
            </p>
          )}
          {religion && (
            <p style={styles.singleGrid}>
              <span>Religion</span>
              <span>:</span>
              <span>{religion}</span>
            </p>
          )}
          {sex && (
            <p style={styles.singleGrid}>
              <span>Gender</span>
              <span>:</span>
              <span>{sex}</span>
            </p>
          )}
          {per_address && (
            <p style={styles.singleGrid}>
              <span>Present Address</span>
              <span>:</span>
              <span>
                {per_address &&
                  per_address.split("\n").map((per, index) => (
                    <Fragment key={index}>
                      {per} <br />
                    </Fragment>
                  ))}
              </span>
            </p>
          )}
          {marital && (
            <p style={styles.singleGrid}>
              <span>Marital Status</span>
              <span>:</span>
              <span>{marital}</span>
            </p>
          )}
          {nationality && (
            <p style={styles.singleGrid}>
              <span>Nationality</span>
              <span>:</span>
              <span>{nationality}</span>
            </p>
          )}
          {height && (
            <p style={styles.singleGrid}>
              <span>Height</span>
              <span>:</span>
              <span>{height}″</span>
            </p>
          )}
        </div>
      </div>
      {/* skills */}
      {references && (
        <div style={styles.mb_20}>
          <h4 style={{ margin: "0" }}>References</h4>
          <hr style={styles.hr} />
          {references.map((ref) => (
            <div style={{ marginBottom: "10px" }} key={ref.id}>
              <p style={styles.singleGrid}>
                <span>Name</span>
                <span>:</span>
                <span>{ref.name}</span>
              </p>
              <p style={styles.singleGrid}>
                <span>Designation</span>
                <span>:</span>
                <span>{ref.designation}</span>
              </p>
              <p style={styles.singleGrid}>
                <span>Organization</span>
                <span>:</span>
                <span>{ref.org}</span>
              </p>
              {ref.call && (
                <p style={styles.singleGrid}>
                  <span>Call </span>
                  <span>:</span>
                  <span>{ref.call}</span>
                </p>
              )}
              {ref.email && (
                <p style={styles.singleGrid}>
                  <span>Email</span>
                  <span>:</span>
                  <span>{ref.email}</span>
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default FahadCv;
