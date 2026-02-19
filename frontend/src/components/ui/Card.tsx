import React from 'react';
import { cn } from '@/lib/utils';

type CardSize = 'sm' | 'md' | 'lg';
type CardVariant = 'default' | 'bordered' | 'elevated';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: CardSize;
  variant?: CardVariant;
  hover?: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  size = 'md',
  variant = 'default',
  hover = false,
  className,
  children,
  ...props
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300';

  const sizes: Record<CardSize, string> = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const variants: Record<CardVariant, string> = {
    default: 'bg-white',
    bordered: 'bg-white border-2 border-gray-200',
    elevated: 'bg-white shadow-lg hover:shadow-xl',
  };

  const hoverEffect = hover ? 'hover:scale-105 cursor-pointer' : '';

  return (
    <div
      className={cn(
        baseStyles,
        sizes[size],
        variants[variant],
        hoverEffect,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Card sub-components
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('mb-4', className)} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h3 className={cn('text-2xl font-bold text-gray-900', className)} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => (
  <p className={cn('text-gray-600', className)} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('', className)} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('mt-4 pt-4 border-t border-gray-200', className)} {...props}>
    {children}
  </div>
);

export default Card;