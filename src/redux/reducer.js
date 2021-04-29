import {combineReducers} from 'redux';
import categoryData from '../data/categories.json';
import phrasesData from '../data/phrases.json';

const initialState = {
  loading: false,
  categories: categoryData.categories,
  phrases: phrasesData.phrases,
  seenPhrases: [],
  learntPhrases: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  items: appReducer,
});
