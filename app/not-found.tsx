import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="rounded-3xl p-10 card">
        <div className="text-sm text-[hsl(var(--fg)/0.65)]">404</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[hsl(var(--fg)/0.72)]">
          If you followed a broken link, it might be a basePath issue on GitHub
          Pages. The included GitHub Actions workflow configures this for you.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--fg))] px-4 py-2 text-sm font-medium text-[hsl(var(--bg))] hover:opacity-90"
          >
            Back home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
