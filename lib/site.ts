export const site = {
  name: "English Teaching Training",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "ayoubbouzar78@gmail.com",
  phone: "+212 713 597 320",
  phoneHref: "tel:+212713597320",
  whatsapp: "212713597320",
  city: "Fès, Morocco",
  groupRule:
    "Each training group starts once 10 participants have confirmed their reservations.",
} as const;

export function waLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const defaultWaMessage =
  "Hello, I would like to register for the English teaching training.";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const packageOptions = [
  { id: "intro", label: "Individual Introductory Session (50 MAD)" },
  { id: "complete", label: "Complete Training Package (199 MAD face-to-face / 150 MAD online)" },
] as const;

export const faqs = [
  { q: "Do you teach English to children?", a: "No. The program trains future teachers, tutors and education enthusiasts to teach English to learners aged 4 to 20." },
  { q: "When does a group start?", a: site.groupRule },
  { q: "How many sessions are in the complete package?", a: "Four in total: three structured training sessions plus one additional free session on Pedagogy and Didactics." },
  { q: "Can I train online?", a: "Yes. The complete package is available face-to-face (199 MAD) or online (150 MAD)." },
  { q: "Do I receive a certificate?", a: "You receive a Certificate of Participation (attestation of participation), subject to attendance and completion requirements. It is not an official accreditation." },
  { q: "Is my seat guaranteed when I send the form?", a: "No. Sending the form is a registration request. A place is confirmed only after we contact you and confirm your reservation." },
];
