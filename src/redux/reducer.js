import {combineReducers} from 'redux';
import categoryData from '../data/categories.json';
import phrasesData from '../data/phrases.json';

export const validateAnswers = (text, style) => {
  return {type: 'VALIDATE_ANSWERS', text: text, style: style};
};

const initialState = {
  loading: false,
  categories: categoryData.categories,
  phrases: phrasesData.phrases,
  correctAnswer: '',
  actionText: 'Pick',
  actionStyle: '#06B6D4',
  seenPhrases: [],
  learntPhrases: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VALIDATE_ANSWERS': {
      return {
        ...state,
        actionText: action.text,
        actionStyle: action.style,
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  items: appReducer,
});
