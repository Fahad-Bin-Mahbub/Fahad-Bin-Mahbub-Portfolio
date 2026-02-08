"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export function TransitionProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  // "mode='wait'" can sometimes cause delays or blank screens if the exit animation
  // doesn't complete perfectly or if there's heavy hydration. 
  // Switching to default (parallel) or removing generic page transitions often feels snappier.
  // We'll keep a very subtle fade-in.

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full overflow-x-hidden relative"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
