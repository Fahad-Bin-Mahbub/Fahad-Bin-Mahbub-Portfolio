"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  alternate = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  alternate?: boolean;
}) {
  return (
		<section
			id={id}
			className={cn(
				"py-16 md:py-24 relative scroll-mt-16",
				alternate ? "bg-muted/30" : "bg-transparent",
				className
			)}
		>
			<div className="container">
				<div className="mb-2 md:mb-6 max-w-3xl">
					{eyebrow ? (
						<div className="mb-3 text-xl md:text-2xl font-bold tracking-wider text-primary uppercase">
							{eyebrow}
						</div>
					) : null}
					{description ? (
						<p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
							{description}
						</p>
					) : null}
				</div>
				{children}
			</div>
		</section>
	);
}
