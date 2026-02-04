import Image from "next/image";
import Link from "next/link";

const screenshot = "https://s0.wp.com/mshots/v1/https%3A%2F%2Fmipro.co.id%2F?w=1600";

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-10">
        <Link href="/en/portfolio" className="text-sm text-white/70 hover:text-white">
          ← Back
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">Mipro Indonesia</h1>
        <p className="mt-2 text-sm text-white/70">E-commerce / Product Catalog</p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="relative aspect-[16/9] w-full">
            <Image src={screenshot} alt="Screenshot Mipro Indonesia" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          </div>
          <div className="p-6">
            <p className="text-sm text-white/75">
              Product catalog website for audio equipment / distributor.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["WordPress", "WooCommerce", "SEO"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
