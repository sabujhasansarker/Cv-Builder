import React, { Fragment, useState } from "react";

import style from "./Style.module.css";

const Education = () => {
  const [addToggle, setAddToggle] = useState([{ id: 1 }]);
  const { from, fromGroup } = style;
  const [openId, setOpenId] = useState(1);
  const hendelClick = (id) => {
    setOpenId(id);
    setAddToggle([...addToggle, { id: id }]);
  };
  return (
    <Fragment>
      {addToggle.length > 0 &&
        addToggle.map((e) => (
          <Fragment>
            {e.id == openId ? (
              <form key={e.id}>
                <div className={fromGroup}>
                  <label>School Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="School name"
                    name="school"
                  />
                </div>
                <div className="formGroup">
                  <label>Group</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Group"
                    name="group"
                  />
                </div>
                <div className="formGroup">
                  <label>Passing Year</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Passing Year"
                    name="passing year"
                  />
                </div>
                <div className="formGroup">
                  <label>Result</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Result"
                    name="result"
                  />
                </div>
              </form>
            ) : (
              <h4 onClick={() => setOpenId(e.id)}>Add</h4>
            )}
          </Fragment>
        ))}{" "}
      <button onClick={() => hendelClick(Math.random())}>add</button>
    </Fragment>
  );
};

export default Education;
