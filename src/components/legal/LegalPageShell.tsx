import type { ReactNode } from 'react';
import Container from '../Container';
import LegalTOC, { type TocItem } from './LegalTOC';

interface LegalPageShellProps {
  toc: TocItem[];
  children: ReactNode;
}

export default function LegalPageShell({ toc, children }: LegalPageShellProps) {
  return (
    <section className="bg-white py-12 dark:bg-bg sm:py-16">
      <Container width="wide">
        <div className="flex gap-10">
          <LegalTOC items={toc} />
          <div className="min-w-0 flex-1 lg:max-w-3xl">{children}</div>
        </div>
      </Container>
    </section>
  );
}
