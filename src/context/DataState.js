import React, { useReducer } from "react";
import DataContext from "./DataContext";
import DataReducer from "./DataReducar";

import { SET_CV, GET_DATA, ADD_DATA, SET_DATA, ADD_EDU } from "./Type";

const DataState = (props) => {
  const initialState = {
    data: {},
    education: [],
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

  const addBio = (data) => {
    state.data = data;
    dispatch({
      type: ADD_DATA,
      payload: state.data,
    });
    dispatch({
      type: SET_DATA,
    });
  };

  const addEdu = (eduData) => {
    let edudata =
      localStorage.getItem("cv") && JSON.parse(localStorage.getItem("cv"));
    state.education = edudata.education ? edudata.education : [];

    state.education = [eduData, ...state.education];
    state.data = { ...state.data, education: state.education };
    dispatch({
      type: ADD_DATA,
      payload: state.data,
    });
    dispatch({
      type: SET_DATA,
    });
    dispatch({
      type: GET_DATA,
    });
  };
  return (
    <DataContext.Provider
      value={{
        data: state.data,
        cv: state.cv,
        getData,
        setCv,
        addBio,
        addEdu,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataState;
