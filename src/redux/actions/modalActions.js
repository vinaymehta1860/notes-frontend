import { TOGGLE_MODAL_VIEW } from "../constants";

export const toggleModalView = (showModal, modalView, note_id = null) => {
  return {
    type: TOGGLE_MODAL_VIEW,
    payload: {
      modalView,
      note_id,
      showModal
    }
  };
};
