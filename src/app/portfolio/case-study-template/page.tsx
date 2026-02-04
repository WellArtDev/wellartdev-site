import Link from "next/link";

export default function CaseStudyTemplatePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10">
        <Link href="/portfolio" className="text-sm text-white/70 hover:text-white">
          ← Kembali ke portfolio
        </Link>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight">Template Case Study</h1>
        <p className="mt-3 text-sm text-white/70">
          Copy-paste struktur ini untuk setiap project. Fokus ke hasil, bukan cuma fitur.
        </p>

        <div className="prose prose-invert mt-8 max-w-none prose-p:text-white/80">
          <h2>Ringkasan</h2>
          <ul>
            <li><strong>Client:</strong> (nama/jenis bisnis)</li>
            <li><strong>Target:</strong> (leads / sales / trust / efisiensi)</li>
            <li><strong>Timeline:</strong> (mis. 2 minggu)</li>
            <li><strong>Stack:</strong> (mis. Next.js, Tailwind, GA4)</li>
          </ul>

          <h2>Masalah</h2>
          <p>Jelaskan pain utama (mis. website lambat, nggak dipercaya, CTA nggak jelas, traffic ada tapi nggak convert).</p>

          <h2>Strategi</h2>
          <ul>
            <li>Positioning & messaging</li>
            <li>Struktur halaman + CTA flow</li>
            <li>Design system (premium & konsisten)</li>
            <li>Tracking (event, form submit, WA click)</li>
          </ul>

          <h2>Eksekusi</h2>
          <p>Screenshot before/after, highlight keputusan desain/UX yang ngaruh ke trust.</p>

          <h2>Hasil</h2>
          <ul>
            <li>+X% leads / booking</li>
            <li>+Y% conversion rate</li>
            <li>Core Web Vitals hijau</li>
          </ul>

          <h2>Next</h2>
          <p>Apa iterasi berikutnya: SEO content, landing page ads, optimasi funnel, dsb.</p>
        </div>
      </div>
    </div>
  );
}
