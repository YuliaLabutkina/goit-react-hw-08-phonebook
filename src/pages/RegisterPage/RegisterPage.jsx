import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { registrationUser } from '../../redux/auth/auth-operations';
import { loading, error } from '../../redux/auth/auth-selectors';
import PreLoader from '../../components/PreLoader';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const loadingAuth = useSelector(loading);
  const errorAuth = useSelector(error);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { email, name, password };
    dispatch(registrationUser(newContact));
    reset();
  };

  const reset = () => {
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <>
      {errorAuth && <div>Invalid email or password! Try again!</div>}
      <form onSubmit={handleSubmit}>
        <label>
          E-mail
          <input
            onChange={handleChange}
            type="email"
            name={'email'}
            placeholder="Enter e-mail"
            value={email}
            required
          />
        </label>
        <label>
          Name
          <input
            onChange={handleChange}
            type="text"
            name={'name'}
            placeholder="Enter name"
            value={name}
            required
          />
        </label>
        <label>
          Password
          <input
            onChange={handleChange}
            type="current-password"
            name={'password'}
            placeholder="Enter password"
            value={password}
            required
          />
        </label>

        {loadingAuth ? <PreLoader /> : <button type="submit">Sing Up</button>}
      </form>
    </>
  );
};

export default RegisterPage;
