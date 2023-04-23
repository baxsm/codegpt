import { cn } from "../../helpers/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none duration-300 shadow-md active:shadow-xl gap-2",
  {
    variants: {
      variant: {
        default: "text-black dark:text-white bg-blue-900 bg-opacity-40 dark:bg-opacity-90",
        destructive: "",
        outline:
          "border-[1px] border-accentDark border-opacity-40 hover:bg-accentDark hover:bg-opacity-[0.05] dark:text-white dark:bg-white dark:bg-opacity-20 dark:hover:bg-opacity-10",
        subtle: "",
        ghost: "",
        link: "",
      },
      size: {
        default: "h-10 py-2 px-6",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
        xl: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      isLoading,
      size,
      startIcon = null,
      endIcon = null,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {startIcon && <i>{startIcon}</i>}
        {children}
        {endIcon && <i>{endIcon}</i>}
      </button>
    );
  }
);

export default Button;
