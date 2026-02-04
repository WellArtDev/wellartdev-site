import Image from "next/image";

import { Splash } from "@/components/Splash";
import { Background } from "@/components/Background";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Proof } from "@/components/sections/Proof";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <Splash />
      <Background />
      <div className="relative mx-auto max-w-6xl px-6 py-8 sm:px-10">
        <BackToTop />
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur">
              <Image src="/wellartdev-logo.jpg" alt="WellArt.Dev logo" width={34} height={34} className="h-8 w-8" />
            </div>
            <div className="text-sm font-semibold tracking-wide text-white">
              <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">
                WellArt.Dev
              </span>
            </div>
          </div>
          <nav className="flex items-center gap-4 text-sm text-white/70">
            <a className="hover:text-white" href="#services">
              Layanan
            </a>
            <a className="hover:text-white" href="/portfolio">
              Portfolio
            </a>
            <a className="hover:text-white" href="#contact">
              Kontak
            </a>
          </nav>
        </header>

        <main className="mt-8 space-y-6">
          <Hero />
          <Services />
          <Proof />
          <CTA />
        </main>

        <footer className="mt-10 border-t border-white/10 py-8 text-xs text-white/50">
          © {new Date().getFullYear()} WellArt.Dev. Crafted for conversion.
        </footer>
      </div>
    </div>
  );
}
