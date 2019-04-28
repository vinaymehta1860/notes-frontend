import { TOGGLE_MODAL_VIEW } from "../constants";

const initialState = {
  showModal: false,
  modalView: "",
  title: "",
  desc: "",
  note_id: null
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_VIEW:
      const { modalView, showModal, note_id, title, desc } = action.payload;
      return {
        ...state,
        modalView,
        showModal,
        note_id,
        title,
        desc
      };
    default:
      return state;
  }
};

export default modal;
