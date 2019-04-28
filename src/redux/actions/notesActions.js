import axios from "axios";
import {
  GET_ALL_NOTES,
  CREATE_NEW_NOTE,
  EDIT_NOTE,
  SHARE_NOTE,
  DELETE_NOTE,
  ERROR_STATE
} from "../constants";

export const getAllNotes = (username, sessionToken) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/notes/allnotes",
    data: {
      username,
      sessionToken
    }
  })
    .then(resp => {
      dispatch({
        type: GET_ALL_NOTES,
        payload: {
          success: resp.data.success,
          message: resp.data.message,
          notes: resp.data.payload.notes
        }
      });
    })
    .catch(error => {
      dispatch({
        type: ERROR_STATE,
        payload: {
          error
        }
      });
    });
};

export const createNewNote = (
  username,
  sessionToken,
  noteObject
) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/notes/newnote",
    data: {
      username,
      sessionToken,
      note: {
        title: noteObject.title,
        desc: noteObject.desc
      }
    }
  })
    .then(resp => {
      dispatch({
        type: CREATE_NEW_NOTE,
        payload: {
          success: resp.data.success,
          message: resp.data.message,
          noteAdded: resp.data.payload.note
        }
      });
    })
    .catch(error => {
      dispatch({
        type: ERROR_STATE,
        payload: {
          error
        }
      });
    });
};

export const editNote = (username, sessionToken, noteObject) => dispatch => {
  const { note_id, title, desc } = noteObject;

  return axios({
    method: "post",
    url: "http://localhost:4000/notes/edit",
    data: {
      username,
      sessionToken,
      note_id,
      title,
      desc
    }
  })
    .then(resp => {
      dispatch({
        type: EDIT_NOTE,
        payload: {
          success: resp.data.success,
          editedNote: resp.data.payload.note
        }
      });
    })
    .catch(error => {
      dispatch({
        type: ERROR_STATE,
        payload: {
          error
        }
      });
    });
};

export const deleteNote = (username, sessionToken, note_id) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/notes/delete",
    data: {
      username,
      sessionToken,
      note_id
    }
  })
    .then(resp => {
      dispatch({
        type: DELETE_NOTE,
        payload: {
          success: resp.data.success,
          note_id: resp.data.payload.note_id
        }
      });
    })
    .catch(error => {
      dispatch({
        type: ERROR_STATE,
        payload: {
          error
        }
      });
    });
};
