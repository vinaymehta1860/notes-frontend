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
  email: null,
  firstname: null,
  sessionToken: null,
  signedIn: false,
  loading: true,
  sessionTokenStored: false,
  message: ""
};

const registration = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      const { text } = action.payload;

      return {
        ...state,
        text: text
      };
    case REGISTER_SIGNIN:
      const {
        success,
        message,
        firstname,
        email,
        sessionToken
      } = action.payload;
      if (success) {
        return {
          ...state,
          firstname,
          email,
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
        message1 = action.payload.message,
        firstname1 = action.payload.firstname,
        email1 = action.payload.email,
        sessionToken1 = action.payload.sessionToken;
      if (success1) {
        return {
          ...state,
          firstname: firstname1,
          email: email1,
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
      const fname = action.payload.firstname,
        sToken = action.payload.sessionToken,
        em = action.payload.email,
        msg = action.payload.message,
        done = action.payload.success;
      if (done) {
        return {
          ...state,
          firstname: fname,
          email: em,
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
        firstname: null,
        email: null,
        sessionToken: null,
        signedIn: false
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

export default registration;
