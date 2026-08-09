import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "glow";
  children: React.ReactNode;
}

export function Badge({ children, className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "bg-white/10 text-foreground border border-white/20": variant === "default",
          "border border-white/20 text-foreground/80": variant === "outline",
          "bg-accent-purple/10 text-accent-purple border border-accent-purple/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]": variant === "glow",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
