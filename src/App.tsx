import { Route, Routes } from 'react-router-dom';
import './index.css';
import { AppRoutes } from './pages/RoutesConfig';

function App() {
  const routes = AppRoutes.map((route, index) => (
    <Route
      path={route.path}
      element={<route.element />}
      key={`${route.path}-${index}`}
    />
  ));

  return <Routes>{routes}</Routes>;
}

export default App;
