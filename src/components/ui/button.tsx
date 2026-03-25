import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/15 focus-visible:border-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[#3D3D3F] shadow-apple hover:shadow-apple-hover hover:-translate-y-[2px] transition-all",
        secondary: "bg-transparent text-primary border-[1.5px] border-primary hover:bg-secondary transition-all",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-apple hover:shadow-apple-hover hover:-translate-y-[2px] transition-all",
        ghost: "hover:bg-muted text-primary hover:text-primary",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-[28px] py-[12px]",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
