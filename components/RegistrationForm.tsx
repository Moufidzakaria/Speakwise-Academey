"use client";

import { useEffect, useRef, useState } from "react";
import { packageOptions, site } from "@/lib/site";

type Errors = Partial<Record<"name" | "email" | "phone" | "consent", string>>;

const field = "form-field";

export default function RegistrationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");

  // Preselect a package from /contact?package=intro|complete
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("package");
    const sel = formRef.current?.elements.namedItem("package");
    if (sel instanceof HTMLSelectElement && packageOptions.some((o) => o.id === p)) sel.value = p as string;
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const v = (k: string) => String(d.get(k) ?? "").trim();

    const next: Errors = {};
    if (v("name").length < 2) next.name = "Enter your full name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email"))) next.email = "Enter a valid email address.";
    if (!/^\+?[0-9 ]{8,16}$/.test(v("phone"))) next.phone = "Enter a valid phone number (digits, optional +).";
    if (!d.get("consent")) next.consent = "Accept to continue.";
    setErrors(next);
    setReady(false);
    setSendError("");
    if (Object.keys(next).length) return;

    setIsSending(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: v("name"),
          email: v("email"),
          phone: v("phone"),
          package: v("package"),
          format: v("format"),
          age: v("age"),
          message: v("message"),
          consent: Boolean(d.get("consent")),
        }),
      });

      if (!response.ok) {
        const result: unknown = await response.json().catch(() => null);
        const errorMessage =
          result && typeof result === "object" && "error" in result && typeof result.error === "string"
            ? result.error
            : "The registration email could not be sent. Please try again.";
        throw new Error(errorMessage);
      }

      setReady(true);
    } catch (error) {
      setSendError(error instanceof Error ? error.message : "The registration email could not be sent. Please try again.");
    } finally {
      setIsSending(false);
    }
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

        <button type="submit" disabled={isSending} className="button button-accent w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60">
          {isSending ? "Sending request..." : "Send registration request"}
        </button>
      </form>

      <div role="status" aria-live="polite" className="mt-6">
        {Object.keys(errors).length > 0 && !ready && !sendError && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-red-800">Please correct the highlighted fields.</p>
        )}
        {sendError && (
          <div className="rounded-xl bg-red-50 px-4 py-3 text-red-800">
            <p>{sendError}</p>
            <p className="mt-2">You can also email us directly: {site.emails.map((email, index) => <span key={email}>{index > 0 ? " or " : ""}<a className="underline" href={`mailto:${email}`}>{email}</a></span>)}.</p>
          </div>
        )}
        {ready && (
          <div className="rounded-2xl border border-emerald/20 bg-emerald/5 p-5">
            <p className="font-semibold">Your request was sent to both contact email addresses.</p>
            <p className="mt-1 text-navy/75">This is not a confirmed reservation: a place is confirmed only after we contact you.</p>
          </div>
        )}
      </div>
    </div>
  );
}
