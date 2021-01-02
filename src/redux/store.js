import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import phonebookReducer from './phonebook/phonebook-reducer';
import authUsersReducer from './auth/auth-reducer';

const rootReducer = combineReducers({
  contacts: phonebookReducer,
  auth: authUsersReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
