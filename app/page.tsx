"use client";

import { useState } from "react";

import { useLocale } from "@/components/locale/LocaleProvider";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Tabs } from "@/components/ui/Tabs";
import { Tooltip } from "@/components/ui/Tooltip";

export default function FoundationPage() {
  const { t } = useLocale();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-12 sm:px-6">
      <section className="flex flex-col gap-2">
        <Badge variant="secondary">{t("home.foundationTitle")}</Badge>
        <h1 className="text-3xl font-semibold tracking-tight">{t("common.appName")}</h1>
        <p className="text-muted-foreground">{t("home.foundationNotice")}</p>
      </section>

      <Card className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Card>

      <Card className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Form &amp; feedback</h2>
        <Input label="Email" placeholder="you@example.com" />
        <ProgressBar value={60} label="Roadmap progress" />
        <Tooltip content="Reusable, accessible tooltip">
          <Button variant="outline" size="sm">
            Hover me
          </Button>
        </Tooltip>
      </Card>

      <Card className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Tabs</h2>
        <Tabs
          tabs={[
            { id: "one", label: "Overview", content: <p className="text-sm">Overview content.</p> },
            { id: "two", label: "Details", content: <p className="text-sm">Details content.</p> },
          ]}
        />
      </Card>

      <Card className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Modal</h2>
        <Button onClick={() => setModalOpen(true)} className="self-start">
          Open modal
        </Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Foundation modal">
          <p className="text-muted-foreground text-sm">
            Built on the native <code>&lt;dialog&gt;</code> element for built-in focus trapping and
            Escape-to-close.
          </p>
        </Modal>
      </Card>
    </div>
  );
}
