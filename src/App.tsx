import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/main-layout';
import MainPage from './pages/main-page';
import PlansPage from './pages/plans-page';
import SummaryPage from './pages/summary-page';

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
          element={<PlansPage />}
        />
        <Route
          path='/resumen'
          element={<SummaryPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
