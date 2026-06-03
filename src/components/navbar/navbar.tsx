import { PhoneIcon } from '@heroicons/react/24/solid';
import { Logo } from '../Icons';

export const Navbar = () => {
  return (
    <nav className='w-full  bg-white px-5'>
      <div className='w-full max-w-6xl flex items-center justify-between py-5 mx-auto'>
        <a href='/'>
          <Logo />
        </a>
        <div className='flex items-center space-x-4'>
          <p className='font-semibold text-xs tracking-[0.2px] hidden md:block'>
            ¡Compra por este medio!
          </p>
          <a
            href='tel:014116001'
            className='flex items-center justify-center gap-2 font-bold text-lg leading-5 tracking-[0.4px]'>
            <PhoneIcon className='size-5' />
            (01) 411 6001
          </a>
        </div>
      </div>
    </nav>
  );
};
