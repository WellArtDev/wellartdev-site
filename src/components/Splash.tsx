"use client";

/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react";

type Props = {
  brand?: string;
  ms?: number;
};

export function Splash({ brand = "WellArt.Dev", ms = 1200 }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const key = "wellartdev:splash_seen";
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    // Only show once per session.
    try {
      const seen = window.sessionStorage.getItem(key);
      if (seen) return;
      window.sessionStorage.setItem(key, "1");
    } catch {
      // If sessionStorage is blocked, fall back to showing once.
    }

    setShow(true);
    const t = window.setTimeout(() => setShow(false), reduced ? 50 : ms);
    return () => window.clearTimeout(t);
  }, [ms]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-zinc-950"
      aria-label="Loading"
      role="status"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,.40),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(236,72,153,.35),transparent_60%),radial-gradient(circle_at_50%_100%,rgba(34,211,238,.25),transparent_60%)]" />
      </div>
      <div className="relative w-full max-w-sm px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_0_80px_rgba(99,102,241,.15)] backdrop-blur">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500/80 via-fuchsia-500/70 to-cyan-400/60 p-[1px]">
            <div className="grid h-full w-full place-items-center rounded-2xl bg-zinc-950">
              <span className="text-sm font-semibold tracking-wide text-white">WA</span>
            </div>
          </div>
          <p className="mt-4 text-sm font-semibold tracking-wide text-white">{brand}</p>
          <p className="mt-1 text-xs text-white/60">Loading something shiny…</p>

          <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-1/2 animate-splash-slide rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
