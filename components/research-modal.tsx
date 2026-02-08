"use client";

import * as React from "react";
import { Research } from "@/lib/data";
import { useModal } from "@/components/ui/modal-context";
import { X, ArrowUpRight, BookOpenText, Users, GraduationCap } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ResearchModal() {
  const { researchOpen, closeResearch, researchItem } = useModal();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeResearch();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeResearch]);

  if (!researchOpen || !researchItem) return null;

  return (
    <AnimatePresence>
      {researchOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeResearch}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-0 shadow-lg duration-200 sm:rounded-xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="relative h-32 w-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center overflow-hidden shrink-0">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#fff_1px,transparent_1px)]" />
              
              <div className="z-10 flex items-center gap-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpenText className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">Research</span>
              </div>
              
              <button
                onClick={closeResearch}
                className="absolute right-4 top-4 rounded-full bg-background/50 p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 backdrop-blur-sm"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto">
              {/* Title & Subtitle */}
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-2xl font-bold tracking-tight">{researchItem.title}</h2>
                <p className="text-sm font-medium text-primary">{researchItem.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {researchItem.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {researchItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Supervisors */}
              {researchItem.supervisors && researchItem.supervisors.length > 0 && (
                <div className="mb-6 p-4 rounded-lg bg-muted/50 border border-border/50">
                  <h3 className="font-semibold mb-4 flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    Supervisors
                  </h3>
                  <div className="space-y-3">
                    {researchItem.supervisors.map((supervisor, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-primary/10 shrink-0">
                          <GraduationCap className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{supervisor.name}</div>
                          <div className="text-xs text-muted-foreground">{supervisor.title}</div>
                          <div className="text-xs text-muted-foreground">{supervisor.institution}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {researchItem.links?.length ? (
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t">
                  {researchItem.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      className={cn(
                        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 px-4 py-2",
                        "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                    >
                      <ArrowUpRight className="mr-2 h-4 w-4" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
