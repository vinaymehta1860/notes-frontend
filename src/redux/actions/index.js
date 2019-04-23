import axios from "axios";
import {
  CHANGE_VIEW,
  REGISTER_SIGNIN,
  REGISTER_SIGNUP,
  REGISTER_LOGOUT,
  VERIFY_USER,
  ERROR_STATE,
  TOGGLE_LOADING,
  TOGGLE_SESSIONSTORED
} from "../constants";

export const changeView = text => {
  return {
    type: CHANGE_VIEW,
    payload: {
      text: text
    }
  };
};

export const toggleLoading = loading => {
  return {
    type: TOGGLE_LOADING,
    payload: {
      loading
    }
  };
};

export const sessionStorageUpdate = sessionStoreValue => {
  return {
    type: TOGGLE_SESSIONSTORED,
    payload: {
      sessionStoreValue
    }
  };
};

// Action to signin user
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
          firstname: resp.data.payload.firstname,
          message: resp.data.message,
          success: resp.data.success,
          sessionToken: resp.data.payload.sessionToken,
          username: resp.data.payload.username
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

// Action to signup user
export const registerSignUp = (
  firstname,
  lastname,
  username,
  email,
  password
) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/registration/signup",
    data: {
      firstname,
      lastname,
      username,
      email,
      password
    }
  })
    .then(resp => {
      dispatch({
        type: REGISTER_SIGNUP,
        payload: {
          firstname: resp.data.payload.firstname,
          message: resp.data.message,
          success: resp.data.success,
          sessionToken: resp.data.payload.sessionToken,
          username: resp.data.payload.username
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

// Action to check the localStorage values, verify and sign in user
export const verifyUser = (firstname, username, sessionToken) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/registration/verifyLoggedInUser",
    data: {
      username,
      sessionToken
    }
  })
    .then(resp => {
      dispatch({
        type: VERIFY_USER,
        payload: {
          firstname: resp.data.payload.firstname,
          success: resp.data.success,
          message: resp.data.message,
          username: resp.data.payload.username,
          sessionToken: resp.data.payload.sessionToken
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

// Action to logout user
export const logoutUser = (username, sessionToken) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/registration/logout",
    data: {
      username,
      sessionToken
    }
  })
    .then(resp => {
      dispatch({
        type: REGISTER_LOGOUT
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
