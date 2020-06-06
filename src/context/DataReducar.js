import { ADD_DATA, GET_DATA } from "./Type";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data: JSON.parse(localStorage.getItem("cv")),
      };
    default:
      return state;
  }
};
