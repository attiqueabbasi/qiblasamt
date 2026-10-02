import type { ReactNode } from 'react';

interface DataTableProps {
  headers: string[];
  children: ReactNode;
  caption?: string;
}

export default function DataTable({ headers, children, caption }: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[560px] border-collapse text-start text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-primary/10">
            {headers.map((header) => (
              <th key={header} scope="col" className="whitespace-nowrap px-4 py-3 text-start font-bold text-text">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-white dark:bg-transparent">{children}</tbody>
      </table>
    </div>
  );
}
