import {
  TOGGLE_MODAL_VIEW,
  ADD_RECIPIENT,
  CLEAR_RECIPIENTS
} from "../constants";

const initialState = {
  config: {
    showModal: false,
    modalView: "",
    viewSize: "big"
  },
  data: {
    title: "",
    desc: "",
    note_id: "",
    sharedWith: []
  },
  recipients: []
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_VIEW:
      const { config, data } = action.payload;
      return {
        ...state,
        config,
        data
      };
    case ADD_RECIPIENT:
      const { recipient } = action.payload;
      let newRecipients = state.recipients;
      newRecipients.push(recipient);
      return {
        ...state,
        recipients: [...newRecipients]
      };
    case CLEAR_RECIPIENTS:
      return {
        ...state,
        recipients: []
      };
    default:
      return state;
  }
};

export default modal;
