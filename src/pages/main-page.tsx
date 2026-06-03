import { QuoteForm } from '../components/forms/quote-form';
import { Separator } from '../components/ui/separator';

function MainPage() {
  return (
    <div className='w-full bg-white px-6'>
      <div className='flex w-full max-w-6xl mx-auto md:pt-8 pb-8'>
        <div className='w-full max-w-120 hidden md:block'>
          <img
            src='./images/image 220.png'
            alt='Familia feliz y sonriente'
            className='w-full h-auto object-cover rounded-3xl'
          />
        </div>
        <div className='w-full md:pl-32'>
          <div className='w-full max-w-88 flex flex-col gap-6'>
            <div className='space-y-2'>
              <div className='w-full flex items-center justify-between gap-3'>
                <div className='space-y-4'>
                  <div className='w-fit py-1 px-2 bg-linear-to-r from-[#00F4E2] to-[#00FF7F] rounded'>
                    <p className='font-bold text-xs md:text-sm leading-4 tracking-[0.4px]'>
                      Seguro Salud Flexible
                    </p>
                  </div>
                  <h1 className='text-[28px] md:text-[32px] font-bold leading-9 md:leading-10'>
                    Creado para ti y tu familia
                  </h1>
                </div>
                <div className='w-full max-w-34 block md:hidden'>
                  <img
                    src='./images/image 220.png'
                    alt='Familia feliz y sonriente'
                    className='w-full h-auto object-cover rounded-3xl'
                  />
                </div>
              </div>
              <Separator className='my-6 block md:hidden' />
              <p className='font-semibold text-sm leading-5 tracking-[0.2px]'>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
