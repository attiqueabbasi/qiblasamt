import type { ReactNode } from 'react';

interface LegalSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-8 first:border-t-0 first:pt-0">
      <h2 className="flex items-center gap-3 text-xl font-extrabold text-text sm:text-2xl">
        <span className="h-6 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[16px] leading-loose text-text-secondary">{children}</div>
    </section>
  );
}

interface LegalSubSectionProps {
  title: string;
  children: ReactNode;
}

export function LegalSubSection({ title, children }: LegalSubSectionProps) {
  return (
    <div>
      <h3 className="font-bold text-text">{title}</h3>
      <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-text-secondary">{children}</div>
    </div>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-2.5 text-[15px] leading-relaxed text-text-secondary">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
