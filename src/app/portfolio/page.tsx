import Link from "next/link";

const items = [
  {
    title: "Mipro Indonesia",
    desc: "Website produk & katalog (audio equipment / distributor).",
    href: "https://mipro.co.id/",
    external: true,
  },
  {
    title: "Agra Surya Energy",
    desc: "Company profile renewable energy.",
    href: "https://agrasuryaenergy.com/",
    external: true,
  },
  {
    title: "Kantor Imigrasi Nunukan",
    desc: "Website instansi: nunukan.imigrasi.go.id",
    href: "https://nunukan.imigrasi.go.id/",
    external: true,
  },
  {
    title: "Template Case Study",
    desc: "Template sudah siap—tinggal isi project kamu biar jadi case study yang jualan.",
    href: "/portfolio/case-study-template",
    external: false,
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
          {items.map((x) => {
            const card = (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-lg font-semibold">{x.title}</div>
                  {x.external ? <span className="text-xs text-white/50">external</span> : null}
                </div>
                <div className="mt-2 text-sm text-white/70">{x.desc}</div>
              </div>
            );

            return x.external ? (
              <a key={x.title} href={x.href} target="_blank" rel="noreferrer" className="block">
                {card}
              </a>
            ) : (
              <Link key={x.title} href={x.href} className="block">
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
