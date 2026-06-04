import type { Plan, QuoteFormData, User, UserType } from '../../types';
import { GlFamilySolid } from '../Icons';
import { Separator } from '../ui/separator';

interface CardSummaryProps {
  user: User;
  formData: QuoteFormData;
  selectedPlan: Plan;
  userType: UserType | null;
}

export const CardSummary = ({
  user,
  formData,
  selectedPlan,
  userType,
}: CardSummaryProps) => {
  const discount = userType === 'for-someone-else' ? 0.05 : 0;
  const finalPrice = selectedPlan.price * (1 - discount);

  return (
    <div className='w-full bg-white py-6 px-8 space-y-4 rounded-3xl shadow-[0px_0px_20px_3px_rgba(0,0,0,0.1)]'>
      <div>
        <p className='font-black text-[10px] leading-4 tracking-[0.8px] uppercase'>
          Precios calculados para:
        </p>
        <div className='flex items-center gap-3'>
          <GlFamilySolid />
          <p className='font-bold text-xl leading-7 tracking-[-0.2px]'>
            {user.name} {user.lastName}
          </p>
        </div>
      </div>

      <Separator />

      <div className='space-y-1'>
        <p className='font-bold text-base leading-6 tracking-[0.2px]'>
          Responsable de pago
        </p>
        <p className='font-normal text-[14px] leading-6 tracking-[0.1px]'>
          {formData.documentType === 'ce' ? 'C.E.' : 'DNI'}: {formData.document}
        </p>
        <p className='font-normal text-[14px] leading-6 tracking-[0.1px]'>
          Celular: {formData.phone}
        </p>
      </div>

      <div className='space-y-1'>
        <p className='font-bold text-base leading-6 tracking-[0.2px]'>
          Plan elegido
        </p>
        <p className='font-normal text-[14px] leading-6 tracking-[0.1px]'>
          {selectedPlan.name}
        </p>
        <p className='font-normal text-[14px] leading-6 tracking-[0.1px]'>
          Costo del Plan: ${finalPrice} al mes
        </p>
      </div>
    </div>
  );
};
