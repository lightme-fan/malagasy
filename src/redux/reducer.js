import {combineReducers} from 'redux';
import categoryData from '../data/categories.json';
import phrasesData from '../data/phrases.json';

export const setAnswers = phrases => {
  return {type: 'SET_ANSWERS', payload: phrases};
};

export const validateAnswers = phrase => {
  return {type: 'VALIDATE_ANSWERS', payload: phrase};
};

export const pressedButton = () => {
  return {
    type: 'BUTTON_ONPRESS',
  };
};

const initialState = {
  loading: false,
  categories: categoryData.categories,
  phrases: phrasesData.phrases,
  correctPhrase: {},
  actionText: 'Pick',
  actionStyle: '#06B6D4',
  answers: [],
  pressed: true,
  seenPhrases: [],
  learntPhrases: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ANSWERS': {
      return {
        ...state,
        answers: action.payload,
      };
    }
    case 'VALIDATE_ANSWERS': {
      return {
        ...state,
        correctPhrase: action.payload,
      };
    }
    case 'BUTTON_ONPRESS': {
      return {
        ...state,
        pressed: false,
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  items: appReducer,
});
