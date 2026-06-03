import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar/navbar';

function MainLayout() {
  return (
    <div className='text-foreground'>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
