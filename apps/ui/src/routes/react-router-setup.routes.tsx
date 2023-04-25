import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
