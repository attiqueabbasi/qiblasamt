import Container from '../Container';
import IslamicPattern from '../IslamicPattern';

interface LegalHeroProps {
  icon: string;
  title: string;
  lastUpdated?: string;
  intro: string;
}

export default function LegalHero({ icon, title, lastUpdated, intro }: LegalHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <IslamicPattern opacity={0.05} />
      <Container width="narrow" className="relative py-14 text-center sm:py-18">
        <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
          {icon}
        </span>
        <h1 className="text-3xl font-extrabold text-text sm:text-4xl">{title}</h1>
        {lastUpdated && <p className="mt-3 text-sm text-text-secondary">آخر تحديث: {lastUpdated}</p>}
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-loose text-text-secondary">{intro}</p>
      </Container>
    </section>
  );
}
