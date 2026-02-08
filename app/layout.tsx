import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteBackground } from "@/components/site-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TransitionProvider } from "@/components/transition-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { ModalProvider } from "@/components/ui/modal-context";
import { ProjectModal } from "@/components/project-modal";
import { ResearchModal } from "@/components/research-modal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Fahad Bin Mahbub — Portfolio",
  description:
    "Full‑stack developer and HCI / usable security researcher. Projects, research, and experience.",
  icons: [{ rel: "icon", url: `${BASE_PATH}/favicon.svg` }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} noise`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteBackground />
          <ScrollProgress />
          <ModalProvider>
            <Navbar />
            <TransitionProvider>
              <main className="relative z-10 overflow-x-hidden w-full">{children}</main>
            </TransitionProvider>
            <Footer />
            <ProjectModal />
            <ResearchModal />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
