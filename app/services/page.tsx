import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Button, Card, Notice, Section, SectionTitle } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Training Packages and Prices",
  description: "English teaching training packages in Fès, Morocco: introductory session (50 MAD) and complete four-session training (199 MAD face-to-face, 150 MAD online).",
  alternates: { canonical: "/services" },
};

const intro = [
  "Introduction to the training methodology",
  "Initial guidance and orientation",
  "Identification of personal strengths",
  "Identification of areas for improvement",
  "Understanding the participant's objectives",
];

const complete = [
  "Three structured training sessions",
  "One additional FREE session dedicated to Pedagogy and Didactics",
  "Understanding how children and teenagers learn",
  "Communication and interaction techniques",
  "Classroom management",
  "Teaching methodologies adapted to different age groups",
  "Practical exercises and activities",
  "Identifying strengths and weaknesses",
  "Final evaluation and professional guidance",
  "Certificate of Participation (attestation of participation), subject to attendance and completion requirements",
];

const rows: [string, string, string][] = [
  ["Number of sessions", "1 introductory session", "4 sessions (3 + 1 free)"],
  ["Complete training program", "Not included", "Included"],
  ["Pedagogy and Didactics session", "Not included", "Included, free"],
  ["Final evaluation and guidance", "Not included", "Included"],
  ["Price", "50 MAD", "199 MAD face-to-face / 150 MAD online"],
];

export default function ServicesPage() {
  return (
    <>
      <Section>
        <p className="eyebrow mb-4">Your path to the classroom</p>
        <h1 className="text-4xl font-bold md:text-5xl">Training packages</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Start with an introductory session, or join the complete training in four sessions.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold">Individual Introductory Session</h2>
            <p className="mt-3 font-heading text-4xl font-bold">50 <span className="text-base font-semibold text-slate-500">MAD</span></p>
            <ul className="mt-6 space-y-3">{intro.map((i) => <li key={i} className="flex gap-3 leading-6 text-slate-600"><Check className="mt-1 shrink-0 text-brand" size={18} aria-hidden="true" />{i}</li>)}</ul>
            <div className="mt-5"><Notice>This is an introductory session and does not include the complete training program.</Notice></div>
            <div className="mt-6"><Button href="/contact?package=intro" variant="outline">Choose this package</Button></div>
          </Card>

          <Card highlight>
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand">FOUR sessions in total</span>
            <h2 className="mt-3 text-2xl font-bold">Complete Training Package</h2>
            <p className="mt-3 font-heading text-3xl font-bold">199 MAD <span className="text-sm font-semibold text-slate-500">face-to-face</span></p>
            <p className="font-heading text-3xl font-bold">150 MAD <span className="text-sm font-semibold text-slate-500">online</span></p>
            <ul className="mt-6 space-y-3">{complete.map((i) => <li key={i} className="flex gap-3 leading-6 text-slate-600"><Check className="mt-1 shrink-0 text-brand" size={18} aria-hidden="true" />{i}</li>)}</ul>
            <div className="mt-6"><Button href="/contact?package=complete">Choose this package</Button></div>
          </Card>
        </div>
      </Section>

      <Section soft>
        <SectionTitle title="Introductory session or complete package?" intro="The introductory session helps you understand the method and your own goals. The complete package is the full training, with practice, evaluation and guidance." />
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#11141c] shadow-card">
          <table className="w-full min-w-[560px] text-left">
            <caption className="sr-only">Comparison of the two packages</caption>
            <thead className="bg-navy text-white">
              <tr><th scope="col" className="px-5 py-3">&nbsp;</th><th scope="col" className="px-5 py-3">Introductory</th><th scope="col" className="px-5 py-3">Complete</th></tr>
            </thead>
            <tbody>
              {rows.map(([a, b, c]) => (
                <tr key={a} className="border-t border-white/10 even:bg-white/[0.03]">
                  <th scope="row" className="px-5 py-4 font-semibold">{a}</th>
                  <td className="px-5 py-4 text-slate-600">{b}</td>
                  <td className="px-5 py-4 font-medium text-slate-700">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6"><Notice>{site.groupRule}</Notice></div>
        <div className="mt-8"><Button href="/contact" variant="accent">Register Now</Button></div>
      </Section>
    </>
  );
}
