import axios from "axios";
import { GET_ALL_NOTES, ERROR_STATE, CREATE_NEW_NOTE } from "../constants";

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
