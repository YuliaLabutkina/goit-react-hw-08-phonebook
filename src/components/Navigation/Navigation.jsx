import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isAuthenticated } from '../../redux/auth/auth-selectors';
import routes from '../../routes';
import Nav from './Navigation.style';
import UserMenu from '../UserMenu';

const Navigation = () => {
  const isAuthenticatedUser = useSelector(isAuthenticated);

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

        {isAuthenticatedUser && (
          <NavLink
            to={routes.contactsPage}
            className="navLink"
            activeClassName="navLink--active"
          >
            Phonebook
          </NavLink>
        )}
      </div>

      {isAuthenticatedUser ? (
        <UserMenu />
      ) : (
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
      )}
    </Nav>
  );
};

export default Navigation;
