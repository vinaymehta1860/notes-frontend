import { TOGGLE_MODAL_VIEW } from "../constants";

const initialState = {
  showModal: false,
  modalView: ""
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_VIEW:
      return {
        ...state,
        modalView: action.payload.modalView,
        showModal: action.payload.showModal
      };
    default:
      return state;
  }
};

export default modal;
