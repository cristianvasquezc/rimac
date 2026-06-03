import { GlFamilySolid } from '../Icons';
import { Separator } from '../ui/separator';

export const CardSummary = () => {
  return (
    <div className='w-full bg-white py-6 px-8 space-y-4 rounded-3xl shadow-[0px_0px_20px_3px_rgba(0,0,0,0.1)]'>
      <div>
        <p className='font-black text-[10px] leading-4 tracking-[0.8px] uppercase'>
          Precios calculados para:
        </p>
        <div className='flex items-center gap-3'>
          <GlFamilySolid />
          <p className='font-bold  text-xl leading-7 tracking-[-0.2px]'>
            Rocio Miranda Díaz
          </p>
        </div>
      </div>

      <Separator />

      <div className='space-y-1'>
        <p className='font-bold text-base leading-6 tracking-[0.2px]'>
          Responsable de pago
        </p>
        <p className='font-normal text-[14px] leading-6 tracking-[0.1px]'>
          DNI: 444888888
        </p>
        <p className='font-normal text-[14px] leading-6 tracking-[0.1px]'>
          Celular: 5130216147
        </p>
      </div>

      <div className='space-y-1'>
        <p className='font-bold text-base leading-6 tracking-[0.2px]'>
          Plan elegido
        </p>
        <p className='font-normal text-[14px] leading-6 tracking-[0.1px]'>
          Plan en Casa y Clínica
        </p>
        <p className='font-normal text-[14px] leading-6 tracking-[0.1px]'>
          Costo del Plan: $99 al mes
        </p>
      </div>
    </div>
  );
};
