export const site = {
  name: "WellArt.Dev",
  tagline: "Digital Excellence & Web Development Agency",
  whatsapp: {
    // Provided by WellA (Indonesia)
    phoneE164: "+62817892468",
    waMe: "https://wa.me/62817892468",
    prefill:
      "Halo WellArt.Dev! Saya tertarik konsultasi soal (website/app/marketing). Boleh info paket & estimasi?",
  },
} as const;

export function whatsappHref() {
  const text = encodeURIComponent(site.whatsapp.prefill);
  return `${site.whatsapp.waMe}?text=${text}`;
}
