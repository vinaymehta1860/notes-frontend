import {
  GET_ALL_NOTES,
  CREATE_NEW_NOTE,
  EDIT_NOTE,
  SHARE_NOTE,
  UNSHARE_NOTE,
  DELETE_NOTE
} from "../constants";

const initialState = {
  ownerNotes: new Map(),
  sharedNotes: new Map(),
  flags: {
    noteShared: false,
    noteUnshared: false
  }
};

const notes = (state = initialState, action) => {
  let success;

  if (action.payload !== undefined) {
    success = action.payload.success;
  }

  switch (action.type) {
    case GET_ALL_NOTES:
      const { notes } = action.payload;
      let ownerNotes = new Map(),
        sharedNotes = new Map();

      /*  Loop over the notes object which contains owner notes and notes shared with him.
          Owner and shared notes are array so loop over them and initialise the map objects.
      */
      for (let noteType in notes) {
        if (noteType.toString() === "owner") {
          notes[noteType].forEach(note => {
            ownerNotes.set(note.note_id, note);
          });
        } else {
          notes[noteType].forEach(note => {
            sharedNotes.set(note.note_id, note);
          });
        }
      }

      if (success) {
        return {
          ...state,
          ownerNotes,
          sharedNotes
        };
      } else {
        return {
          ...state
        };
      }
    case CREATE_NEW_NOTE:
      if (success) {
        const { noteAdded } = action.payload;
        let newOwnerNotes = new Map(state.ownerNotes);

        newOwnerNotes.set(noteAdded.note_id, noteAdded);

        return {
          ...state,
          ownerNotes: newOwnerNotes
        };
      } else {
        return {
          ...state
        };
      }
    case EDIT_NOTE:
      if (success) {
        const { editedNote } = action.payload;
        let latestOwnerNotes = new Map(state.ownerNotes);

        let updatedNote = latestOwnerNotes.get(editedNote.note_id);
        updatedNote.desc = editedNote.desc;
        updatedNote.title = editedNote.title;

        latestOwnerNotes.set(updatedNote.note_id, updatedNote);

        return {
          ...state,
          ownerNotes: latestOwnerNotes
        };
      } else {
        return {
          ...state
        };
      }
    case DELETE_NOTE:
      if (success) {
        const noteIdToDelete = action.payload.note_id;
        let updatedOwnerNotes = new Map(state.myNotes);
        updatedOwnerNotes.delete(noteIdToDelete);

        return {
          ...state,
          myNotes: updatedOwnerNotes
        };
      } else {
        return {
          ...state
        };
      }
    case SHARE_NOTE:
      if (success) {
        let newSharedNotes = new Map(state.ownerNotes);

        let updatedSharedNote = newSharedNotes.get(action.payload.note_id);
        updatedSharedNote.sharedWith.push(action.payload.sharedWith);

        newSharedNotes.set(action.payload.note_id, updatedSharedNote);

        return {
          ...state,
          flags: {
            noteShared: action.payload.noteShared
          },
          ownerNotes: newSharedNotes
        };
      } else {
        return {
          ...state
        };
      }
    case UNSHARE_NOTE:
      if (success) {
        let newPrivateNotes = new Map(state.ownerNotes);

        let updatedPrivateNote = newPrivateNotes.get(action.payload.note_id);
        updatedPrivateNote.sharedWith = [];

        newPrivateNotes.set(action.payload.note_id, updatedPrivateNote);

        return {
          ...state,
          ownerNotes: newPrivateNotes,
          flags: {
            noteUnshared: true
          }
        };
      }
    default:
      return state;
  }
};

export default notes;
