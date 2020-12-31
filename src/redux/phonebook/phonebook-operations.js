import axios from 'axios';
import tasksActions from './phonebook-action';

axios.defaults.baseURL = 'http://localhost:2000/';

const fetchUserContact = () => dispatch => {
  dispatch(tasksActions.fetchContactRequest());

  axios
    .get('contacts')
    .then(({ data }) => dispatch(tasksActions.fetchContactSuccess(data)))
    .catch(error => dispatch(tasksActions.fetchContactError(error.message)));
};

const addUserContact = ({ name, number }) => dispatch => {
  dispatch(tasksActions.addContactRequest());

  axios
    .post('contacts', { name, number })
    .then(({ data }) => dispatch(tasksActions.addContactSuccess(data)))
    .catch(error => dispatch(tasksActions.addContactError(error.message)));
};

const removeUserContact = id => dispatch => {
  dispatch(tasksActions.removeContactRequest(id));

  axios
    .delete(`contacts/${id}`)
    .then(() => dispatch(tasksActions.removeContactSuccess(id)))
    .catch(error => dispatch(tasksActions.removeContactError(error.message)));
};

export { fetchUserContact, addUserContact, removeUserContact };
