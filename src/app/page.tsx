"use client";

export default function Home() {
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
        <div className="glass-card border border-cyan-500/40">
          <h2 className="text-cyan-400 text-xl font-semibold mb-2">🔍 Browse Loadouts</h2>
          <p className="text-white/90">Explore by game mode, tier, and weapon category using intuitive slash commands.</p>
        </div>
        <div className="glass-card border border-pink-500/40">
          <h2 className="text-pink-400 text-xl font-semibold mb-2">❤️ Favorite Builds</h2>
          <p className="text-white/90">Save and access your best builds instantly. Personalized and persistent.</p>
        </div>
        <div className="glass-card border border-yellow-300/40">
          <h2 className="text-yellow-300 text-xl font-semibold mb-2">⚙️ Interactive UI</h2>
          <p className="text-white/90">Responsive UI tailored for smooth use inside Discord chats.</p>
        </div>
      </section>

      <footer className="text-white/50 text-sm mt-20">
        Built with ❤️ by BuildsByRawK • <a href="https://discord.com" className="text-cyan-400 hover:text-cyan-300 transition">Join our Discord</a>
      </footer>
    </main>
  );
}
