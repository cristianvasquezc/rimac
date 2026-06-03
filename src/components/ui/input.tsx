import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'h-12 w-full min-w-0 rounded-md border border-border bg-transparent px-2.5 py-2.5 text-base font-normal leading-7 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-foreground/60 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-red-500 md:text-sm',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
