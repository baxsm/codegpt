import { cn } from "../../helpers/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const paragraphVariants = cva("font-semibold", {
  variants: {
    size: {
      default: "text-[1rem]",
      xl: "text-4xl",
      lg: "text-2xl",
      md: "text-xl",
      sm: "text-lg",
      xs: "text-base",
    },
    color: {
      white: "text-gray-500 dark:text-gray-400",
      black: "text-gray-800",
      dim: 'text-gray-600 dark:text-gray-600'
    },
  },
  defaultVariants: {
    size: "default",
    color: "white",
  },
});

interface ParagraphProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof paragraphVariants> {
  color?: string;
}

const Paragraph = forwardRef<HTMLHeadingElement, ParagraphProps>(
  ({ children, className, size, color, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(paragraphVariants({ size, color, className }))}
        {...props}
      >
        {children}
      </p>
    );
  }
);

export default Paragraph;
