import {
  CHANGE_VIEW,
  REGISTER_SIGNIN,
  REGISTER_SIGNUP,
  REGISTER_LOGOUT,
  VERIFY_USER,
  TOGGLE_LOADING,
  TOGGLE_SESSIONSTORED
} from "../constants";

const initialState = {
  sessionToken: null,
  signedIn: false,
  username: null,
  loading: true,
  sessionTokenStored: false,
  message: ""
};

const application = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      const { text } = action.payload;

      return {
        ...state,
        text: text
      };
    case REGISTER_SIGNIN:
      const { success, username, sessionToken, message } = action.payload;

      if (success) {
        return {
          ...state,
          username,
          sessionToken,
          signedIn: true
        };
      } else {
        return {
          ...state,
          message,
          signedIn: false
        };
      }
    case REGISTER_SIGNUP:
      // FIXME: Had to do odd name spacing for the variables as react-redux wasn't allowing to grab
      //  same variables out of action.payload in the same way as it's done in the above switch case.
      const success1 = action.payload.success,
        username1 = action.payload.username,
        sessionToken1 = action.payload.sessionToken,
        message1 = action.payload.message;
      if (success1) {
        return {
          ...state,
          username: username1,
          sessionToken: sessionToken1,
          signedIn: true
        };
      } else {
        return {
          ...state,
          message: message1,
          signedIn: false
        };
      }
    case VERIFY_USER:
      const uname = action.payload.username,
        sToken = action.payload.sessionToken,
        msg = action.payload.message,
        done = action.payload.success;
      if (done) {
        return {
          ...state,
          username: uname,
          sessionToken: sToken,
          signedIn: true
        };
      } else {
        return {
          ...state,
          signedIn: false,
          message: msg
        };
      }
    case REGISTER_LOGOUT:
      return {
        ...state,
        sessionToken: null,
        signedIn: false,
        username: null
      };
    case TOGGLE_LOADING:
      const { loading } = action.payload;

      return {
        ...state,
        loading
      };
    case TOGGLE_SESSIONSTORED:
      const { sessionStoreValue } = action.payload;

      return {
        ...state,
        sessionTokenStored: sessionStoreValue
      };
    default:
      return state;
  }
};

export default application;
