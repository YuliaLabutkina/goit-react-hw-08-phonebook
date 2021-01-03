import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { name, loading } from '../../redux/auth/auth-selectors';
import { logoutUser } from '../../redux/auth/auth-operations';
import PreLoader from '../PreLoader';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(name);
  const loadingAuth = useSelector(loading);

  const logout = useCallback(() => dispatch(logoutUser()), [dispatch]);

  return (
    <>
      <div>Welcome {userName}!</div>
      {loadingAuth ? <PreLoader /> : <button onClick={logout}>Go out</button>}
    </>
  );
};

export default UserMenu;
