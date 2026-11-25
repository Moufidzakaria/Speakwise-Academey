import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_0.8fr_1fr] lg:px-10 lg:py-16">
        <div>
          <p className="font-heading text-lg font-bold">{site.name}</p>
          <p className="mt-3 max-w-sm leading-7 text-white/60">Training for future English teachers working with learners aged 4 to 20.</p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/40">Explore</p>
          <ul className="space-y-3">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="text-sm text-white/70 transition-colors hover:text-white">{n.label}</Link></li>
            ))}
            <li><Link href="/privacy" className="text-sm text-white/70 transition-colors hover:text-white">Privacy policy</Link></li>
          </ul>
        </nav>
        <address className="space-y-2 not-italic text-sm text-white/70">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/40">Get in touch</p>
          <p>{site.city}</p>
          <p><a className="transition-colors hover:text-white" href={`mailto:${site.email}`}>{site.email}</a></p>
          <p><a className="transition-colors hover:text-white" href={site.phoneHref}>{site.phone}</a></p>
        </address>
      </div>
      <p className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
