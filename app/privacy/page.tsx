import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How this website handles your registration details.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-3xl space-y-5 leading-7 text-slate-600">
        <p className="eyebrow">Your information, handled clearly</p>
        <h1 className="text-4xl font-bold text-navy">Privacy policy</h1>
        <p>This website collects only what is needed to answer your registration request: your name, email address, phone number, chosen package, training format, the age group of your intended learners, and an optional message.</p>
        <h2 className="pt-2 text-2xl font-bold text-navy">How your details are used</h2>
        <p>When you submit the registration form, your details are sent to both contact email addresses through Resend so we can reply to your request and organise training groups. The website does not save requests in a database; Resend processes the details to deliver the email.</p>
        <h2 className="pt-2 text-2xl font-bold text-navy">Storage, cookies and tracking</h2>
        <p>This website does not store your details in your browser and does not use advertising or analytics cookies.</p>
        <h2 className="pt-2 text-2xl font-bold text-navy">Your choices</h2>
        <p>You can ask us to correct or delete the details you sent us at {site.emails.map((email, index) => <span key={email}>{index > 0 ? " or " : ""}<a className="text-brand underline" href={`mailto:${email}`}>{email}</a></span>)}.</p>
      </div>
    </Section>
  );
}
