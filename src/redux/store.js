// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import phonebookReducer from './phonebook/phonebook-reducer';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const store = configureStore({
//   reducer: {
//     contacts: phonebookReducer,
//   },
//   devTools: process.env.NODE_ENV === 'development',
//   middleware,
// });

// export { store };

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import phonebookReducer from './phonebook/phonebook-reducer';

const rootReducer = combineReducers({
  contacts: phonebookReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
