import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  BookOpenCheck,
  Check,
  GraduationCap,
  MessageCircle,
  MonitorSmartphone,
  Sparkles,
  Users,
} from "lucide-react";
import { Button, Card, Notice, Section, SectionTitle } from "@/components/ui";
import Faq from "@/components/Faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "English Teaching Training in Fès, Morocco | Pedagogy & Classroom Management" },
  alternates: { canonical: "/" },
};

const audience = [
  "People interested in teaching English",
  "Future English tutors",
  "Private English teachers",
  "Students and beginners interested in education",
  "Anyone who wants stronger teaching and classroom management skills",
];

const benefits = [
  "Understand how children and teenagers learn",
  "Communication and interaction techniques",
  "Classroom management",
  "Teaching methods adapted to different age groups",
  "Practical exercises and activities",
  "Final evaluation and professional guidance",
];

const steps = [
  { t: "Send your request", d: "Fill in the registration form or message us on WhatsApp." },
  { t: "Confirm your reservation", d: "We contact you to confirm your place. Sending the form alone does not confirm a seat." },
  { t: "Start with your group", d: site.groupRule },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0" />
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-36 top-8 h-[28rem] w-[28rem] rounded-full bg-purple/15 blur-3xl" />
        <div className="section-inner relative grid min-h-[620px] items-center gap-12 py-16 md:min-h-[690px] md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:py-24">
          <div className="hero-arrive max-w-2xl">
            <p className="eyebrow mb-6 text-blue-200">
              <span className="h-2 w-2 rounded-full bg-emerald shadow-[0_0_14px_rgba(34,197,94,0.8)]" />
              Practical English teacher training
            </p>
            <p className="mb-4 text-sm font-medium text-white/60">Fès, Morocco <span className="mx-2 text-white/30">/</span> Face-to-face &amp; online</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl md:text-[3.6rem] lg:text-[4.15rem]">
              Teach with confidence. <span className="bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 bg-clip-text text-transparent">Inspire what&apos;s next.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Turn your interest in English into practical teaching skills. Build confidence in pedagogy, didactics, communication, and classroom management.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="accent">Join the Training <ArrowRight size={18} aria-hidden="true" /></Button>
              <Button href="/services" className="!border-white/20 !bg-white/5 !text-white hover:!border-white/40 hover:!bg-white/10">
                Explore the Program
              </Button>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/65">
              <span className="inline-flex items-center gap-2"><Check size={16} className="text-emerald" aria-hidden="true" /> Practical, focused sessions</span>
              <span className="inline-flex items-center gap-2"><Check size={16} className="text-emerald" aria-hidden="true" /> Learn in person or online</span>
            </div>
          </div>

          <div className="hero-arrive hero-arrive-delay relative mx-auto w-full max-w-[500px] md:ml-auto">
            <div aria-hidden="true" className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-brand/30 blur-3xl" />
            <div aria-hidden="true" className="absolute -right-4 bottom-12 h-36 w-36 rounded-full bg-purple/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-5 shadow-[0_35px_100px_-40px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-7">
              <div aria-hidden="true" className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-brand/30 to-purple/30 blur-2xl" />
              <div className="relative flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">Your next chapter</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Open for registration
                </span>
              </div>
              <div className="relative mt-8 rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple p-[1px]">
                <div className="rounded-[calc(1.5rem-1px)] bg-[#111c33]/90 p-6 sm:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-200 ring-1 ring-white/10">
                    <BookOpenCheck size={27} aria-hidden="true" />
                  </div>
                  <h2 className="mt-7 max-w-xs font-heading text-2xl font-bold leading-snug sm:text-3xl">The skills behind every great classroom.</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">Practical ideas for understanding learners, communicating clearly, and leading with confidence.</p>
                  <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                    <div className="flex -space-x-2">
                      <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#111c33] bg-blue-400 text-xs font-bold text-navy">P</span>
                      <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#111c33] bg-purple-300 text-xs font-bold text-navy">D</span>
                      <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#111c33] bg-emerald-300 text-xs font-bold text-navy">C</span>
                    </div>
                    <p className="text-xs leading-5 text-white/65">Pedagogy <span className="text-white/30">·</span> Didactics <span className="text-white/30">·</span> Classroom skills</p>
                  </div>
                </div>
              </div>
              <div className="relative mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="font-heading text-2xl font-bold">04</p>
                  <p className="mt-1 text-xs text-white/55">Focused sessions</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="font-heading text-2xl font-bold">02</p>
                  <p className="mt-1 text-xs text-white/55">Ways to take part</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-white/15 bg-[#17243c] px-4 py-3 shadow-xl sm:flex">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald/15 text-emerald"><GraduationCap size={21} aria-hidden="true" /></span>
              <span><span className="block text-xs font-semibold">Grow with purpose</span><span className="mt-0.5 block text-[11px] text-white/50">Start with one practical step</span></span>
            </div>
          </div>
        </div>
        <a href="#training" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-white/40 transition hover:text-white/80 md:flex">
          Discover the training <ArrowDown size={14} aria-hidden="true" />
        </a>
      </section>

      <Section soft id="training">
        <SectionTitle
          title="Training for the people who teach"
          intro="This program does not teach English to children. It trains future English teachers, tutors and education enthusiasts to understand pedagogy, didactics and classroom management."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-brand"><Users size={21} aria-hidden="true" /></span>
              <h3 className="text-xl font-bold">Who this program is for</h3>
            </div>
            <ul className="space-y-3">{audience.map((a) => <li key={a} className="flex gap-3 leading-6 text-slate-600"><Check className="mt-1 shrink-0 text-brand" size={18} aria-hidden="true" />{a}</li>)}</ul>
          </Card>
          <Card>
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-purple/10 text-purple"><Sparkles size={21} aria-hidden="true" /></span>
              <h3 className="text-xl font-bold">Key benefits</h3>
            </div>
            <ul className="space-y-3">{benefits.map((b) => <li key={b} className="flex gap-3 leading-6 text-slate-600"><Check className="mt-1 shrink-0 text-brand" size={18} aria-hidden="true" />{b}</li>)}</ul>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionTitle title="Training formats" intro="The same content, in the format that suits you." />
        <div className="grid gap-5 md:grid-cols-2">
          <Card><span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-brand"><Users aria-hidden="true" /></span><h3 className="text-xl font-bold">Face-to-face</h3><p className="mt-3 leading-7 text-slate-600">In-person sessions in Fès, Morocco. Complete package: <strong className="text-navy">199 MAD.</strong></p></Card>
          <Card><span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-purple/10 text-purple"><MonitorSmartphone aria-hidden="true" /></span><h3 className="text-xl font-bold">Online</h3><p className="mt-3 leading-7 text-slate-600">Follow the training from home. Complete package: <strong className="text-navy">150 MAD.</strong></p></Card>
        </div>
      </Section>

      <Section soft>
        <SectionTitle title="Pricing preview" intro="A clear first step, with a complete training option when you're ready." />
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <span className="eyebrow">Start here</span>
            <h3 className="mt-4 text-xl font-bold">Individual Introductory Session</h3>
            <p className="mt-4 font-heading text-4xl font-bold">50 <span className="text-base font-semibold text-slate-500">MAD</span></p>
            <p className="mt-3 leading-7 text-slate-600">An orientation session. It does not include the complete training program.</p>
          </Card>
          <Card highlight>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand"><Check size={14} aria-hidden="true" /> 4 sessions in total</span>
            <h3 className="mt-4 text-xl font-bold">Complete Training Package</h3>
            <p className="mt-4 font-heading text-3xl font-bold">199 <span className="text-sm font-semibold text-slate-500">MAD face-to-face</span></p>
            <p className="mt-1 font-heading text-3xl font-bold">150 <span className="text-sm font-semibold text-slate-500">MAD online</span></p>
            <p className="mt-3 leading-7 text-slate-600">Three structured sessions plus one additional free session on Pedagogy and Didactics.</p>
          </Card>
        </div>
        <div className="mt-8"><Button href="/services" variant="outline">Compare packages <ArrowRight size={17} aria-hidden="true" /></Button></div>
      </Section>

      <Section>
        <SectionTitle title="How registration works" intro="A simple, personal process from first message to confirmed place." />
        <ol className="grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t}>
              <Card>
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand to-purple font-heading font-bold text-white shadow-lg shadow-brand/20" aria-hidden="true">{i + 1}</span>
                <h3 className="text-lg font-bold">{s.t}</h3>
                <p className="mt-3 leading-7 text-slate-600">{s.d}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section soft>
        <SectionTitle title="Frequently asked questions" intro="Everything you need to know before you take your next step." />
        <Faq />
      </Section>

      <Section>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-center text-white shadow-[0_30px_90px_-45px_rgba(16,24,40,0.8)] sm:px-12 sm:py-16">
          <div aria-hidden="true" className="hero-glow absolute inset-0 -z-10" />
          <div aria-hidden="true" className="absolute -right-20 -top-24 -z-10 h-64 w-64 rounded-full bg-purple/20 blur-3xl" />
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-blue-200"><MessageCircle size={23} aria-hidden="true" /></span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold sm:text-4xl">Ready to start teaching with confidence?</h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/65">{site.groupRule}</p>
          <div className="mt-8 flex justify-center"><Button href="/contact" variant="accent">Join the Training <ArrowRight size={18} aria-hidden="true" /></Button></div>
        </div>
        <div className="mt-6"><Notice>Certificate of Participation (attestation of participation) is subject to attendance and completion requirements. It is not an official accreditation.</Notice></div>
      </Section>
    </>
  );
}
