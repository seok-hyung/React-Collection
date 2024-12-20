import * as React from 'react';

import { cn } from '@/lib/utils';

// export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
// 빈 인터페이스가 불필요함. InputProps가 React.inputHTMLAttributes<HTMLInputElement>를 그대로 확장만 하고 있음
// @typescript-eslint/no-empty-object-type
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
