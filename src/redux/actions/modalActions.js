import { TOGGLE_MODAL_VIEW } from "../constants";

export const toggleModalView = (
  showModal,
  modalView,
  note_id = null,
  title = "",
  desc = ""
) => {
  return {
    type: TOGGLE_MODAL_VIEW,
    payload: {
      showModal,
      modalView,
      note_id,
      title,
      desc
    }
  };
};
