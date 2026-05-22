import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

const variants = {
  primary: "bg-autolec-green text-white hover:bg-[#315f46]",
  secondary: "bg-autolec-red text-white hover:bg-[#5f3131]",
  outline: "border border-white/70 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-ink",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
};

export function Button({ asChild, variant = "primary", className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-extrabold uppercase tracking-normal transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-autolec-green",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
