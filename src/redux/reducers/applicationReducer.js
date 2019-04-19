import { CHANGE_VIEW, REGISTER_SIGNIN, REGISTER_SIGNUP } from "../constants";

const initialState = {
  sessionToken: null,
  signedIn: false,
  username: null
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
    default:
      return state;
  }
};

export default application;
