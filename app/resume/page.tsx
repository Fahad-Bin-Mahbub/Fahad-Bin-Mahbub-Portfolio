import { Download } from "lucide-react";

import { Section } from "@/components/section";
import { withBasePath } from "@/lib/utils";

export default function ResumePage() {
  const pdf = withBasePath("/cv.pdf");

  return (
    <Section
      eyebrow="Resume"
      title="Curriculum Vitae"
    >
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 bg-muted/30 px-6 py-4">
          <div className="text-sm font-semibold text-foreground">cv.pdf</div>
          <a
            href={pdf}
            download
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Download <Download className="h-4 w-4" />
          </a>
        </div>

        <div className="relative h-[78vh] min-h-[520px] bg-white">
          <iframe
            title="CV"
            src={pdf}
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        If the PDF viewer doesn&apos;t load in your browser, use the download
        button above.
      </p>
    </Section>
  );
}
