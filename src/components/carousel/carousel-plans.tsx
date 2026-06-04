import type { Plan } from '@/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PlanCard } from '../cards/plan-card';

interface CarouselPlansProps {
  plans: Plan[];
  discount?: number;
  onSelect: (plan: Plan) => void;
}

export const CarouselPlans = ({
  plans,
  discount = 0,
  onSelect,
}: CarouselPlansProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(1);

  const getGap = (el: HTMLElement) => {
    const columnGap = getComputedStyle(el).columnGap;
    const fallbackGap = getComputedStyle(el).gap;
    const parsed = parseFloat(
      columnGap === 'normal' ? fallbackGap : columnGap || fallbackGap,
    );

    return Number.isFinite(parsed) ? parsed : 24;
  };

  const updateState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const firstCard = el.querySelector('article') as HTMLElement | null;
    const gap = getGap(el);
    const cardWidth =
      firstCard?.getBoundingClientRect().width ?? el.clientWidth;
    const step = Math.max(cardWidth + gap, 1);
    const index = Math.max(0, Math.round((el.scrollLeft + gap / 2) / step));

    setCurrent(Math.min(index + 1, plans.length));
  }, [plans.length]);

  const scrollByCard = (direction: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;

    const firstCard = el.firstElementChild as HTMLElement | null;
    const gap = getGap(el);
    const cardWidth =
      firstCard?.getBoundingClientRect().width ?? el.clientWidth;

    el.scrollBy({
      left: (cardWidth + gap) * (direction === 'next' ? 1 : -1),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const run = () => requestAnimationFrame(updateState);
    run();

    const resizeObserver = new ResizeObserver(() => run());
    resizeObserver.observe(el);

    el.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('resize', run);

    return () => {
      resizeObserver.disconnect();
      el.removeEventListener('scroll', updateState);
      window.removeEventListener('resize', run);
    };
  }, [plans.length, updateState]);

  if (!plans.length) return null;

  const isFirst = current === 1;
  const isLast = current === plans.length;

  return (
    <div className='mx-auto w-full max-w-6xl'>
      <div
        ref={trackRef}
        className='w-full flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible'>
        {plans.map((plan, index) => (
          <article
            key={plan.name}
            className='w-full shrink-0 snap-center basis-full md:min-w-0 md:basis-1/2 lg:basis-1/3'>
            <div className='h-full flex justify-center py-2'>
              <PlanCard
                plan={plan}
                discount={discount}
                isRecommended={index === 1}
                onSelect={() => onSelect(plan)}
              />
            </div>
          </article>
        ))}
      </div>
      <div className='mb-4 flex items-center justify-center gap-3 md:hidden'>
        <button
          type='button'
          onClick={() => scrollByCard('prev')}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full border-2 bg-white transition-colors ${
            isFirst
              ? 'cursor-not-allowed border-gray-300 text-gray-300'
              : 'border-[#4F4FFF] text-[#4F4FFF]'
          }`}>
          <ChevronLeftIcon className='h-4 w-4' />
          <span className='sr-only'>Plan anterior</span>
        </button>

        <span className='min-w-16 text-center text-sm text-muted-foreground'>
          {current} / {plans.length}
        </span>

        <button
          type='button'
          onClick={() => scrollByCard('next')}
          disabled={isLast}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full border-2 bg-white transition-colors ${
            isLast
              ? 'cursor-not-allowed border-gray-300 text-gray-300'
              : 'border-[#4F4FFF] text-[#4F4FFF]'
          }`}>
          <ChevronRightIcon className='h-4 w-4' />
          <span className='sr-only'>Plan siguiente</span>
        </button>
      </div>
    </div>
  );
};
