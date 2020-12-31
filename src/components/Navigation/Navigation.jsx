import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import Nav from './Navigation.style';

const Navigation = () => {
  return (
    <Nav>
      <div>
        <NavLink
          exact
          to={routes.home}
          className="navLink"
          activeClassName="navLink--active"
        >
          Home
        </NavLink>
        <NavLink
          to={routes.contactsPage}
          className="navLink"
          activeClassName="navLink--active"
        >
          Phonebook
        </NavLink>
      </div>
      <div>
        <NavLink
          exact
          to={routes.loginPage}
          className="navLink"
          activeClassName="navLink--active"
        >
          Login
        </NavLink>
        <NavLink
          to={routes.registerPage}
          className="navLink"
          activeClassName="navLink--active"
        >
          Sing Up
        </NavLink>
      </div>
    </Nav>
  );
};

export default Navigation;
