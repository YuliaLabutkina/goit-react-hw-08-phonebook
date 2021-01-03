import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import tasksActions from './phonebook-action';
import authActions from '../auth/auth-action';

const fetchContact = (_, { payload }) => {
  return [...payload];
};

const addContact = (state, { payload }) => {
  return [...state, payload];
};

const removeContact = (state, { payload }) => {
  return state.filter(({ id }) => id !== payload);
};

const items = createReducer([], {
  [tasksActions.fetchContactSuccess]: fetchContact,
  [tasksActions.addContactSuccess]: addContact,
  [tasksActions.removeContactSuccess]: removeContact,
  [authActions.logoutUserSuccess]: () => [],
});

const filter = createReducer('', {
  [tasksActions.filterContact.type]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [tasksActions.fetchContactRequest]: () => true,
  [tasksActions.fetchContactSuccess]: () => false,
  [tasksActions.fetchContactError]: () => false,

  [tasksActions.addContactRequest]: () => true,
  [tasksActions.addContactSuccess]: () => false,
  [tasksActions.addContactError]: () => false,

  [tasksActions.removeContactRequest]: () => true,
  [tasksActions.removeContactSuccess]: () => false,
  [tasksActions.removeContactError]: () => false,
});

const error = createReducer(false, {
  [tasksActions.fetchContactRequest]: () => '',
  [tasksActions.fetchContactSuccess]: () => '',
  [tasksActions.fetchContactError]: (_, { payload }) => payload,

  [tasksActions.addContactRequest]: () => '',
  [tasksActions.addContactSuccess]: () => '',
  [tasksActions.addContactError]: (_, { payload }) => payload,

  [tasksActions.removeContactRequest]: () => '',
  [tasksActions.removeContactSuccess]: () => '',
  [tasksActions.removeContactError]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});

export default phonebookReducer;
