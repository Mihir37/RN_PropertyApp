import {combineReducers} from 'redux';
import propertyReducer from './propertyReducer';
// import propertyReducer from './propertyReducer';

const rootReducer = combineReducers({
  properties: propertyReducer,
});

export default rootReducer;
