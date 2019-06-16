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
  groups: null,
  lastname: null,
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
        lastname,
        email,
        groups,
        sessionToken
      } = action.payload;
      if (success) {
        return {
          ...state,
          firstname,
          lastname,
          email,
          groups,
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
        lastname1 = action.payload.lastname,
        email1 = action.payload.email,
        groups1 = action.payload.groups,
        sessionToken1 = action.payload.sessionToken;
      if (success1) {
        return {
          ...state,
          firstname: firstname1,
          lastname: lastname1,
          email: email1,
          groups: groups1,
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
        lname = action.payload.lastname,
        sToken = action.payload.sessionToken,
        em = action.payload.email,
        gr = action.payload.groups,
        msg = action.payload.message,
        done = action.payload.success;
      if (done) {
        return {
          ...state,
          firstname: fname,
          lastname: lname,
          email: em,
          groups: gr,
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
