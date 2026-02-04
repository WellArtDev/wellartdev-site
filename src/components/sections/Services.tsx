import Link from "next/link";

function Icon({ name }: { name: "web" | "app" | "system" | "marketing" }) {
  if (name === "web") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6.5h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11A2.5 2.5 0 0 1 6.5 4Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M7 9.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "app") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 2h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M10 5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 18h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "system") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2.75 3.5 7.5v9L12 21.25l8.5-4.75v-9L12 2.75Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M12 12l8.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 12v9.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 12 3.5 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 19V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 19V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 19V3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 9h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 7h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const services = [
  {
    icon: "web" as const,
    title: "Website",
    desc: "Company profile, landing page, e-commerce—dibuat cepat, SEO-friendly, dan conversion-ready.",
    items: ["Landing page ads", "Company profile", "E-commerce", "SEO on-page"],
  },
  {
    icon: "app" as const,
    title: "App / MVP",
    desc: "Web app / mobile app untuk startup & company. Rapi, scalable, dan gampang di-iterasi.",
    items: ["MVP build", "Dashboard/admin", "Integrasi API", "Maintenance"],
  },
  {
    icon: "system" as const,
    title: "System Development",
    desc: "Sistem internal untuk operasional: ERP ringan, dashboard, integrasi, automasi, dan workflow yang rapi.",
    items: ["Internal dashboard", "Workflow automation", "Integrasi API", "Reporting"],
  },
  {
    icon: "marketing" as const,
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

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="glow-card rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/20 text-white/80">
                <Icon name={s.icon} />
              </div>
              <p className="text-lg font-semibold text-white">{s.title}</p>
            </div>
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
