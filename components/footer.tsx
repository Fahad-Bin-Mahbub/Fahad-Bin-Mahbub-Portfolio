import Link from "next/link";
import { person } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-24 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-foreground">
              © {year} {person.name}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link className="hover:text-primary transition-colors" href="/#featured-projects">
              Projects
            </Link>
            <Link className="hover:text-primary transition-colors" href="/#experience">
              Experience
            </Link>
            <a className="hover:text-primary transition-colors" href={`mailto:${person.email}`}>
              Email
            </a>
            {person.social?.map((s) => (
               <a key={s.label} className="hover:text-primary transition-colors" href={s.href} target="_blank" rel="noopener noreferrer">
                 {s.label}
               </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
