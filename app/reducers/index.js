import { combineReducers } from 'redux';
import { routerReducer  } from 'react-router-redux';
import demo from './demo';
import locales from './locales';

const rootReducer = combineReducers({
  demo,
  locales,
  routing: routerReducer
});

export default rootReducer;