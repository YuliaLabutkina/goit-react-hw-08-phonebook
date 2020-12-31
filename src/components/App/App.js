import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppBar from '../AppBar';
import PreLoader from '../PreLoader';
import routes from '../../routes';
import { lazyRoutes } from '../../routes';

const App = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<PreLoader />}>
          <Switch>
            {lazyRoutes.map(route => (
              <Route key={route.label} {...route} />
            ))}
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </main>
    </>
  );
};

export default App;
