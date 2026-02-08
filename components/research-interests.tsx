"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  ShieldCheck, 
  Glasses, 
  MessageSquareText, 
  Sparkles 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const interests = [
  {
    title: "Human–Computer Interaction",
    icon: Users,
    color: "text-blue-500",
    description: "Designing intuitive interfaces that bridge the gap between people and technology.",
  },
  {
    title: "Usable Security & Privacy",
    icon: ShieldCheck,
    color: "text-green-500",
    description: "Making security accessible and understandable for everyone, everywhere.",
  },
  {
    title: "Augmented / Virtual Reality",
    icon: Glasses,
    color: "text-purple-500",
    description: "Creating immersive experiences that transform how we perceive and interact with the world.",
  },
  {
    title: "Natural Language Processing",
    icon: MessageSquareText,
    color: "text-orange-500",
    description: "Empowering machines to understand and generate human language naturally.",
  },
];

export function ResearchInterests() {
  return (
    <section className="mt-16">
      <div className="flex items-center gap-2 mb-8">
        <div className="p-2 rounded-lg bg-primary/10">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight">Research Interests</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {interests.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Card className="h-full border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300 hover:border-primary/20 group">
              <CardHeader>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-background border border-border/50 group-hover:scale-110 transition-transform duration-300 ${item.color.replace('text-', 'bg-').replace('500', '500/10')}`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
