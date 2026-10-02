export interface TocItem {
  id: string;
  label: string;
}

export default function LegalTOC({ items }: { items: TocItem[] }) {
  return (
    <nav
      aria-label="محتويات الصفحة"
      className="sticky top-20 hidden max-h-[calc(100vh-6rem)] w-56 shrink-0 overflow-y-auto rounded-2xl border border-border bg-surface p-4 lg:block"
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-wide text-text-secondary">محتويات الصفحة</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block rounded-lg px-2.5 py-1.5 text-sm text-text-secondary transition-colors hover:bg-white hover:text-primary"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
