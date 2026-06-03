import { IcHomeLight, IcHospitalLight } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Plan } from '@/types';

interface PlanCardProps {
  plan: Plan;
  discount?: number;
  isRecommended?: boolean;
  onSelect: () => void;
}

export const PlanCard = ({
  plan,
  discount = 0,
  isRecommended = false,
  onSelect,
}: PlanCardProps) => {
  const finalPrice = discount > 0 ? plan.price * (1 - discount) : plan.price;
  const hasDiscount = discount > 0;

  return (
    <div className='w-[288px] bg-white rounded-3xl pt-10 pb-7 px-8 space-y-6 shadow-[0px_0px_20px_3px_rgba(0,0,0,0.1)]'>
      <div className='space-y-2'>
        {isRecommended && (
          <div className='w-fit py-1 px-2 bg-[#7DF0BA] rounded-md'>
            <p className='font-black text-xs leading-4 tracking-[0.4px]'>
              Plan recomendado
            </p>
          </div>
        )}
        <div className='flex items-center gap-4'>
          <p className='font-black text-2xl leading-8 tracking-[-0.2px]'>
            {plan.name}
          </p>
          <div>
            {plan.name.toLowerCase().includes('clínica') ? (
              <IcHospitalLight />
            ) : (
              <IcHomeLight />
            )}
          </div>
        </div>
      </div>
      <div>
        <p className='font-black text-xs leading-4 tracking-[0.6px] uppercase text-[#7981B2]'>
          Costo del plan
        </p>
        {hasDiscount && (
          <p className='font-normal text-sm leading-5 tracking-[-0.2px] text-[#7981B2] line-through'>
            ${plan.price} antes
          </p>
        )}
        <p className='font-black text-xl leading-7 tracking-[-0.2px]'>
          ${finalPrice.toFixed(2)} al mes
        </p>
      </div>

      <Separator />

      <ul className='list-disc list-inside space-y-2'>
        {plan.description.map((item, index) => (
          <li
            key={index}
            className='flex items-start gap-2'>
            <span className='inline-flex w-2 h-2 mt-2 rounded-full bg-foreground shrink-0' />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Button
        variant='secondary'
        rounded='full'
        className='w-full'
        onClick={onSelect}>
        Seleccionar plan
      </Button>
    </div>
  );
};
