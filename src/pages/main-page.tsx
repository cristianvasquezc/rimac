import { QuoteForm } from '../components/forms/quote-form';

function MainPage() {
  return (
    <div className='w-full bg-white px-5'>
      <div className='flex w-full max-w-6xl mx-auto py-8'>
        <div className='w-full max-w-120'>
          <img
            src='./images/image 220.png'
            alt='Familia feliz y sonriente'
            className='w-full h-auto object-cover rounded-3xl'
          />
        </div>
        <div className='w-full pl-32'>
          <div className='w-full max-w-88 flex flex-col gap-6'>
            <div className='space-y-4'>
              <div className='w-fit py-1 px-2 bg-linear-to-r from-[#00F4E2] to-[#00FF7F] rounded'>
                <p className='font-bold text-sm leading-4'>
                  Seguro Salud Flexible
                </p>
              </div>
              <div className='space-y-2'>
                <h1 className='text-[32px] font-bold leading-10'>
                  Creado para ti y tu familia
                </h1>
                <p className='font-semibold text-sm leading-5 tracking-[0.2px]'>
                  Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                  nuestra asesoría. 100% online.
                </p>
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
