import { CHANGE_VIEW } from '../constants';

export const changeView = (text) => {
  return {
    type: CHANGE_VIEW,
    payload: {
      text: text
    }
  }
}