import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-action';

const token = createReducer('', {
  [authActions.registrationUserSuccess]: (_, { payload }) => payload,
  [authActions.authorizationUserSuccess]: (_, { payload }) => payload,
  //   [authActions.removeContactSuccess]: removeContact,
});

const loading = createReducer(false, {
  [authActions.registrationUserRequest]: () => true,
  [authActions.registrationUserSuccess]: () => false,
  [authActions.registrationUserError]: () => false,

  [authActions.authorizationUserRequest]: () => true,
  [authActions.authorizationUserSuccess]: () => false,
  [authActions.authorizationUserError]: () => false,
});

const error = createReducer(false, {
  [authActions.registrationUserRequest]: () => '',
  [authActions.registrationUserSuccess]: () => '',
  [authActions.registrationUserError]: (_, { payload }) => payload,

  [authActions.authorizationUserRequest]: () => '',
  [authActions.authorizationUserSuccess]: () => '',
  [authActions.authorizationUserError]: (_, { payload }) => payload,
});

const authUsersReducer = combineReducers({
  token,
  loading,
  error,
});

export default authUsersReducer;
