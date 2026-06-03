import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/main-layout';
import MainPage from './pages/main-page';
import Planes from './pages/plans-page';
import Resumen from './pages/summary-page';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<MainLayout />}>
        <Route
          index
          element={<MainPage />}
        />
        <Route
          path='/planes'
          element={<Planes />}
        />
        <Route
          path='/resumen'
          element={<Resumen />}
        />
      </Route>
    </Routes>
  );
}

export default App;
