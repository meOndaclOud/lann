import type { ElementType, HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export type HeadingLevel = 1 | 2 | 3;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  as?: ElementType;
}

/** Desktop/mobile type scale from INSTRUCTIONS.md §12. */
const LEVEL_CLASSES: Record<HeadingLevel, string> = {
  1: "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight",
  2: "text-2xl sm:text-3xl font-semibold tracking-tight",
  3: "text-xl sm:text-2xl font-semibold",
};

const LEVEL_TAGS: Record<HeadingLevel, ElementType> = {
  1: "h1",
  2: "h2",
  3: "h3",
};

export function Heading({ level = 2, as, className, ...props }: HeadingProps) {
  const Tag = as ?? LEVEL_TAGS[level];
  return <Tag className={cn("text-foreground", LEVEL_CLASSES[level], className)} {...props} />;
}

export type TextSize = "body" | "small";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: TextSize;
  muted?: boolean;
  as?: ElementType;
}

const SIZE_CLASSES: Record<TextSize, string> = {
  body: "text-base",
  small: "text-sm",
};

export function Text({ size = "body", muted = false, as = "p", className, ...props }: TextProps) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        SIZE_CLASSES[size],
        muted ? "text-muted-foreground" : "text-foreground",
        className,
      )}
      {...props}
    />
  );
}
