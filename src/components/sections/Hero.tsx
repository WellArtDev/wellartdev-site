import { ButtonLink } from "@/components/ui/ButtonLink";
import { site, whatsappHref } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-950 to-indigo-950/40 px-6 py-14 sm:px-10">
      <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_20%_0%,black,transparent)]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,.35),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,.25),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <p className="text-sm text-white/70">{site.tagline}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Website & produk digital yang bukan cuma keren—tapi beneran bantu konversi & sales.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Buat UMKM, personal brand, startup, sampai company: kita bangun experience yang premium, cepat, dan rapi.
          Fokusnya jelas: bikin orang percaya, klik, lalu jadi customer.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={whatsappHref()} variant="primary">
            Chat WhatsApp
          </ButtonLink>
          <ButtonLink href="#services" variant="secondary">
            Lihat layanan
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            { title: "Premium design + trust", desc: "Visual kuat, rapi, dan bikin yakin (bukan template vibes)." },
            { title: "Conversion-first", desc: "Struktur CTA, copy, dan UX yang diarahkan ke leads/penjualan." },
            { title: "Rapi & siap scale", desc: "Tech stack modern, performa oke, dan gampang dikembangin." },
          ].map((x) => (
            <div key={x.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">{x.title}</p>
              <p className="mt-1 text-sm text-white/70">{x.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-white/50">
          Prefer ngobrol dulu? Langsung WhatsApp aja: {site.whatsapp.phoneE164}
        </p>
      </div>
    </section>
  );
}
