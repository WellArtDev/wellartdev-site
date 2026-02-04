import Link from "next/link";

const posts: Array<{ title: string; date: string; desc: string }> = [
  {
    title: "(Coming soon) Cara bikin website yang beneran konversi",
    date: "2026-02-04",
    desc: "Draft placeholder. Nanti kita isi dengan artikel yang SEO-friendly buat UMKM & personal brand.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
          <Link href="/" className="text-sm text-white/70 hover:text-white">
            ← Kembali
          </Link>
        </div>

        <p className="mt-3 max-w-2xl text-sm text-white/70">
          Konten yang ngebantu UMKM, startup, dan personal brand biar website-nya nggak cuma tampil keren, tapi juga convert.
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
