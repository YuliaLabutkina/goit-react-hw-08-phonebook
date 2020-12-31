import { createAction } from '@reduxjs/toolkit';

const filterContact = createAction('contact/Filter');

const fetchContactRequest = createAction('contact/fetchRequest');
const fetchContactSuccess = createAction('contact/fetchSuccess');
const fetchContactError = createAction('contact/fetchError');

const addContactRequest = createAction('contact/addRequest');
const addContactSuccess = createAction('contact/addSuccess');
const addContactError = createAction('contact/addError');

const removeContactRequest = createAction('contact/removeRequest');
const removeContactSuccess = createAction('contact/removeSuccess');
const removeContactError = createAction('contact/removeError');

export default {
  filterContact,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
};
