import Link from "next/link";

const items = [
  {
    title: "(Coming soon) Case Study #1",
    desc: "Template sudah siap—tinggal isi project pertamamu.",
    href: "/portfolio/case-study-template",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">Portfolio</h1>
          <Link href="/" className="text-sm text-white/70 hover:text-white">
            ← Kembali
          </Link>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-white/70">
          Di sini nanti kita tampilkan case study yang fokus ke hasil (lead, sales, trust). Untuk sekarang aku siapin struktur dulu.
        </p>

        <div className="mt-8 grid gap-4">
          {items.map((x) => (
            <Link
              key={x.title}
              href={x.href}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
            >
              <div className="text-lg font-semibold">{x.title}</div>
              <div className="mt-2 text-sm text-white/70">{x.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
