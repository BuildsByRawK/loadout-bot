"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      title: "🔍 Browse Loadouts",
      color: "text-cyan-400",
      border: "border-cyan-500/40",
      description:
        "Explore by game mode, tier, and weapon category using intuitive slash commands."
    },
    {
      title: "❤️ Favorite Builds",
      color: "text-pink-400",
      border: "border-pink-500/40",
      description:
        "Save and access your best builds instantly. Personalized and persistent."
    },
    {
      title: "⚙️ Interactive UI",
      color: "text-yellow-300",
      border: "border-yellow-300/40",
      description:
        "Responsive UI tailored for smooth use inside Discord chats."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12 font-display flex flex-col items-center gap-20">
      <section className="text-center animate-fade-in">
        <h1 className="text-6xl font-bold text-cyan-400 drop-shadow-glow">
          DeltaLoadouts Bot
        </h1>
        <p className="mt-4 text-lg max-w-xl text-white/80">
          A futuristic Discord bot to manage your in-game weapon builds with power and precision.
        </p>
      </section>

      <section className="w-full max-w-6xl grid gap-6 md:grid-cols-3 px-2">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className={`glass-card border ${feature.border} cursor-pointer transition-all duration-300 p-4`}
          >
            <h2 className={`${feature.color} text-xl font-semibold mb-2`}>{feature.title}</h2>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/90 overflow-hidden"
                >
                  {feature.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>

      <footer className="text-white/50 text-sm mt-20">
        Built with ❤️ by BuildsByRawK • <a href="https://discord.com" className="text-cyan-400 hover:text-cyan-300 transition">Join our Discord</a>
      </footer>
    </main>
  );
}
