import React from 'react';
import { cn } from '../../lib/utils';

const variantClasses = {
  default: 'bg-[#FFD700] text-black hover:bg-[#FFD700]/90',
  outline: 'border border-white/30 text-white hover:bg-white hover:text-black',
  ghost: 'bg-transparent text-white hover:bg-white/10',
};

const sizeClasses = {
  default: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
  sm: 'px-3 py-1.5 text-sm',
  icon: 'p-2 h-10 w-10',
};

export const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-2 focus-visible:ring-offset-infratech-black disabled:pointer-events-none disabled:opacity-60',
        variantClasses[variant] ?? variantClasses.default,
        sizeClasses[size] ?? sizeClasses.default,
        className
      )}
      {...props}
    />
  )
);

Button.displayName = 'Button';
