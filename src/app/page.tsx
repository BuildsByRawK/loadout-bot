export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center px-4 py-10 font-display">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-glow">
        🎮 DeltaLoadouts Bot by BuildsByRawK
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center max-w-xl text-gray-400">
        A sleek Discord bot to browse, save, and manage custom loadouts for Delta Force.
      </p>

      <div className="space-y-6 w-full max-w-md text-center animate-fade-in">
        <div className="p-5 bg-[#1a1a1a] rounded-xl shadow-lg border border-blue-500/30">
          <h2 className="font-semibold text-xl text-blue-400">🔍 Browse Loadouts</h2>
          <p className="text-gray-300">
            Use the <code className="text-blue-300">/loadouts</code> command to explore game builds by mode, tier, and category.
          </p>
        </div>

        <div className="p-5 bg-[#1a1a1a] rounded-xl shadow-lg border border-blue-500/30">
          <h2 className="font-semibold text-xl text-blue-400">⭐ Favorites</h2>
          <p className="text-gray-300">
            Add and manage your favorite builds with interactive buttons right in Discord.
          </p>
        </div>

        <div className="p-5 bg-[#1a1a1a] rounded-xl shadow-lg border border-blue-500/30">
          <h2 className="font-semibold text-xl text-blue-400">🗺️ Map Links</h2>
          <p className="text-gray-300">
            Quick access to useful map resources with <code className="text-blue-300">/maps</code>.
          </p>
        </div>
      </div>

      <a
        href="https://discord.com/oauth2/authorize?client_id=1375408848428466227&scope=bot+applications.commands"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition text-lg font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/60 border border-blue-400"
      >
        ➕ Invite the Bot
      </a>
    </main>
  );
}
