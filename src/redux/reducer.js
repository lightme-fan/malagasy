import React, {useReducer} from 'react';
import {createContext} from 'react';
import {combineReducers} from 'redux';
import categoryData from '../data/categories.json';
import phrasesData from '../data/phrases.json';

const Context = createContext();

const initialState = {
  categories: categoryData.categories,
  phrases: phrasesData.phrases,
  buttonText: 'Pick',
  buttonColor: '#06B6D4',
  category: '',
  quiz: [],
  correctAnswer: {},
  wrongAnswers: [],
  isPhraseCorrect: false,
  isPhraseWrong: false,
  pressed: false,
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
    case 'CORRECT_PHRASE': {
      return {
        ...state,
        correctAnswer: action.payload,
      };
    }
    case 'WRONG_PHRASES': {
      return {
        ...state,
        wrongAnswer: action.payload,
      };
    }
    case 'BUTTON_ONPRESS': {
      return {
        ...state,
        pressed: true,
      };
    }
    case 'HANDLE_NEXT_BUTTON': {
      return {
        ...state,
        newQuiz: action.payload,
      };
    }
    default:
      return state;
  }
};

const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </Context.Provider>
  );
};

export {ContextProvider, Context};
