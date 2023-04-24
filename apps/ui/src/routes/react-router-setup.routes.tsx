import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './lazy-config/home-rotue-lazy-config.route';
import routesConfig from './config/routes.config';

const ReactRouterSetup = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routesConfig.Home.path}
          Component={routesConfig.Home.component}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouterSetup;
