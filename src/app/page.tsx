"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const features = [
    {
      title: "📊 Loadout Selector",
      color: "text-cyan-400",
      border: "border-cyan-500/40",
      description:
        "Browse builds by game mode, tier, category, and weapon with interactive dropdowns.",
    },
    {
      title: "🧠 Smart Build Lookup",
      color: "text-pink-400",
      border: "border-pink-500/40",
      description:
        "Use `/build <weapon>` to search loadouts with partial name matching.",
    },
    {
      title: "⭐ Favorites System",
      color: "text-yellow-300",
      border: "border-yellow-300/40",
      description:
        "Save and manage your favorite builds with buttons and pagination.",
    },
    {
      title: "🗺️ Interactive Maps",
      color: "text-green-400",
      border: "border-green-500/40",
      description:
        "Open clickable links to view supported tactical map layouts.",
    },
    {
      title: "🎯 Tier Filtering",
      color: "text-red-400",
      border: "border-red-500/40",
      description: "Filter loadouts by Meta, Mid-Tier, or Budget for clarity.",
    },
    {
      title: "📖 Help Menu",
      color: "text-indigo-400",
      border: "border-indigo-500/40",
      description: "Accessible help guide for all commands and tips.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-[#111] text-white px-4 py-12 font-display flex flex-col items-center gap-20 overflow-hidden">
      <section className="text-center animate-fade-in relative">
        <motion.div
          className="absolute inset-0 -z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-cyan-400 rounded-full opacity-30 blur-md"
              style={{
                width: "12px",
                height: "12px",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
        <h1 className="text-6xl font-bold text-cyan-400 drop-shadow-glow">
          DeltaLoadouts Bot
        </h1>
        <p className="mt-4 text-lg max-w-xl text-white/80">
          A futuristic Discord bot to manage your in-game weapon builds with
          power and precision.
        </p>
      </section>

      {/* ✅ Static Bot Status */}
      <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-green-500/30 bg-green-900/30 text-green-300 shadow-md text-sm animate-fade-in">
        <span className="w-2.5 h-2.5 rounded-full animate-pulse bg-green-400"></span>
        Bot is <span className="font-semibold">Online</span>
      </div>

      <motion.h2
        className="text-4xl font-bold text-white text-center -mt-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Bot Features
      </motion.h2>

      <section className="w-full max-w-6xl grid gap-6 md:grid-cols-3 px-2">
        {features.map((feature, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggle(index)}
              className={`glass-card border bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-lg bg-opacity-20 ${feature.border} cursor-pointer transition-all duration-300 p-4 flex flex-col items-center text-center hover:ring-2 hover:ring-white/10 h-full overflow-hidden`}
              title="Click to expand feature details"
            >
              <h2
                className={`${feature.color} text-xl font-semibold mb-2 flex items-center w-full justify-between`}
              >
                <span className="text-2xl text-left">
                  {feature.title.slice(0, 2)}
                </span>
                <span className="flex-1 text-center">
                  {feature.title.slice(2)}
                </span>
                <motion.span
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-white" />
                </motion.span>
              </h2>
              <AnimatePresence mode="wait" initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full overflow-hidden text-white/90"
                  >
                    <p className="text-sm px-2 pb-1">{feature.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </section>

      <div className="mt-4">
        <a
          href="https://discord.com/oauth2/authorize?client_id=1375408848428466227&permissions=8&scope=bot"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block px-10 py-5 text-xl bg-cyan-600 text-white rounded-2xl shadow-lg hover:bg-cyan-500 transition animate-pulse ring-4 ring-cyan-400 ring-offset-2 ring-offset-black drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        >
          🚀 Invite Bot
        </a>
      </div>

      <footer className="text-white/50 text-sm mt-20">
        Built with ❤️ by BuildsByRawK •{" "}
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition"
        >
          Join our Discord
        </a>
      </footer>
    </main>
  );
}
