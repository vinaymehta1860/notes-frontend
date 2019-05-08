import { combineReducers } from "redux";

// Reducers
import modalReducer from "./modalReducer";
import notesReducer from "./notesReducer";
import registrationReducer from "./registrationReducer";

export default combineReducers({
  modal: modalReducer,
  notes: notesReducer,
  registration: registrationReducer
});
