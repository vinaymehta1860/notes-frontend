import { TOGGLE_MODAL_VIEW } from "../constants";

export const toggleModalView = (showModal, modalView) => {
  return {
    type: TOGGLE_MODAL_VIEW,
    payload: {
      modalView,
      showModal
    }
  };
};
