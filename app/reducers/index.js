import { combineReducers } from 'redux';
import { routerReducer  } from 'react-router-redux';
import demo from './demo'

const rootReducer = combineReducers({
  demo,
  routing: routerReducer
});

export default rootReducer;