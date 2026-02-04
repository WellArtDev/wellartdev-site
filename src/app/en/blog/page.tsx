import Link from "next/link";

const posts: Array<{ title: string; date: string; desc: string }> = [
  {
    title: "(Coming soon) How to build a website that actually converts",
    date: "2026-02-04",
    desc: "Placeholder draft. We'll publish SEO-friendly articles for SMEs, startups, and personal brands.",
  },
];

export default function BlogEn() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
          <Link href="/en" className="text-sm text-white/70 hover:text-white">
            ← Back
          </Link>
        </div>

        <p className="mt-3 max-w-2xl text-sm text-white/70">
          Content to help your website not only look good—but convert into leads and sales.
        </p>

        <div className="mt-8 grid gap-4">
          {posts.map((p) => (
            <div key={p.title} className="glow-card rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs font-semibold tracking-widest text-white/55">{p.date}</div>
              <div className="mt-2 text-lg font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-white/70">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
