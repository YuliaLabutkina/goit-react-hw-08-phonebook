import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'email':
        setEmail(value);
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
    const newContact = { email, password };

    console.log(newContact);
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
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

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
