import { PlanCard } from '@/components/cards/plan-card';
import { RadioCard } from '@/components/cards/radio-card';
import { IcAddUserLight, IcProtectionLight } from '@/components/Icons';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { RadioGroup } from '@/components/ui/radio-group';
import { usePlans } from '@/hooks/useApi';
import { useAppStore } from '@/store/useAppStore';
import type { Plan, UserType } from '@/types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PlansPage() {
  const navigate = useNavigate();
  const {
    user,
    userType,
    setUserType,
    plans,
    calculateUserAge,
    setSelectedPlan,
  } = useAppStore();
  const { isLoading } = usePlans(!!user);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const userAge = calculateUserAge();
  const filteredPlans = userAge
    ? plans.filter((plan) => userAge <= plan.age)
    : [];

  const discount = userType === 'for-someone-else' ? 0.05 : 0;

  const handleUserTypeChange = (value: string) => {
    setUserType(value as UserType);
  };

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    navigate('/resumen');
  };

  if (!user) return null;

  return (
    <div className='font-lato bg-white pb-10'>
      <Breadcrumb
        currentStep={1}
        href='/'
      />
      <div className='w-full flex flex-col items-center justify-center gap-5 px-6'>
        <div className='space-y-8'>
          <div className='flex flex-col items-center gap-2'>
            <h1 className='max-w-md font-bold text-[28px] md:text-[40px] leading-9 md:leading-12 tracking-[-0.2px] md:text-center'>
              {user.name} ¿Para quién deseas cotizar?
            </h1>
            <p className='font-normal text-base leading-7 tracking-[0.1px] md:text-center'>
              Selecciona la opción que se ajuste más a tus necesidades.
            </p>
          </div>

          <RadioGroup
            value={userType || ''}
            onValueChange={handleUserTypeChange}
            className='flex flex-col md:flex-row gap-8'>
            <RadioCard
              id='plan-for-me'
              value='for-me'
              icon={<IcProtectionLight />}
              title='Para mí'
              description='Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
            />
            <RadioCard
              id='plan-for-someone-else'
              value='for-someone-else'
              icon={<IcAddUserLight />}
              title='Para alguien más'
              description='Realiza una cotización para uno de tus familiares o cualquier persona.'
            />
          </RadioGroup>
        </div>

        {userType && (
          <div className='space-y-6'>
            {isLoading ? (
              <p className='text-center'>Cargando planes...</p>
            ) : filteredPlans.length > 0 ? (
              <div className='flex flex-wrap justify-center gap-6'>
                {filteredPlans.map((plan, index) => (
                  <PlanCard
                    key={plan.name}
                    plan={plan}
                    discount={discount}
                    isRecommended={index === 1}
                    onSelect={() => handlePlanSelect(plan)}
                  />
                ))}
              </div>
            ) : (
              <p className='text-center text-gray-500'>
                No hay planes disponibles para tu edad.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PlansPage;
