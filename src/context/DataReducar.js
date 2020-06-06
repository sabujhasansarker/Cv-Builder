import { GET_DATA, SET_CV } from "./Type";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data: JSON.parse(localStorage.getItem("cv")),
      };
    case SET_CV:
      return {
        ...state,
        cv: payload,
      };
    default:
      return state;
  }
};
