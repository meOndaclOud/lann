"use client";

import { Mail, RotateCcw, SearchX } from "lucide-react";
import { useState } from "react";

import { useLocale } from "@/components/locale/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { ErrorState } from "@/components/ui/ErrorState";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Skeleton } from "@/components/ui/Skeleton";
import { Tabs } from "@/components/ui/Tabs";
import { Tooltip } from "@/components/ui/Tooltip";
import { Heading, Text } from "@/components/ui/Typography";

const COLOR_TOKENS = [
  { name: "background", classes: "bg-background border border-border" },
  { name: "foreground", classes: "bg-foreground" },
  { name: "card", classes: "bg-card border border-border" },
  { name: "primary", classes: "bg-primary" },
  { name: "secondary", classes: "bg-secondary" },
  { name: "muted", classes: "bg-muted" },
  { name: "border", classes: "bg-border" },
  { name: "accent", classes: "bg-accent" },
];

const SPACING_TOKENS = [1, 2, 3, 4, 6, 8, 12, 16];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <Heading level={2}>{title}</Heading>
      <Card className="flex flex-col gap-6">{children}</Card>
    </section>
  );
}

export default function DesignSystemPage() {
  const { t } = useLocale();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-12 px-4 py-12 sm:px-6">
      <header
        className="rounded-2xl px-6 py-10 text-white shadow-lg"
        style={{ backgroundImage: "var(--gradient-accent)" }}
      >
        <p className="text-sm font-medium text-white/80">Internal reference — not user-facing</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          LANN Design System
        </h1>
        <p className="mt-2 max-w-xl text-white/85">
          Tokens and reusable components for typography, color, spacing, and every interactive
          primitive the product is built from.
        </p>
      </header>

      <Section title="Typography">
        <div className="flex flex-col gap-2">
          <Heading level={1}>Heading level 1</Heading>
          <Heading level={2}>Heading level 2</Heading>
          <Heading level={3}>Heading level 3</Heading>
          <Text>Body text — used for the majority of reading content across the product.</Text>
          <Text size="small" muted>
            Small, muted text — used for captions, hints, and secondary metadata.
          </Text>
        </div>
      </Section>

      <Section title="Colors">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {COLOR_TOKENS.map((token) => (
            <div key={token.name} className="flex flex-col gap-2">
              <div className={`h-12 w-full rounded-lg ${token.classes}`} />
              <Text size="small" muted>
                {token.name}
              </Text>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Spacing">
        <div className="flex flex-wrap items-end gap-4">
          {SPACING_TOKENS.map((step) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <div
                className="bg-primary rounded-sm"
                style={{ width: `${step * 4}px`, height: "16px" }}
              />
              <Text size="small" muted>
                {step * 4}px
              </Text>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="gradient">Primary CTA</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </Section>

      <Section title="Badges">
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </Section>

      <Section title="Inputs">
        <div className="flex max-w-sm flex-col gap-4">
          <Input label="Email" placeholder="you@example.com" icon={Mail} />
          <Input
            label="With an error"
            placeholder="you@example.com"
            error="Please enter a valid email address."
          />
        </div>
      </Section>

      <Section title="Progress">
        <div className="flex max-w-sm flex-col gap-4">
          <ProgressBar value={25} label="25% complete" />
          <ProgressBar value={60} label="60% complete" />
          <ProgressBar value={100} label="100% complete" />
        </div>
      </Section>

      <Section title="Tabs">
        <Tabs
          tabs={[
            { id: "one", label: "Overview", content: <Text size="small">Overview content.</Text> },
            { id: "two", label: "Details", content: <Text size="small">Details content.</Text> },
          ]}
        />
      </Section>

      <Section title="Tooltip &amp; modal">
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip content="Reusable, accessible tooltip">
            <Button variant="outline" size="sm">
              Hover or focus me
            </Button>
          </Tooltip>
          <Button onClick={() => setModalOpen(true)}>Open modal</Button>
        </div>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Design system modal">
          <Text size="small" muted>
            Built on the native <code>&lt;dialog&gt;</code> element for built-in focus trapping and
            Escape-to-close.
          </Text>
        </Modal>
      </Section>

      <Section title="Skeleton loaders">
        <div className="flex max-w-sm flex-col gap-4">
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-3 w-1/3" />
            </div>
          </div>
          <Skeleton className="h-24 w-full" />
        </div>
      </Section>

      <Section title="Empty state">
        <EmptyState
          icon={SearchX}
          title={t("emptyState.title")}
          description={t("emptyState.description")}
          action={<Button variant="outline">{t("emptyState.action")}</Button>}
        />
      </Section>

      <Section title="Error state">
        <ErrorState
          title={t("errorState.title")}
          description={t("errorState.description")}
          action={
            <Button variant="outline">
              <RotateCcw aria-hidden="true" className="size-4" />
              {t("errorState.action")}
            </Button>
          }
        />
      </Section>

      <Section title="Navigation">
        <Text size="small" muted>
          Resize below the <code>md</code> breakpoint to see the navbar collapse into the hamburger
          menu, and the bottom tab bar used for primary mobile navigation.
        </Text>
      </Section>
    </div>
  );
}
