import { IcHospitalLight } from '../Icons';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

export const PlanCard = () => {
  return (
    <div className='w-[288px] bg-white rounded-3xl pt-10 pb-7 px-8 space-y-6 shadow-[0px_0px_20px_3px_rgba(0,0,0,0.1)]'>
      <div className='space-y-2'>
        <div className='w-fit py-1 px-2 bg-[#7DF0BA] rounded-md'>
          <p className='font-black text-xs leading-4 tracking-[0.4px]'>
            Plan recomendado
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <p className='font-black text-2xl leading-8 tracking-[-0.2px]'>
            Plan en Casa y Clínica
          </p>
          <div>
            <IcHospitalLight />
          </div>
        </div>
      </div>
      <div>
        <p className='font-black text-xs leading-4 tracking-[0.6px] uppercase text-[#7981B2]'>
          Costo del plan
        </p>
        <p className='font-normal text-sm leading-5 tracking-[-0.2px] text-[#7981B2] line-through'>
          $99 antes
        </p>
        <p className='font-black text-xl leading-7 tracking-[-0.2px]'>
          $94.05 al mes
        </p>
      </div>

      <Separator />

      <ul className='list-disc list-inside'>
        <li className='flex items-start gap-2'>
          <span className='inline-flex w-2 h-2 mt-2 rounded-full bg-foreground shrink-0' />
          Consultas en clínica para cualquier especialidad.
        </li>
        <li className='flex items-start gap-2'>
          <span className='inline-flex w-2 h-2 mt-2 rounded-full bg-foreground shrink-0' />
          Medicinas y exámenes derivados cubiertos al 80%
        </li>
        <li className='flex items-start gap-2'>
          <span className='inline-flex w-2 h-2 mt-2 rounded-full bg-foreground shrink-0' />
          Atención médica en más de 200 clínicas del país.
        </li>
      </ul>

      <Button
        variant='secondary'
        rounded='full'
        className='w-full'>
        Seleccionar plan
      </Button>
    </div>
  );
};
