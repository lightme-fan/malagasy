import {combineReducers} from 'redux';

const initialState = {
  data: null,
  loading: false,
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
