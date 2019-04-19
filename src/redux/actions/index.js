import axios from "axios";
import {
  CHANGE_VIEW,
  REGISTER_SIGNIN,
  REGISTER_SIGNUP,
  ERROR_STATE
} from "../constants";

export const changeView = text => {
  return {
    type: CHANGE_VIEW,
    payload: {
      text: text
    }
  };
};

export const registerSignIn = (username, password) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/registration/signin",
    data: {
      username,
      password
    }
  })
    .then(resp => {
      dispatch({
        type: REGISTER_SIGNIN,
        payload: {
          success: resp.data.success,
          username: resp.data.payload.username,
          sessionToken: resp.data.payload.sessionToken,
          message: resp.data.message
        }
      });
    })
    .catch(error => {
      dispatch({
        type: ERROR_STATE,
        payload: {
          error
        }
      });
    });
};

export const registerSignUp = (username, email, password) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/registration/signup",
    data: {
      username,
      email,
      password
    }
  })
    .then(resp => {
      dispatch({
        type: REGISTER_SIGNUP,
        payload: {
          success: resp.data.success,
          username: resp.data.payload.username,
          sessionToken: resp.data.payload.sessionToken,
          message: resp.data.message
        }
      });
    })
    .catch(error => {
      dispatch({
        type: ERROR_STATE,
        payload: {
          error: error
        }
      });
    });
};
