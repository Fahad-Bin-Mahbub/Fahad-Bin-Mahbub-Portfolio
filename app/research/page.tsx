import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/section";
import { ResearchCard } from "@/components/research-card";
import { ResearchInterests } from "@/components/research-interests";
import { research } from "@/lib/data";

export default function ResearchPage() {
  return (
		<>
			<Section
				eyebrow="Research"
				title="Research interests & work"
				description="I explore human-centered systems and how people understand interfaces, make security decisions, and adopt tools in the real world."
			>
				<div className="grid gap-4 md:grid-cols-2">
					{research.map((r) => (
						<ResearchCard key={r.title} research={r} />
					))}
				</div>
{/* Replaced with separate component */}
				{/* <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-primary/2 via-primary/4 flex flex-col justify-center items-center to-transparent border border-primary/20">
					<h3 className="font-bold text-lg mb-4 flex items-center gap-2">
						Research interests
					</h3>

					<div className="flex flex-wrap gap-2">
						{[
							"Human–Computer Interaction (HCI)",
							"Usable Security & Privacy",
							"Augmented / Virtual Reality",
							"Natural Language Processing",
						].map((t) => (
							<span
								key={t}
								className="px-2 py-1 rounded-lg bg-background/50 border text-sm font-medium text-foreground/90 border-primary/30 text-primary transition-colors"
							>
								{t}
							</span>
						))}
					</div>
				</div> */}
        <ResearchInterests />
			</Section>
		</>
	);
}
