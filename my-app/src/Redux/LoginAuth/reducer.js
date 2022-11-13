import { loadData, saveData } from "../../utils/localStorage";
import {
  LOGIN_FAILURE,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGOUT_PAGE,
} from "./actiontype";

const initstate = loadData("data") || {
  isAuth: false,
  isloading: false,
  isError: false,
  email: "",
  username: "",
};
export const LoginReducer = (state = initstate, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQ:
      return {
        ...state,
        isloading: true,
      };
    case LOGIN_SUCCESS: {
      const datalocal = {
        ...state,
        isloading: false,
        isAuth: true,
        email: payload.email,
        username: payload.email,
      };
      console.log(datalocal,"scscsc")

      saveData("data", datalocal);
      return datalocal;
    }
    case LOGIN_FAILURE:
      return {
        ...state,
        isloading: false,
        isError: true,
      };
    case LOGOUT_PAGE:
      saveData("auth", false);
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
