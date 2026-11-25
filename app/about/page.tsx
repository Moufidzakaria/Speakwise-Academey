import type { Metadata } from "next";
import { Button, Card, Section, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: "Our mission: help future English teachers in Morocco build the pedagogical knowledge and practical skills to teach learners aged 4 to 20.",
  alternates: { canonical: "/about" },
};

const values = [
  ["Practical learning", "Exercises and activities you can use in a real classroom."],
  ["Patience and communication", "Clear, kind communication with learners of every age."],
  ["Professional development", "Skills and guidance that support your growth as a teacher."],
  ["Creativity", "Ideas that keep young learners curious and engaged."],
  ["Student-centered teaching", "Lessons built around what learners need."],
  ["Continuous improvement", "Reflecting, evaluating and getting better over time."],
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <p className="eyebrow mb-4">Our purpose &amp; approach</p>
        <h1 className="text-4xl font-bold md:text-5xl">About the training</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold">Our mission</h2>
            <p className="mt-3 leading-7 text-slate-600">To help future English teachers develop the pedagogical knowledge and practical skills needed to teach young learners effectively.</p>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold">Our vision</h2>
            <p className="mt-3 leading-7 text-slate-600">To contribute to better English education in Morocco by preparing more confident, responsible, and skilled teachers.</p>
          </Card>
        </div>
      </Section>

      <Section soft>
        <SectionTitle title="Our values" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(([t, d]) => (
            <li key={t}><Card><span className="mb-4 block h-1 w-10 rounded-full bg-gradient-to-r from-brand to-purple" /><h3 className="text-lg font-bold">{t}</h3><p className="mt-2 leading-7 text-slate-600">{d}</p></Card></li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionTitle title="Why child development matters" />
        <div className="max-w-3xl space-y-4 text-lg leading-8 text-slate-600">
          <p>A four-year-old, a ten-year-old and a seventeen-year-old do not learn in the same way. They differ in attention span, motivation, confidence and the way they interact with a teacher and with each other.</p>
          <p>Understanding these differences helps teachers choose the right language, activities, pace and classroom rules for each age group, from 4 to 20. This is why the training combines pedagogy, didactics and classroom management.</p>
        </div>
        <div className="mt-8"><Button href="/contact" variant="accent">Register Now</Button></div>
      </Section>
    </>
  );
}
