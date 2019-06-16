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
export const registerSignIn = (email, password) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/registration/signin",
    data: {
      email,
      password
    }
  })
    .then(resp => {
      dispatch({
        type: REGISTER_SIGNIN,
        payload: {
          success: resp.data.success,
          message: resp.data.message,
          firstname: resp.data.payload.firstname,
          lastname: resp.data.payload.lastname,
          email: resp.data.payload.email,
          groups: resp.data.payload.groups,
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

// Action to signup user
export const registerSignUp = (
  firstname,
  lastname,
  email,
  password
) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/registration/signup",
    data: {
      firstname,
      lastname,
      email,
      password
    }
  })
    .then(resp => {
      dispatch({
        type: REGISTER_SIGNUP,
        payload: {
          success: resp.data.success,
          message: resp.data.message,
          firstname: resp.data.payload.firstname,
          lastname: resp.data.payload.lastname,
          email: resp.data.payload.email,
          groups: resp.data.payload.groups,
          sessionToken: resp.data.payload.sessionToken
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
export const verifyUser = sessionToken => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/registration/verifyLoggedInUser",
    data: {
      sessionToken
    }
  })
    .then(resp => {
      dispatch({
        type: VERIFY_USER,
        payload: {
          success: resp.data.success,
          message: resp.data.message,
          firstname: resp.data.payload.firstname,
          lastname: resp.data.payload.lastname,
          email: resp.data.payload.email,
          groups: resp.data.payload.groups,
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
export const logoutUser = (email, sessionToken) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/registration/logout",
    data: {
      email,
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
