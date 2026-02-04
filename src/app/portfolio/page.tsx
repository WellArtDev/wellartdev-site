import Image from "next/image";
import Link from "next/link";

function screenshot(url: string) {
  // WordPress mShots: quick website thumbnails.
  // Docs: https://developer.wordpress.com/docs/mshots/
  const u = encodeURIComponent(url);
  return `https://s0.wp.com/mshots/v1/${u}?w=1200`;
}

const items = [
  {
    title: "Mipro Indonesia",
    category: "E-commerce / Product Catalog",
    desc: "Website produk & katalog untuk audio equipment / distributor.",
    href: "https://mipro.co.id/",
    external: true,
    image: screenshot("https://mipro.co.id/"),
    stack: ["WordPress", "WooCommerce", "SEO"],
  },
  {
    title: "Agra Surya Energy",
    category: "Company Profile",
    desc: "Company profile untuk renewable energy company, fokus trust & kredibilitas.",
    href: "https://agrasuryaenergy.com/",
    external: true,
    image: screenshot("https://agrasuryaenergy.com/"),
    stack: ["WordPress", "Landing Page", "Performance"],
  },
  {
    title: "Kantor Imigrasi Nunukan",
    category: "Government Website",
    desc: "Website instansi: nunukan.imigrasi.go.id — informatif, rapi, dan mudah diakses.",
    href: "https://nunukan.imigrasi.go.id/",
    external: true,
    image: screenshot("https://nunukan.imigrasi.go.id/"),
    stack: ["Web CMS", "Accessibility", "Content"],
  },
  {
    title: "Template Case Study",
    category: "Template",
    desc: "Template siap pakai biar kamu tinggal isi project dan jadi case study yang jualan.",
    href: "/portfolio/case-study-template",
    external: false,
    image: null,
    stack: ["Copywriting", "Structure", "Results"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-white/60">OUR WORK</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Featured <span className="text-cyan-300">Portfolio</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
              Pilihan project yang nunjukin gaya kerja kita: modern, rapi, dan fokus ke trust + hasil.
            </p>
          </div>
          <Link href="/" className="mt-1 shrink-0 text-sm text-white/70 hover:text-white">
            ← Kembali
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((x) => {
            const top = x.image ? (
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={x.image}
                  alt={`Screenshot ${x.title}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/25 to-transparent" />
              </div>
            ) : (
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,.25),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,.18),transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
              </div>
            );

            const card = (
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(99,102,241,.08)] backdrop-blur transition hover:border-white/20 hover:bg-white/10">
                {top}

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold tracking-widest text-white/55">{x.category}</p>
                      <p className="mt-2 text-xl font-semibold leading-snug">{x.title}</p>
                    </div>
                    {x.external ? <span className="text-xs text-white/45">external</span> : null}
                  </div>

                  <p className="mt-3 text-sm text-white/70">{x.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {x.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-white/15">
                      View <span className="text-white/70">→</span>
                    </span>
                  </div>
                </div>
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
