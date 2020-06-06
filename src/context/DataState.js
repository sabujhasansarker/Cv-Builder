import React, { useReducer, useEffect, useState } from "react";
import DataContext from "./DataContext";
import DataReducer from "./DataReducar";

import { SET_CV, GET_DATA } from "./Type";

const DataState = (props) => {
  const initialState = {
    data: {},
    cv: "sabuj",
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  //   action
  const getData = () => {
    dispatch({
      type: GET_DATA,
    });
  };

  const setCv = (name) => {
    dispatch({
      type: SET_CV,
      payload: name,
    });
  };
  return (
    <DataContext.Provider
      value={{ data: state.data, cv: state.cv, getData, setCv }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataState;
