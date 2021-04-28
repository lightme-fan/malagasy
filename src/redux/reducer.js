import {combineReducers} from 'redux';
import data from '../data/categories.json';

const initialState = {
  loading: false,
  categories: null,
  phrase: null,
  seenPhrases: null,
  learntPhrases: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_CATEGORIES': {
      return state;
    }
    default:
      return state;
  }
};

export default combineReducers({
  items: appReducer,
});
