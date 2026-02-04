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
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold tracking-wide text-white">
              WellArt.Dev
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

        {/* Reuse sections for now; we'll translate copy next */}
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
