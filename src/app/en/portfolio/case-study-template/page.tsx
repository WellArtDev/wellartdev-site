import Link from "next/link";

export default function CaseStudyTemplateEn() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10">
        <Link href="/en/portfolio" className="text-sm text-white/70 hover:text-white">
          ← Back to portfolio
        </Link>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight">Case Study Template</h1>
        <p className="mt-3 text-sm text-white/70">Copy this structure for each project. Focus on outcomes, not just features.</p>

        <div className="prose prose-invert mt-8 max-w-none prose-p:text-white/80">
          <h2>Summary</h2>
          <ul>
            <li>
              <strong>Client:</strong> (name/type)
            </li>
            <li>
              <strong>Goal:</strong> (leads / sales / trust / efficiency)
            </li>
            <li>
              <strong>Timeline:</strong> (e.g., 2 weeks)
            </li>
            <li>
              <strong>Stack:</strong> (e.g., Next.js, Tailwind, GA4)
            </li>
          </ul>

          <h2>Problem</h2>
          <p>Explain the core pain (slow site, low trust, unclear CTA, traffic without conversion, etc.).</p>

          <h2>Strategy</h2>
          <ul>
            <li>Positioning & messaging</li>
            <li>Page structure + CTA flow</li>
            <li>Design system (premium & consistent)</li>
            <li>Tracking (events, form submits, WA clicks)</li>
          </ul>

          <h2>Execution</h2>
          <p>Before/after screenshots, key UX decisions that improved trust.</p>

          <h2>Results</h2>
          <ul>
            <li>+X% leads / bookings</li>
            <li>+Y% conversion rate</li>
            <li>Green Core Web Vitals</li>
          </ul>

          <h2>Next</h2>
          <p>Next iterations: SEO content, ads landing pages, funnel optimization, etc.</p>
        </div>
      </div>
    </div>
  );
}
