import { faqs } from "@/lib/site";

export default function Faq() {
  return (
    <div className="max-w-3xl space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="group rounded-2xl border border-white/10 bg-[#11141c] px-5 py-4 shadow-sm transition hover:border-brand/25 sm:px-6 sm:py-5">
          <summary className="cursor-pointer list-none font-semibold leading-6 marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-4">
              {f.q}
              <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-brand transition-transform group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
