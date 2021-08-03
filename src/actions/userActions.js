import Axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";

const login = (username, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST, payload: { username, password } });
  try {
    const { data } = await Axios.post("/api/users/login", {
      username,
      password,
    });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.username });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

const register = (username, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { username, password } });
  try {
    const { data } = await Axios.post("/api/users/register", {
      username,
      password,
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/login";
};
export { login, logout, register };
