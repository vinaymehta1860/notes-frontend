import {
  GET_ALL_NOTES,
  CREATE_NEW_NOTE,
  EDIT_NOTE,
  SHARE_NOTE,
  DELETE_NOTE
} from "../constants";

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
    case EDIT_NOTE:
      const success2 = action.payload.success;
      const { editedNote } = action.payload;
      let updatedNotes = [];

      if (success2) {
        // Go through the ownerNotes array, find the note that is edited and replace it's
        //  contents (title & desc).
        updatedNotes = state.ownerNotes.map(note => {
          if (note.note_id === editedNote.note_id) {
            return { ...note, title: editedNote.title, desc: editedNote.desc };
          }

          return note;
        });

        return { ...state, ownerNotes: updatedNotes };
      } else {
        return {
          ...state
        };
      }
    case DELETE_NOTE:
      const success3 = action.payload.success;
      const noteIdToDelete = action.payload.note_id;
      let updatedOwnerNotes = state.ownerNotes;

      if (success3) {
        // Find the index of the note that you want to delete
        const noteToDelete = updatedOwnerNotes.findIndex(note => {
          if (note.note_id === noteIdToDelete) {
            return true;
          }
        });

        updatedOwnerNotes.splice(noteToDelete, 1);

        return {
          ...state,
          ownerNotes: [...updatedOwnerNotes]
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
