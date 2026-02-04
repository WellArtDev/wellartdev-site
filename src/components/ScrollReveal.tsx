"use client";

/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function ScrollReveal({ children, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduced) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${inView ? "reveal--in" : ""} ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}
