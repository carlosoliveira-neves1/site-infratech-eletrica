import React from 'react';
import { cn } from '../../lib/utils';

export const Textarea = React.forwardRef(({ className, rows = 4, ...props }, ref) => (
  <textarea
    ref={ref}
    rows={rows}
    className={cn(
      'w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 shadow-sm transition focus:border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700]/70 focus:ring-offset-2 focus:ring-offset-infratech-black disabled:cursor-not-allowed disabled:opacity-60',
      className
    )}
    {...props}
  />
));

Textarea.displayName = 'Textarea';
