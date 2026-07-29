import { cn } from "@/utils/cn";
import { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
};

export default function Button({
  children,
  variant = "primary",
  icon,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose";

  const variants: Record<string, string> = {
    primary:
      "bg-ink text-paper hover:bg-rose hover:-translate-y-0.5 hover:shadow-card active:translate-y-0",
    secondary:
      "bg-rose text-paper hover:bg-rose-dark hover:-translate-y-0.5 hover:shadow-card active:translate-y-0",
    ghost:
      "border border-line text-ink hover:border-rose hover:text-rose bg-transparent",
  };

  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {icon}
      {children}
    </a>
  );
}
