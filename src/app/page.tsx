export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center">🎮 Loadout Bot by BuildsByRawK</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        A sleek Discord bot to browse, save, and manage custom loadouts for your favorite games.
      </p>

      <div className="space-y-4 w-full max-w-md text-center">
        <div className="p-4 bg-white rounded-xl shadow">
          <h2 className="font-semibold text-xl">🔍 Browse Loadouts</h2>
          <p>Use the <code>/loadouts</code> command to explore game builds by mode, tier, and category.</p>
        </div>

        <div className="p-4 bg-white rounded-xl shadow">
          <h2 className="font-semibold text-xl">⭐ Favorites</h2>
          <p>Add and manage your favorite builds with interactive buttons right in Discord.</p>
        </div>

        <div className="p-4 bg-white rounded-xl shadow">
          <h2 className="font-semibold text-xl">🗺️ Map Links</h2>
          <p>Quick access to useful map resources with <code>/maps</code>.</p>
        </div>
      </div>

      <a
        href="https://discord.com/oauth2/authorize?client_id=1375408848428466227&scope=bot+applications.commands"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        ➕ Invite the Bot
      </a>
    </main>
  );
}
