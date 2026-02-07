import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ResearchCard } from "@/components/research-card";
import { Timeline } from "@/components/timeline";
import { 
  awards, 
  experience, 
  projects, 
  research, 
  skills, 
  certifications, 
  activities,
  education,
  problemSolving
} from "@/lib/data";
import { Contact } from "@/components/contact";
import { ProjectsGrid } from "@/components/projects-grid";
import { 
  GraduationCap, 
  Trophy, 
  Award, 
  Code2, 
  BadgeCheck, 
  Users,
  ExternalLink 
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
		<>
			{/* <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-full h-full bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-10 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen" /> */}

			<Hero />

			<Section
				id="about"
				eyebrow="Introduction"
				title="About"
				description="I am a researcher and engineer focused on the intersection of Human-Computer Interaction and usable security & privacy."
			>
				<div className="prose prose-neutral dark:prose-invert max-w-none">
					<div className="text-lg text-muted-foreground space-y-4">
						<p>
							My work spans building robust full-stack applications to
							conducting user studies on real-world adoption. I&apos;m
							especially interested in Human–Computer Interaction and usable
							security/privacy, where design, trust, and usability matter just
							as much as technical strength.
						</p>

						<p>
							I&apos;ve worked on solving real operational and payment-flow
							challenges by building full-stack applications, like an institute
							learning management system that streamlines attendance and
							supports live-session integrations, and by developing mobile
							experiences such as a digital wallet app with KYC, QR payments,
							and agent tracking to improve verification and transactions.
						</p>

						<p>
							My research goal is to understand technology through non-techinal
							people lens. I mainly focus on Human-Computer Interaction,
							especially in interviews and prototyping. I want to explore
							pathways for protecting and nurturing people&apos;s mental health
							through their continuous digital footprints. I believe technology
							shouldn&apos;t be limited to those with technical skills, but
							instead should be usable and accessible to everyone.
						</p>
					</div>
				</div>
			</Section>

			{/* Education Section */}
			<Section id="education" eyebrow="Academic Background" title="Education">
				<div className="max-w-4xl mx-auto space-y-6">
					{education.map((edu, idx) => (
						<div
							key={idx}
							className="relative p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg group"
						>
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
									<GraduationCap className="h-6 w-6" />
								</div>
								<div className="flex-1">
									<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
										<div>
											<h3 className="font-bold text-lg text-foreground">
												{edu.school}
											</h3>
											<p className="text-sm font-medium text-primary">
												{edu.degree}
											</p>
										</div>
										<span className="text-sm font-mono text-muted-foreground shrink-0">
											{edu.date}
										</span>
									</div>
									<p className="mt-2 text-sm text-muted-foreground">
										{edu.detail}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</Section>

			<Section
				id="research"
				eyebrow="Research"
				title="Research & Publications"
				description="Research and Publications"
			>
				<div className="grid gap-6 md:grid-cols-2">
					{research.map((r) => (
						<ResearchCard key={r.title} research={r} />
					))}
				</div>
			</Section>

			<Section
				id="featured-projects"
				eyebrow="Projects"
				title="Selected Engineering"
				description="Full-stack development projects on work and academic"
			>
				<ProjectsGrid projects={projects} />
			</Section>

			{/* Skills Section */}
			<Section
				id="skills"
				eyebrow="Expertise"
				title="Technical Skills"
				description="Technologies and tools I work with."
			>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{skills.map((skillGroup) => (
						<div
							key={skillGroup.group}
							className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg"
						>
							<div className="flex items-center gap-3 mb-4">
								<div className="p-2 rounded-lg bg-primary/10 text-primary">
									<Code2 className="h-5 w-5" />
								</div>
								<h3 className="font-bold text-foreground">
									{skillGroup.group}
								</h3>
							</div>
							<div className="flex flex-wrap gap-2">
								{skillGroup.items.map((skill) => (
									<span
										key={skill}
										className="px-3 py-1.5 rounded-full bg-background/50 border border-border/50 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Problem Solving Stats */}
				<div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-transparent border border-primary/20">
					<h3 className="font-bold text-lg mb-4 flex items-center gap-2">
						<Code2 className="h-5 w-5 text-primary" />
						Problem Solving
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
						{problemSolving.map((ps) => (
							<Link
								key={ps.platform}
								href={ps.link}
								target="_blank"
								className="p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all hover:shadow-md group"
							>
								<div className="flex items-center justify-between">
									<div>
										<div className="font-medium text-foreground group-hover:text-primary transition-colors">
											{ps.platform}
										</div>
										<div className="text-xs text-muted-foreground">
											@{ps.handle}
										</div>
									</div>
									<div className="text-right">
										<div className="text-2xl font-bold text-primary">
											{ps.solved}
										</div>
										<div className="text-xs text-muted-foreground">solved</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</Section>

			<Section
				id="experience"
				eyebrow="Career"
				title="Experience"
				description="Professional timeline."
			>
				<div className="max-w-4xl mx-auto">
					<Timeline
						items={experience.map((e) => ({
							title: `${e.role} @ ${e.company}`,
							subtitle: e.location,
							meta: e.date,
							bullets: [...e.bullets],
						}))}
					/>
				</div>
			</Section>

			{/* Certifications Section */}
			<Section
				id="certifications"
				eyebrow="Credentials"
				title="Certifications"
				description="Professional certifications and courses completed."
			>
				<div className="grid gap-4 sm:grid-cols-2">
					{certifications.map((cert, idx) => (
						<div
							key={idx}
							className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-all hover:shadow-md group"
						>
							<div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
								<BadgeCheck className="h-5 w-5" />
							</div>
							<span className="font-medium text-foreground">{cert}</span>
						</div>
					))}
				</div>
			</Section>

			{/* Enhanced Awards Section */}
			<Section
				id="awards"
				eyebrow="Recognition"
				title="Awards & Contributions"
				description="Achievements and leadership roles."
			>
				<div className="grid gap-8 lg:grid-cols-2">
					{/* Awards Column */}
					<div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-transparent border border-primary/20">
						<h3 className="text-lg font-bold mb-6 flex items-center gap-3">
							<div className="p-2.5 rounded-xl bg-primary/10">
								<Trophy className="h-5 w-5 text-primary" />
							</div>
							Honors & Awards
						</h3>
						<ul className="space-y-4">
							{awards.map((award, i) => (
								<li
									key={i}
									className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border/30 hover:border-primary/20 transition-all"
								>
									<Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
									<span className="text-sm text-foreground">{award}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Leadership Column */}
					<div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-transparent border border-primary/20">
						<h3 className="text-lg font-bold mb-6 flex items-center gap-3">
							<div className="p-2.5 rounded-xl bg-primary/10">
								<Users className="h-5 w-5 text-primary" />
							</div>
							Leadership & Activities
						</h3>
						<ul className="space-y-4">
							{activities.map((activity) => (
								<li
									key={activity.title}
									className="p-4 rounded-xl bg-background/50 border border-border/30 hover:border-blue-500/20 transition-all"
								>
									<div className="flex items-start justify-between gap-2">
										<div className="font-semibold text-foreground">
											{activity.title}
										</div>
										<span className="text-xs font-mono text-muted-foreground shrink-0">
											{activity.date}
										</span>
									</div>
									<p className="mt-2 text-sm text-muted-foreground">
										{activity.description}
									</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Section>

			<div className="h-24" />
			<Contact />
		</>
	);
}
