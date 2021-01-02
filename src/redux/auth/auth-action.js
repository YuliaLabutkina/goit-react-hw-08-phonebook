import { createAction } from '@reduxjs/toolkit';

const registrationUserRequest = createAction('auth/registrationUserRequest');
const registrationUserSuccess = createAction('auth/registrationUserSuccess');
const registrationUserError = createAction('auth/registrationUserError');

const authorizationUserRequest = createAction('auth/authorizationUserRequest');
const authorizationUserSuccess = createAction('auth/authorizationUserSuccess');
const authorizationUserError = createAction('auth/authorizationUserError');

export default {
  registrationUserRequest,
  registrationUserSuccess,
  registrationUserError,
  authorizationUserRequest,
  authorizationUserSuccess,
  authorizationUserError,
};
