import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none cursor-pointer",
  {
    variants: {
      variant: {
        default: 'bg-[#03050F] text-white shadow-xs hover:bg-[#03050F]/90',
        secondary: 'bg-[#FF1C44] text-white shadow-xs hover:bg-[#FF1C44]/90',
      },
      size: {
        xs: 'px-2 py-0.5 text-xs',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-8 py-3.5 font-bold text-lg leading-5 tracking-[0.4px]',
        lg: 'px-5 py-2.5 text-lg',
        xl: 'px-10 py-5 font-bold text-xl leading-6 tracking-[0.4px]',
        icon: 'size-9',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded',
        md: 'rounded-lg',
        lg: 'rounded-xl',
        xl: 'rounded-2xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
      rounded: 'md',
    },
  },
);

function Button({
  className,
  variant,
  size,
  rounded,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    />
  );
}

export { Button };
