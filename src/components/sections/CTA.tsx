import { ButtonLink } from "@/components/ui/ButtonLink";
import { whatsappHref } from "@/lib/site";

export function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 pb-20 pt-10 sm:px-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Ngobrol bentar yuk</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/70">
          Kamu ceritain goal-nya (leads, sales, branding, atau efisiensi). Aku bantu mapping: scope, timeline, dan rencana eksekusi.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={whatsappHref()} variant="primary">
            Chat WhatsApp
          </ButtonLink>
          <ButtonLink href="/portfolio" variant="secondary">
            Lihat portfolio
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
