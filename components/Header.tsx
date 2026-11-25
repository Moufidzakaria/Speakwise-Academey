"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, BookOpenCheck, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 text-white shadow-lg shadow-navy/5 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3 font-heading font-bold tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-purple shadow-lg shadow-brand/20">
            <BookOpenCheck size={21} aria-hidden="true" />
          </span>
          <span className="text-[15px] leading-tight sm:text-base">TeachEnglish <span className="block text-xs font-medium tracking-wide text-white/55">TRAINING</span></span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${pathname === item.href ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="button button-accent ml-2 min-h-10 rounded-lg px-4 py-2 text-sm">
            Register Now <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-white/15 p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 bg-navy px-5 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`block rounded-lg px-3 py-3 font-medium transition-colors ${pathname === item.href ? "bg-white/10 text-white" : "text-white/75 hover:bg-white/5 hover:text-white"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" onClick={() => setOpen(false)} className="button button-accent mt-2 flex w-full">
                Register Now
              </Link>
            </li>
          </ul>
          <p className="mt-3 text-sm text-white/50">{site.city}</p>
        </nav>
      )}
    </header>
  );
}
