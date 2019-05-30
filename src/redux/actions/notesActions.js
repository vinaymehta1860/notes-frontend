import axios from "axios";
import {
  GET_ALL_NOTES,
  CREATE_NEW_NOTE,
  EDIT_NOTE,
  SHARE_NOTE,
  UNSHARE_NOTE,
  DELETE_NOTE,
  ERROR_STATE
} from "../constants";

export const getAllNotes = (email, sessionToken) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/notes/allnotes",
    data: {
      email,
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

export const createNewNote = (email, sessionToken, note) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/notes/newnote",
    data: {
      email,
      sessionToken,
      note
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

export const editNote = (email, sessionToken, noteObject) => dispatch => {
  const { note_id, title, desc } = noteObject;

  return axios({
    method: "post",
    url: "http://localhost:4000/notes/edit",
    data: {
      email,
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

export const deleteNote = (email, sessionToken, note_id) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/notes/delete",
    data: {
      email,
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

export const shareNote = (
  email,
  sessionToken,
  note_id,
  emails,
  canEdit = false
) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/notes/share",
    data: {
      email,
      sessionToken,
      note_id,
      emails,
      canEdit
    }
  })
    .then(resp => {
      dispatch({
        type: SHARE_NOTE,
        payload: {
          success: resp.data.success,
          message: resp.data.message,
          note_id: resp.data.payload.note_id,
          sharedWith: resp.data.payload.sharedWith,
          noteShared: true
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

export const unshareNote = (email, sessionToken, note_id) => dispatch => {
  return axios({
    method: "post",
    url: "http://localhost:4000/notes/unshare",
    data: {
      email,
      sessionToken,
      note_id
    }
  })
    .then(resp => {
      dispatch({
        type: UNSHARE_NOTE,
        payload: {
          success: resp.data.success,
          message: resp.data.message,
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
