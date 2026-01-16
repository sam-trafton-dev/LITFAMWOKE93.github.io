import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border px-2 py-0.5 text-xs font-mono uppercase tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary/20 text-primary hover:bg-primary/30 hover:shadow-[0_0_10px_hsl(38_100%_50%/0.3)]",
        secondary:
          "border-border bg-secondary/50 text-secondary-foreground hover:border-primary/50 hover:text-primary",
        destructive:
          "border-destructive bg-destructive/20 text-destructive hover:bg-destructive/30",
        outline: "border-border text-foreground hover:border-primary hover:text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      [{children}]
    </div>
  )
}

export { Badge, badgeVariants }

