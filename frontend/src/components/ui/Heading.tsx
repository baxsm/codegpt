import { cn } from '../../helpers/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const headingVariants = cva('text-gray-700 font-semibold dark:text-gray-200', {
  variants: {
    size: {
      default: 'text-3xl',
      lg: 'text-2xl',
      md: 'text-xl',
      sm: 'text-lg',
      xs: 'text-base',
      heading: 'text-4xl',
      largeHeading: 'text-5xl',
      extraLargeHeading: 'text-6xl',
    },
  },
  defaultVariants: {
    size: 'default'
  }
});

type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  level?: HeadingLevel;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = '1', children, className, size, ...props }, ref) => {
    const HeadingTag = `h${level}`;

    return (
      <HeadingTag
        ref={ref}
        className={cn(headingVariants({ size, className }))}
        {...props}
      >
        {children}
      </HeadingTag>
    );
  }
);

export default Heading;