import React from 'react';
import { cn } from '../../lib/utils';

export function Card({ className, ...props }) {
  return <div className={cn('rounded-2xl bg-white/5 shadow-xl backdrop-blur-sm', className)} {...props} />;
}

export function CardContent({ className, ...props }) {
  return <div className={cn('p-6', className)} {...props} />;
}
