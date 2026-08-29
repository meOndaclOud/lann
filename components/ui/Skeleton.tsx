import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export type SkeletonProps = HTMLAttributes<HTMLDivElement>;

/**
 * Generic pulsing placeholder block. Compose into feature-specific skeletons
 * (e.g. a dashboard or roadmap skeleton) once those pages exist — see
 * INSTRUCTIONS.md §48/§59 ("never leave dynamic sections blank while loading").
 */
export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("bg-muted animate-pulse rounded-md", className)}
      {...props}
    />
  );
}
