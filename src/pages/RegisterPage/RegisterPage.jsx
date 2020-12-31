import { useState } from 'react';

const RegisterPage = () => {
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

    console.log(newContact);
    reset();
  };

  const reset = () => {
    setEmail('');
    setName('');
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

      <button type="submit">Sing Up</button>
    </form>
  );
};

export default RegisterPage;
