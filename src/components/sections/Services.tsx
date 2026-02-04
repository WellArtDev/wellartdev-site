import Link from "next/link";

const services = [
  {
    title: "Website",
    desc: "Company profile, landing page, e-commerce—dibuat cepat, SEO-friendly, dan conversion-ready.",
    items: ["Landing page ads", "Company profile", "E-commerce", "SEO on-page"],
  },
  {
    title: "App / MVP",
    desc: "Web app / mobile app untuk startup & company. Rapi, scalable, dan gampang di-iterasi.",
    items: ["MVP build", "Dashboard/admin", "Integrasi API", "Maintenance"],
  },
  {
    title: "Digital Marketing",
    desc: "Bikin traffic yang tepat dan ukur hasilnya. Dari tracking sampai campaign.",
    items: ["Analytics setup", "Meta/Google Ads prep", "Content system", "Conversion audit"],
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-6 py-14 sm:px-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Layanan</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            Full service, tapi tetap jelas. Kamu tinggal pilih fokusnya—kita yang beresin eksekusinya.
          </p>
        </div>
        <Link href="#contact" className="hidden text-sm font-semibold text-white/80 hover:text-white sm:block">
          Tanya paket →
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-lg font-semibold text-white">{s.title}</p>
            <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {s.items.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-white/60" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
