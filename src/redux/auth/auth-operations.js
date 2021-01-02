import axios from 'axios';
import authActions from './auth-action';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const registrationUser = ({ name, email, password }) => dispatch => {
  dispatch(authActions.registrationUserRequest());

  axios
    .post('/users/signup', { name, email, password })
    .then(({ data }) => {
      console.log(data.token);
      dispatch(authActions.registrationUserSuccess(data.token));
    })
    .catch(error => dispatch(authActions.registrationUserError(error.message)));
};

const authorizationUser = ({ email, password }) => dispatch => {
  dispatch(authActions.authorizationUserRequest());

  axios
    .post('/users/login', { email, password })
    .then(({ data }) => {
      console.log(data.token);
      dispatch(authActions.authorizationUserSuccess(data.token));
    })
    .catch(error =>
      dispatch(authActions.authorizationUserError(error.message)),
    );
};

export { registrationUser, authorizationUser };
