import React, { Fragment } from "react";

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
    margin: "0 auto",
    fontSize: "15px",
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
  eduP: {
    fontSize: "15px",
    lineHeight: "1.5",
    lineHeight: "1.6",
    margin: "0",
  },
  eduL: {
    fontSize: "15px",
    lineHeight: "1.5",
    width: "65%",
    float: "left",
    lineHeight: "1.6",
    margin: "0",
  },
  eduHeading: {
    display: "table-cell",
    width: "150px",
  },
  m_l: {
    marginLeft: "20px",
    marginTop: "20px",
  },
  m_r: {
    marginRight: "20px",
  },
  flex: {
    display: "flex",
  },
  mL_20: {
    margin: "0",
    marginLeft: "20px",
  },
  fs_20: {
    fontSize: "20px",
  },
};
const SabujCv = ({ data: { name, address, phone, email, profilePic } }) => {
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
      <div style={styles.div}>
        <p style={styles.title}>Career Objective</p>
        <div style={styles.m_l}>
          <p style={styles.text}>
            To save the organization toward the achievement of its goal by
            devoting my energy skills and potentials in an ethical manner to be
            a part of any section.
          </p>
        </div>
      </div>
      {/* Exp */}
      <div style={styles.div}>
        <p style={styles.title}>Work Experience:</p>
        <br />
        <div style={styles.m_l}>
          <p style={styles.eduP}>
            <b style={styles.m_r}>
              <span style={styles.eduHeading}>Organization </span> :
            </b>
            <b>Sun Power Electronics</b>
          </p>
          <p style={styles.eduP}>
            <b style={styles.m_r}>
              <span style={styles.eduHeading}>Designation </span> :
            </b>
            Sales Executive
          </p>
          <p style={styles.eduP}>
            <b style={styles.m_r}>
              <span style={styles.eduHeading}>Time Duration </span> :
            </b>{" "}
            1stSeptember 2017 –31 October 2018
          </p>
          <p style={styles.eduP}>
            <b>Duties:</b>
            <div>
              <p style={styles.mL_20}>
                <span style={styles.fs_20}>&#10070;</span> Communicatewith
                customers to choose electronicdevices such as IPS and UPS.
              </p>
              <p style={styles.mL_20}>
                <span style={styles.fs_20}>&#10070;</span> Communicatewith
                customers to choose electronicdevices such as IPS and UPS.
              </p>
              <p style={styles.mL_20}>
                <span style={styles.fs_20}>&#10070;</span> Communicatewith
                customers to choose electronicdevices such as IPS and UPS.
              </p>
            </div>
          </p>
        </div>
      </div>
      {/* Exp end */}
      {/* Educaion */}
      <div style={styles.div}>
        <p style={styles.title}>Educational Qualification</p>
        <div style={styles.m_l}>
          <p style={styles.eduP}>
            <b>BBA (Honors) in Management Information System</b>
          </p>
          <p style={styles.eduP}>
            <b style={styles.m_r}>
              <span style={styles.eduHeading}>Institution Name </span> :
            </b>
            <b>Habibullah Bahar University</b>
          </p>
          <div style={styles.flex}>
            <p style={styles.eduL}>
              <b style={styles.m_r}>
                <span style={styles.eduHeading}>Group</span> :
              </b>
              Business Studies
            </p>
            <p style={styles.eduP}>
              <b style={styles.m_r}>
                <span style={styles.eduHeading}>Passing Year </span> :
              </b>
              2015
            </p>
          </div>
          <div style={styles.flex}>
            <p style={styles.eduL}>
              <b style={styles.m_r}>
                <span style={styles.eduHeading}>Board</span> :
              </b>
              Dhaka
            </p>
            <p style={styles.eduP}>
              <b style={styles.m_r}>
                <span style={styles.eduHeading}>Result </span> :
              </b>
              GPA 4.5
            </p>
          </div>
        </div>
      </div>
      {/* education end */}
    </Fragment>
  );
};

export default SabujCv;
