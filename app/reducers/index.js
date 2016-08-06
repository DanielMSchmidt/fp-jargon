import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import quiz from './quiz';

const rootReducer = combineReducers({
  quiz,
  routing
});

export default rootReducer;
