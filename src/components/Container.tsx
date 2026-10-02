import type { ReactNode } from 'react';

const WIDTHS = {
  wide: 'max-w-6xl',
  standard: 'max-w-5xl',
  narrow: 'max-w-3xl',
} as const;

interface ContainerProps {
  width?: keyof typeof WIDTHS;
  className?: string;
  children: ReactNode;
}

export default function Container({ width = 'standard', className = '', children }: ContainerProps) {
  return <div className={`mx-auto w-full ${WIDTHS[width]} px-4 sm:px-6 ${className}`}>{children}</div>;
}
