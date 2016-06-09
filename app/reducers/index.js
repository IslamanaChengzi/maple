import { combineReducers } from 'redux';
import { routerReducer  } from 'react-router-redux';
import maple from './maple';
import locales from './locales';

const rootReducer = combineReducers({
  maple,
  locales,
  routing: routerReducer
});

export default rootReducer;