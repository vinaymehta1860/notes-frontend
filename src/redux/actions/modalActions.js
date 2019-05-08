import {
  TOGGLE_MODAL_VIEW,
  ADD_RECIPIENT,
  CLEAR_RECIPIENTS
} from "../constants";

export const toggleModalView = (config, data) => {
  return {
    type: TOGGLE_MODAL_VIEW,
    payload: {
      config,
      data
    }
  };
};

// Add a recipient to the list
export const addRecipient = recipient => {
  if (!Array.isArray(recipient)) {
    recipient = [recipient];
  }
  return {
    type: ADD_RECIPIENT,
    payload: {
      recipient
    }
  };
};

// Clear recipients list
export const clearRecipients = () => {
  return {
    type: CLEAR_RECIPIENTS
  };
};
