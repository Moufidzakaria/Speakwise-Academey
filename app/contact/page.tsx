import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import RegistrationForm from "@/components/RegistrationForm";
import { Button, Card, Section } from "@/components/ui";
import { defaultWaMessage, site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact and Registration",
  description: "Register for English teaching training in Fès, Morocco. Contact us by form, email, phone or WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section soft>
      <p className="eyebrow mb-4">Your next step starts here</p>
      <h1 className="text-4xl font-bold md:text-5xl">Contact and registration</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{site.groupRule}</p>

      <div className="mt-10 grid items-start gap-6 lg:grid-cols-[0.85fr_1.4fr] lg:gap-8">
        <Card>
          <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-brand"><MessageCircle size={22} aria-hidden="true" /></span>
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-3"><Mail className="mt-1 shrink-0 text-brand" size={19} aria-hidden="true" /><div className="space-y-1">{site.emails.map((email) => <a key={email} href={`mailto:${email}`} className="block break-all text-slate-600 transition hover:text-brand">{email}</a>)}</div></li>
            <li className="flex gap-3"><Phone className="mt-1 shrink-0 text-brand" size={19} aria-hidden="true" /><a href={site.phoneHref} className="text-slate-600 transition hover:text-brand">{site.phone}</a></li>
            <li className="flex gap-3"><MapPin className="mt-1 shrink-0 text-brand" size={19} aria-hidden="true" /><span className="text-slate-600">{site.city}</span></li>
          </ul>
          <div className="mt-6">
            <Button href={waLink(defaultWaMessage)} external variant="accent"><MessageCircle size={18} className="mr-2" aria-hidden="true" />Message on WhatsApp</Button>
          </div>
        </Card>

        <Card>
          <h2 className="mb-6 text-2xl font-bold">Registration request</h2>
          <RegistrationForm />
        </Card>
      </div>
    </Section>
  );
}
