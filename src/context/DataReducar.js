import { GET_DATA, SET_CV, ADD_DATA, SET_DATA, ADD_EDU } from "./Type";

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
    case ADD_DATA:
      return {
        ...state,
        data: payload,
      };
    case ADD_EDU:
      return {
        ...state,
        data: payload,
      };
    case SET_DATA:
      localStorage.setItem("cv", JSON.stringify(state.data));
    default:
      return state;
  }
};
