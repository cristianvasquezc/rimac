import { cn } from '@/lib/utils';
import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface BreadcrumbProps {
  currentStep: 1 | 2;
}

const steps = [
  {
    id: 1,
    label: 'Planes y coberturas',
  },
  {
    id: 2,
    label: 'Resumen',
  },
];

export const Breadcrumb = ({ currentStep }: BreadcrumbProps) => {
  return (
    <div>
      <div className='w-full bg-[#EDEFFC] flex items-center justify-center py-4 px-6'>
        <ul className='list-none flex items-center justify-center gap-4'>
          {steps.map((step, index) => {
            const isActive = step.id === currentStep;

            return (
              <React.Fragment key={step.id}>
                <li className='flex items-start gap-4'>
                  <span
                    className={cn(
                      'w-6 h-6 flex items-center justify-center rounded-full text-sm',
                      isActive
                        ? 'bg-[#4F4FFF] text-white'
                        : 'border border-[#7981B2] text-[#7981B2]',
                    )}>
                    {step.id}
                  </span>

                  <p
                    className={cn(
                      'text-base leading-6 tracking-[0.2px]',
                      isActive
                        ? 'font-bold text-black'
                        : 'font-normal text-[#7981B2]',
                    )}>
                    {step.label}
                  </p>
                </li>

                {index < steps.length - 1 && (
                  <li>
                    <div
                      className={cn(
                        'w-8 border-t-2 border-dashed',
                        step.id < currentStep
                          ? 'border-[#7981B2]'
                          : 'border-[#4F4FFF] ',
                      )}
                    />
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
      <div className='w-full max-w-4xl py-10 mx-auto'>
        <a
          href='/'
          className='flex item-center justify-start gap-2'>
          <span className='w-5 h-5 flex items-center justify-center rounded-full text-sm border-2 border-[#4F4FFF]'>
            <ChevronLeftIcon className='size-4 text-[#4F4FFF]' />
          </span>
          <p className='font-bold text-lg leading-5 tracking-[0.4px]'>Volver</p>
        </a>
      </div>
    </div>
  );
};
