"use client";

import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { person } from "@/lib/data";
import { withBasePath } from "@/lib/utils";

export function Hero() {
   const image = withBasePath("/Fahad Bin Mahbub Photo.jpg");
  return (
    <section className="container pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        {/* Soft Background Gradient Blob */}
        {/* <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-full h-full bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen" /> */}
        {/* <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-full h-full bg-blue-500/20 rounded-full blur-[120px] pointer-events-none opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen" /> */}

       <div className="flex flex-col md:flex-row gap-10 items-center md:items-start max-w-5xl relative z-10">
         {/* Profile Placeholder */}
         <div className="shrink-0 relative">
            <div className="h-32 w-32 md:h-40 md:w-40 rounded-full bg-muted border border-border overflow-hidden flex items-center justify-center relative">
               <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800" />
               <img src={image} className="relative z-10 text-4xl select-none"/>
               
            </div>
            <div className="absolute -bottom-2 -right-2 bg-background rounded-full border border-border p-1.5 shadow-sm">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
            </div>
         </div>

         <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
              Fahad Bin Mahbub
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
               Software Engineer & Researcher specializing in human-centered evaluation.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
               <Link 
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
               >
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
               <a 
                  href={withBasePath("/cv.pdf")}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-3 text-sm font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95"
               >
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
               </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="text-sm font-medium text-muted-foreground mr-2">Find me on</span>
                {person.social.map((s) => (
                    <Link
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        className="h-10 w-10 flex items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary hover:scale-110"
                        title={s.label}
                    >
                        {s.label === "GitHub" && <Github className="h-5 w-5" />}
                        {s.label === "LinkedIn" && <Linkedin className="h-5 w-5" />}
                    </Link>
                ))}
                 <Link
                    href={`mailto:${person.email}`}
                    className="h-10 w-10 flex items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary hover:scale-110"
                    title="Email"
                >
                    <Mail className="h-5 w-5" />
                </Link>
            </div>
         </div>
       </div>
    </section>
  );
}
