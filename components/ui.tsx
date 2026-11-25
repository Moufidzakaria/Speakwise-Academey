import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "accent" | "outline";
  external?: boolean;
  className?: string;
};

const variants = {
  primary: "button-primary",
  accent: "button-accent",
  outline: "button-outline",
};

export function Button({ href, children, variant = "primary", external, className = "" }: ButtonProps) {
  const cls = `button ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Section({ children, soft = false, id }: { children: ReactNode; soft?: boolean; id?: string }) {
  return (
    <section id={id} data-reveal className={`section ${soft ? "section-soft" : "bg-transparent"}`}>
      <div className="section-inner">{children}</div>
    </section>
  );
}

export function SectionTitle({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export function Card({ children, highlight = false }: { children: ReactNode; highlight?: boolean }) {
  return (
    <div className={`surface-card ${highlight ? "surface-card-highlight" : ""}`}>
      {children}
    </div>
  );
}

export function Notice({ children }: { children: ReactNode }) {
  return <p className="rounded-xl border border-brand/20 border-l-4 border-l-brand bg-blue-500/10 px-5 py-4 leading-7 text-navy">{children}</p>;
}
