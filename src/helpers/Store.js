import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reduxhelper/rootReducer';
// import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
