import React, { useReducer } from "react";
import DataContext from "./DataContext";
import DataReducer from "./DataReducar";

import { SET_CV, GET_DATA, ADD_DATA, SET_DATA, ADD_EDU } from "./Type";

const DataState = (props) => {
  const initialState = {
    data: {},
    education: [],
    experience: [],
    certificates: [],
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

  // edu
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

  const deleteEdu = (id) => {
    let edudata =
      localStorage.getItem("cv") && JSON.parse(localStorage.getItem("cv"));
    state.education = edudata.education ? edudata.education : [];

    state.education = state.education.filter((edu) => edu.id !== id);
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
  // exp
  const addExp = (expData) => {
    let expdata =
      localStorage.getItem("cv") && JSON.parse(localStorage.getItem("cv"));
    state.experience = expdata.experience ? expdata.experience : [];

    state.experience = [expData, ...state.experience];
    state.data = { ...state.data, experience: state.experience };
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

  const deleteExp = (id) => {
    let expData =
      localStorage.getItem("cv") && JSON.parse(localStorage.getItem("cv"));
    state.experience = expData.experience ? expData.experience : [];

    state.experience = state.experience.filter((edu) => edu.id !== id);
    state.data = { ...state.data, experience: state.experience };
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

  // certificates
  const addCertificates = (certificatesData) => {
    let expdata =
      localStorage.getItem("cv") && JSON.parse(localStorage.getItem("cv"));
    state.certificates = expdata.certificates ? expdata.certificates : [];

    state.certificates = [certificatesData, ...state.certificates];
    state.data = { ...state.data, certificates: state.certificates };
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

  const deleteCertificates = (id) => {
    let expData =
      localStorage.getItem("cv") && JSON.parse(localStorage.getItem("cv"));
    state.certificates = expData.certificates ? expData.certificates : [];

    state.certificates = state.certificates.filter((edu) => edu.id !== id);
    state.data = { ...state.data, certificates: state.certificates };
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
        deleteEdu,
        addExp,
        deleteExp,
        addCertificates,
        deleteCertificates,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataState;
