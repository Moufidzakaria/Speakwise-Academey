"use client";

import { useEffect, useRef, useState } from "react";
import { packageOptions, site, waLink } from "@/lib/site";

type Errors = Partial<Record<"name" | "email" | "phone" | "consent", string>>;
type Ready = { wa: string; mail: string };

const field = "form-field";

export default function RegistrationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState<Ready | null>(null);

  // Preselect a package from /contact?package=intro|complete
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("package");
    const sel = formRef.current?.elements.namedItem("package");
    if (sel instanceof HTMLSelectElement && packageOptions.some((o) => o.id === p)) sel.value = p as string;
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const v = (k: string) => String(d.get(k) ?? "").trim();

    const next: Errors = {};
    if (v("name").length < 2) next.name = "Enter your full name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email"))) next.email = "Enter a valid email address.";
    if (!/^\+?[0-9 ]{8,16}$/.test(v("phone"))) next.phone = "Enter a valid phone number (digits, optional +).";
    if (!d.get("consent")) next.consent = "Accept to continue.";
    setErrors(next);
    if (Object.keys(next).length) { setReady(null); return; }

    const pkg = packageOptions.find((o) => o.id === v("package"))?.label ?? v("package");
    const message = [
      "Registration inquiry",
      `Name: ${v("name")}`,
      `Email: ${v("email")}`,
      `Phone: ${v("phone")}`,
      `Package: ${pkg}`,
      `Training format: ${v("format")}`,
      `Learners' age group: ${v("age")}`,
      `Message: ${v("message") || "-"}`,
    ].join("\n");

    setReady({
      wa: waLink(message),
      mail: `mailto:${site.email}?subject=${encodeURIComponent("Registration inquiry")}&body=${encodeURIComponent(message)}`,
    });
  }

  const Err = ({ id }: { id: keyof Errors }) =>
    errors[id] ? <span id={`${id}-err`} className="mt-1 block text-sm text-red-700">{errors[id]}</span> : null;

  return (
    <div>
      <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-5" aria-describedby="rule">
        <p id="rule" className="rounded-xl border border-brand/10 border-l-4 border-l-brand bg-blue-50/70 px-4 py-3 text-sm leading-6 text-slate-700">{site.groupRule}</p>

        <label className="block font-medium">Full name
          <input name="name" autoComplete="name" required maxLength={80} className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
          <Err id="name" />
        </label>
        <label className="block font-medium">Email address
          <input name="email" type="email" autoComplete="email" required maxLength={120} className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
          <Err id="email" />
        </label>
        <label className="block font-medium">Phone number
          <input name="phone" type="tel" autoComplete="tel" required maxLength={20} className={field} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-err" : undefined} />
          <Err id="phone" />
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block font-medium">Selected package
            <select name="package" defaultValue="complete" className={field}>
              {packageOptions.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
          </label>
          <label className="block font-medium">Training format
            <select name="format" className={field}>
              <option>Face-to-face</option>
              <option>Online</option>
            </select>
          </label>
        </div>

        <label className="block font-medium">Age group of intended learners
          <select name="age" className={field}>
            <option>4–6</option><option>7–12</option><option>13–17</option><option>18–20</option>
          </select>
        </label>

        <label className="block font-medium">Additional message (optional)
          <textarea name="message" rows={4} maxLength={500} className={field} />
        </label>

        <div>
          <label className="flex items-start gap-3">
            <input type="checkbox" name="consent" className="mt-1.5 h-4 w-4" aria-describedby={errors.consent ? "consent-err" : undefined} />
            <span>I agree that my details are used only to answer my registration request. See the <a href="/privacy" className="text-brand underline">privacy policy</a>.</span>
          </label>
          <Err id="consent" />
        </div>

        <button type="submit" className="button button-accent w-full sm:w-auto">
          Prepare my registration
        </button>
      </form>

      <div role="status" aria-live="polite" className="mt-6">
        {Object.keys(errors).length > 0 && !ready && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-red-800">Please correct the highlighted fields.</p>
        )}
        {ready && (
          <div className="rounded-2xl border border-emerald/20 bg-emerald/5 p-5">
            <p className="font-semibold">Your request is ready, but it has not been sent yet.</p>
            <p className="mt-1 text-navy/75">Send it by WhatsApp or email. This is not a confirmed reservation: a place is confirmed only after we contact you.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={ready.wa} target="_blank" rel="noopener noreferrer" className="button min-h-11 bg-emerald text-white hover:bg-emerald/90">Send via WhatsApp</a>
              <a href={ready.mail} className="button button-outline min-h-11">Send by email</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
