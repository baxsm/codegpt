import { cn } from '../../helpers/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes, forwardRef } from 'react';

const paragraphVariants = cva(
  'text-gray-500 font-semibold dark:text-gray-400',
  {
    variants: {
      size: {
        default: 'text-[1rem]',
        xl: 'text-4xl',
        lg: 'text-2xl',
        md: 'text-xl',
        sm: 'text-lg',
        xs: 'text-base',
      },
    },
    defaultVariants: {
      size: 'default'
    }
  }
);

interface ParagraphProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLHeadingElement, ParagraphProps>(
  ({ children, className, size, ...props }, ref) => {

    return (
      <p
        ref={ref}
        className={cn(paragraphVariants({ size, className }))}
        {...props}
      >
        {children}
      </p>
    );
  }
);

export default Paragraph;