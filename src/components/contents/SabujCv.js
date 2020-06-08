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
  },
  eduL: {
    fontSize: "15px",
    lineHeight: "1.5",
    width: "65%",
    float: "left",
  },
  eduHeading: {
    display: "table-cell",
    width: "150px",
  },
  m_l: {
    marginLeft: "20px",
  },
  m_r: {
    marginRight: "20px",
  },
  flex: {
    display: "flex",
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
      <div style={styles.div}>
        <p style={styles.title}>Educational Qualification</p>
        <div style={styles.m_l}>
          <p style={styles.eduP}>
            <br />
            <b>BBA (Honors) in Management Information System</b>
          </p>
          <p>
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
    </Fragment>
  );
};

export default SabujCv;
