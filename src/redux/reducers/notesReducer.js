import { GET_ALL_NOTES, CREATE_NEW_NOTE } from "../constants";

const initialState = {
  ownerNotes: [],
  sharedNotes: []
};

const notes = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTES:
      const { success, notes } = action.payload;
      if (success) {
        return {
          ...state,
          ownerNotes: notes.owner,
          sharedNotes: notes.shared
        };
      } else {
        return {
          ...state
        };
      }
    case CREATE_NEW_NOTE:
      const success1 = action.payload.success;
      let note = [];

      // Converting the note that is recently added to an array and then updating the state object
      if (!Array.isArray(action.payload.noteAdded)) {
        note = [action.payload.noteAdded];
      }

      if (success1) {
        return {
          ...state,
          ownerNotes: [...state.ownerNotes, ...note]
        };
      } else {
        return {
          ...state
        };
      }
    default:
      return state;
  }
};

export default notes;
