import { cn } from '@/lib/utils';
import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface BreadcrumbProps {
  currentStep: 1 | 2;
  href: string;
  hidden?: boolean;
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

export const Breadcrumb = ({ currentStep, href, hidden }: BreadcrumbProps) => {
  return (
    <div className={hidden ? 'hidden md:block' : 'w-full'}>
      <div className='w-full bg-[#EDEFFC] hidden md:flex items-center justify-center py-4 px-6 hii'>
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
      <div className='w-full max-w-4xl p-4 md:py-10 px-6 mx-auto border-b md:border-none border-border mb-8 md:mb-0'>
        <div className='flex items-center gap-4'>
          <a
            href={href}
            className='w-fit flex item-center justify-start gap-2'>
            <span className='w-5 h-5 flex items-center justify-center rounded-full text-sm border-2 border-[#A9AFD9] md:border-[#4F4FFF]'>
              <ChevronLeftIcon className='size-4 text-[#4F4FFF]' />
            </span>
            <p className='font-bold text-lg leading-5 tracking-[0.4px] hidden md:block text-[#4F4FFF]'>
              Volver
            </p>
          </a>
          <p className='font-black text-xs leading-4 tracking-[0.8px] uppercase block md:hidden'>
            Paso 1 de 2
          </p>
          <div className='w-52 h-2 bg-[#D7DBF5] rounded-full block md:hidden'>
            <div className='h-2 w-2.5 bg-[#4F4FFF] rounded-full' />
          </div>
        </div>
      </div>
    </div>
  );
};
