import { Mail, Linkedin, Github, Calendar, ArrowUpRight, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { person } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            
            {/* Contact Info Card */}
            <div className="flex flex-col h-full justify-between">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                        Let&apos;s work together.
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        I&apos;m currently open to new opportunities in software engineering and research. 
                        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>

                    <div className="flex flex-col gap-4">
                        <Link
                            href={`mailto:${person.email}`}
                            className="group flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                        >
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="text-sm font-medium text-muted-foreground">Email Me</div>
                                <div className="text-lg font-semibold text-foreground">{person.email}</div>
                            </div>
                            <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                        </Link>
                    </div>
                </div>

                <div className="flex gap-4 mt-8 md:mt-0">
                    {person.social.map((s) => (
                        <Link 
                            key={s.label} 
                            href={s.href}
                            target="_blank"
                            className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-muted/30 hover:border-primary hover:bg-background transition-all text-foreground hover:text-primary"
                        >
                            {s.label === "GitHub" && <Github className="h-5 w-5" />}
                            {s.label === "LinkedIn" && <Linkedin className="h-5 w-5" />}
                            <span className="font-medium">{s.label}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Calendly / Booking Card */}
            <div className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                <div className="relative h-full rounded-2xl border border-border bg-card p-8 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-purple-400 mb-6">
                            <Calendar className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Book a call</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Interested in collaboration or just want to chat? Schedule a 30-minute meeting directly on my calendar.
                        </p>
                        
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8 bg-muted/30 p-3 rounded-lg border border-border/50">
                            <Clock className="h-4 w-4" />
                            <span>30 Minute Meeting</span>
                        </div>
                    </div>

                    <Link
                        href="https://calendly.com/fahadbm3234" 
                        target="_blank"
                        className="inline-flex items-center justify-center w-full rounded-xl bg-primary px-4 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        Schedule time
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
