"use client";

import * as React from "react";
import { Project } from "@/lib/data";
import { useModal } from "@/components/ui/modal-context";
import { X, ExternalLink, Github, Layers, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { getTagColor, cn } from "@/lib/utils";

export function ProjectModal() {
  const { projectOpen, closeProject, project } = useModal();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeProject();
      }
      // Navigate images with arrow keys
      if (project?.images?.length) {
        if (e.key === "ArrowLeft") {
          setCurrentImageIndex((prev) => 
            prev === 0 ? project.images!.length - 1 : prev - 1
          );
        }
        if (e.key === "ArrowRight") {
          setCurrentImageIndex((prev) => 
            prev === project.images!.length - 1 ? 0 : prev + 1
          );
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeProject, project]);

  // Reset image index when modal opens with new project
  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!projectOpen || !project) return null;

  const hasImages = project.images && project.images.length > 0;
  const hasMultipleImages = hasImages && project.images!.length > 1;

  const nextImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) => 
        prev === project.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images!.length - 1 : prev - 1
      );
    }
  };

  return (
    <AnimatePresence>
      {projectOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-0 shadow-lg duration-200 sm:rounded-xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Image Gallery / Placeholder */}
            <div className="relative h-56 w-full bg-muted flex items-center justify-center overflow-hidden shrink-0">
              {hasImages ? (
                <>
                  {/* Image */}
                  <motion.img
                    key={currentImageIndex}
                    src={project.images![currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Navigation Arrows */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 opacity-80 hover:opacity-100 transition-opacity backdrop-blur-sm"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-12 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 opacity-80 hover:opacity-100 transition-opacity backdrop-blur-sm"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                  
                  {/* Image Dots Indicator */}
                  {hasMultipleImages && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {project.images!.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all",
                            idx === currentImageIndex 
                              ? "bg-primary w-4" 
                              : "bg-background/60 hover:bg-background/80"
                          )}
                        />
                      ))}
                    </div>
                  )}
                  
                  {/* Image Counter */}
                  {hasMultipleImages && (
                    <div className="absolute bottom-3 right-12 px-2 py-1 rounded-md bg-background/80 text-xs font-medium backdrop-blur-sm">
                      {currentImageIndex + 1} / {project.images!.length}
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* Placeholder Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#fff_1px,transparent_1px)]" />
                  
                  <div className="z-10 flex flex-col items-center gap-2">
                    <ImageIcon className="h-8 w-8 text-muted-foreground/30" />
                    <span className="text-4xl font-black text-foreground/10 uppercase tracking-tighter select-none">
                      {project.title.substring(0, 2)}
                    </span>
                  </div>
                </>
              )}
              
              <button
                onClick={closeProject}
                className="absolute right-4 top-4 rounded-full bg-background/50 p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 backdrop-blur-sm"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-2xl font-bold tracking-tight">{project.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className={cn(
                      "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
                      getTagColor(tag)
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid gap-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Layers className="h-4 w-4" /> Key Features
                  </h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Full-stack implementation using modern best practices.</li>
                    <li>Optimized for performance and accessibility.</li>
                    <li>Clean architecture and maintainable codebase.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 pt-4 border-t">
                {project.links?.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    target="_blank"
                    className={cn(
                      "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 px-4 py-2 w-full sm:w-auto",
                      link.label.toLowerCase().includes("repo") || link.label.toLowerCase().includes("code") 
                        ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    {link.label.toLowerCase().includes("repo") || link.label.toLowerCase().includes("code") ? (
                      <Github className="mr-2 h-4 w-4" />
                    ) : (
                      <ExternalLink className="mr-2 h-4 w-4" />
                    )}
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
