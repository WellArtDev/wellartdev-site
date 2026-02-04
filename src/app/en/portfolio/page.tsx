import Image from "next/image";
import Link from "next/link";

function screenshot(url: string) {
  const u = encodeURIComponent(url);
  return `https://s0.wp.com/mshots/v1/${u}?w=1200`;
}

type Item = {
  title: string;
  category: string;
  desc: string;
  href: string;
  image: string | null;
  stack: string[];
};

const items: Item[] = [
  {
    title: "Mipro Indonesia",
    category: "E-commerce / Product Catalog",
    desc: "Product catalog website for audio equipment / distributor.",
    href: "/en/portfolio/mipro",
    image: screenshot("https://mipro.co.id/"),
    stack: ["WordPress", "WooCommerce", "SEO"],
  },
  {
    title: "Agra Surya Energy",
    category: "Company Profile",
    desc: "Company profile for a renewable energy company, focused on trust & credibility.",
    href: "/en/portfolio/agra-surya-energy",
    image: screenshot("https://agrasuryaenergy.com/"),
    stack: ["WordPress", "Landing Page", "Performance"],
  },
  {
    title: "Nunukan Immigration Office",
    category: "Government Website",
    desc: "Government site — clean, informative, and accessible.",
    href: "/en/portfolio/imigrasi-nunukan",
    image: screenshot("https://nunukan.imigrasi.go.id/"),
    stack: ["Web CMS", "Accessibility", "Content"],
  },
  {
    title: "Case Study Template",
    category: "Template",
    desc: "A ready-to-use structure to turn projects into sales-oriented case studies.",
    href: "/en/portfolio/case-study-template",
    image: null,
    stack: ["Copywriting", "Structure", "Results"],
  },
];

export default function PortfolioEn() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-white/60">OUR WORK</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Featured{" "}
              <span className="animate-gradient bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
              Selected projects showcasing our style: modern, clean, and focused on trust + outcomes.
            </p>
          </div>
          <Link href="/en" className="mt-1 shrink-0 text-sm text-white/70 hover:text-white">
            ← Back
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((x) => {
            const top = x.image ? (
              <div className="relative aspect-[16/9] w-full overflow-hidden">
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
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,.25),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,.18),transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
              </div>
            );

            const card = (
              <div className="glow-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(99,102,241,.08)] backdrop-blur transition hover:border-white/20 hover:bg-white/10">
                <div className="shrink-0">{top}</div>

                <div className="flex flex-1 flex-col p-5">
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-white/55">{x.category}</p>
                    <p className="mt-2 text-lg font-semibold leading-snug">{x.title}</p>
                  </div>

                  <p className="mt-3 line-clamp-3 text-sm text-white/70">{x.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {x.stack.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto" />
                </div>
              </div>
            );

            return (
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
