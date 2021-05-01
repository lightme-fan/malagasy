import {combineReducers} from 'redux';
import categoryData from '../data/categories.json';
import phrasesData from '../data/phrases.json';

export const validateAnswers = text => {
  return {type: 'VALIDATE_ANSWERS', payload: text};
};

const initialState = {
  loading: false,
  categories: categoryData.categories,
  phrases: phrasesData.phrases,
  phraseQuestions: '',
  answers: [],
  isCorrect: false,
  isButtonOnPress: false,
  correctAnswer: '',
  seenPhrases: [],
  learntPhrases: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VALIDATE_ANSWERS': {
      return state;
    }
    default:
      return state;
  }
};

export default combineReducers({
  items: appReducer,
});
