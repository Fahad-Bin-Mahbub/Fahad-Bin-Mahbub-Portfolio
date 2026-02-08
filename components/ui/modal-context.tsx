"use client";

import * as React from "react";
import { Project, Research } from "@/lib/data";

interface ModalContextType {
  // Project Modal
  projectOpen: boolean;
  project: Project | null;
  openProject: (project: Project) => void;
  closeProject: () => void;
  // Research Modal
  researchOpen: boolean;
  researchItem: Research | null;
  openResearch: (research: Research) => void;
  closeResearch: () => void;
  // Legacy aliases
  open: boolean;
  setOpen: (open: boolean) => void;
  setProject: (project: Project | null) => void;
}

const ModalContext = React.createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [projectOpen, setProjectOpen] = React.useState(false);
  const [project, setProject] = React.useState<Project | null>(null);

  const [researchOpen, setResearchOpen] = React.useState(false);
  const [researchItem, setResearchItem] = React.useState<Research | null>(null);

  const openProject = React.useCallback((proj: Project) => {
    setProject(proj);
    setProjectOpen(true);
  }, []);

  const closeProject = React.useCallback(() => {
    setProjectOpen(false);
    setTimeout(() => setProject(null), 300);
  }, []);

  const openResearch = React.useCallback((research: Research) => {
    setResearchItem(research);
    setResearchOpen(true);
  }, []);

  const closeResearch = React.useCallback(() => {
    setResearchOpen(false);
    setTimeout(() => setResearchItem(null), 300);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        projectOpen,
        project,
        openProject,
        closeProject,
        researchOpen,
        researchItem,
        openResearch,
        closeResearch,
        // Legacy aliases for backward compatibility
        open: projectOpen,
        setOpen: setProjectOpen,
        setProject,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
