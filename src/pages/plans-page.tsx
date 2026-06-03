import { PlanCard } from '@/components/cards/plan-card';
import { RadioCard } from '@/components/cards/radio-card';
import { IcAddUserLight, IcProtectionLight } from '@/components/Icons';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { RadioGroup } from '@/components/ui/radio-group';

function PlansPage() {
  return (
    <div className='font-lato bg-white pb-10'>
      <Breadcrumb currentStep={1} />
      <div className='w-full flex flex-col items-center justify-center gap-5 px-6'>
        <div className='space-y-8'>
          <div className='flex flex-col items-center gap-2'>
            <h1 className='max-w-md font-bold text-[28px] md:text-[40px] leading-9 md:leading-12 tracking-[-0.2px] md:text-center'>
              Rocío ¿Para quién deseas cotizar?
            </h1>
            <p className='font-normal text-base leading-7 tracking-[0.1px] md:text-center'>
              Selecciona la opción que se ajuste más a tus necesidades.
            </p>
          </div>

          <RadioGroup
            defaultValue='plus'
            className='flex flex-col md:flex-row gap-8'>
            <RadioCard
              id='plan-for-me'
              value='for-me'
              icon={<IcProtectionLight />}
              title='Para mí'
              description='Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
            />
            <RadioCard
              id='plan'
              value='plan'
              icon={<IcAddUserLight />}
              title='Para alguien más'
              description='Realiza una cotización para uno de tus familiares o cualquier persona.'
            />
          </RadioGroup>
        </div>
        <PlanCard />
      </div>
    </div>
  );
}

export default PlansPage;
