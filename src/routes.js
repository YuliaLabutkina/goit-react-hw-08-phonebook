import { lazy } from 'react';

export const lazyRoutes = [
  {
    path: '/',
    label: 'home',
    exact: true,
    component: lazy(() =>
      import('./pages/HomePage' /* webpackChunkName: "home" */),
    ),
  },

  {
    path: '/contacts',
    label: 'contactsPage',
    exact: false,
    component: lazy(() =>
      import('./pages/ContactsPage' /* webpackChunkName: "ContactsPage" */),
    ),
  },

  {
    path: '/login',
    label: 'loginPage',
    exact: false,
    component: lazy(() =>
      import('./pages/LoginPage' /* webpackChunkName: "LoginPage" */),
    ),
  },

  {
    path: '/register',
    label: 'registerPage',
    exact: false,
    component: lazy(() =>
      import('./pages/RegisterPage' /* webpackChunkName: "RegisterPage" */),
    ),
  },
];

export default {
  home: '/',
  contactsPage: '/contacts',
  loginPage: '/login',
  registerPage: '/register',
};
