import { TriangleAlert, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export interface ErrorStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

/**
 * Problem → human-readable explanation → recovery action
 * (INSTRUCTIONS.md §41/§49). Never a bare error code.
 */
export function ErrorState({
  icon: Icon = TriangleAlert,
  title,
  description,
  action,
  className,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        "border-border flex flex-col items-center gap-3 rounded-xl border px-6 py-12 text-center",
        className,
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-full bg-red-500/10 text-red-500">
        <Icon aria-hidden="true" className="size-6" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-foreground font-medium">{title}</p>
        {description && <p className="text-muted-foreground max-w-sm text-sm">{description}</p>}
      </div>
      {action}
    </div>
  );
}
