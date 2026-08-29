import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "card-interactive border-border bg-card text-card-foreground rounded-xl border p-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
