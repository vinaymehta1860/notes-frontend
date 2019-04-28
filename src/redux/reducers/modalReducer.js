import { TOGGLE_MODAL_VIEW } from "../constants";

const initialState = {
  showModal: false,
  modalView: "",
  note_id: null
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_VIEW:
      const { modalView, note_id, showModal } = action.payload;
      return {
        ...state,
        modalView,
        showModal,
        note_id
      };
    default:
      return state;
  }
};

export default modal;
