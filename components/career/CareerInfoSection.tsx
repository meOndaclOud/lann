import type { ReactNode } from "react";

import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Typography";

export interface CareerInfoSectionProps {
  title: string;
  children: ReactNode;
}

/** Shared "labeled card" section used on both the career detail and learning path pages. */
export function CareerInfoSection({ title, children }: CareerInfoSectionProps) {
  return (
    <Card className="flex flex-col gap-3">
      <Heading level={2} className="text-lg">
        {title}
      </Heading>
      {children}
    </Card>
  );
}
