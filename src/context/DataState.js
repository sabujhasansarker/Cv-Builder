import React, { useReducer, useEffect, useState } from "react";
import DataContext from "./DataContext";
import DataReducer from "./DataReducar";

import { ADD_DATA, GET_DATA } from "./Type";

const DataState = (props) => {
  const initialState = {
    data: {},
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  //   action
  const getData = () => {
    dispatch({
      type: GET_DATA,
    });
  };
  return (
    <DataContext.Provider value={{ data: state.data, getData }}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataState;
