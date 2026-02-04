import Image from "next/image";
import Link from "next/link";

import { Splash } from "@/components/Splash";
import { Background } from "@/components/Background";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Proof } from "@/components/sections/Proof";
import { CTA } from "@/components/sections/CTA";

export default function HomeEn() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <Splash />
      <Background />
      <div className="relative mx-auto max-w-6xl px-6 py-8 sm:px-10">
        <BackToTop />

        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur">
              <Image src="/wellartdev-logo.svg" alt="WellArt.Dev logo" width={44} height={44} className="h-10 w-10" />
            </div>
            <div className="text-base font-semibold tracking-wide text-white">
              <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">
                WellArt.Dev
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-4 text-sm text-white/70">
            <a className="hover:text-white" href="#services">
              Services
            </a>
            <a className="hover:text-white" href="/en/portfolio">
              Portfolio
            </a>
            <a className="hover:text-white" href="/en/blog">
              Blog
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
            <Link
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
              href="/"
              aria-label="Ganti ke Bahasa Indonesia"
              title="Bahasa Indonesia"
            >
              <Image src="/flags/id.svg" alt="Bahasa Indonesia" width={20} height={20} className="h-5 w-5" />
            </Link>
          </nav>
        </header>

        <main className="mt-8 space-y-6">
          <Hero />
          <Services />
          <Proof />
          <CTA />
        </main>

        <footer className="mt-10 border-t border-white/10 py-8 text-xs text-white/50">© {new Date().getFullYear()} WellArt.Dev.</footer>
      </div>
    </div>
  );
}
