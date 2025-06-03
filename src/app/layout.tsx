// src/app/layout.tsx
import "./../styles/globals.css";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata = {
  title: "DeltaLoadouts Bot",
  description: "A sleek Discord bot for managing game builds",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-black text-white">
      <body className={`${orbitron.variable} font-display antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
