import { CHANGE_VIEW } from '../constants';

const initialState = {
  text: ''
}

const view = (state = initialState, action) => {

  switch(action.type) {
    case CHANGE_VIEW:
      const {text} = action.payload;

      return {
        ...state,
        text: text
      };
    default:
      return state;
  }
};

export default view;