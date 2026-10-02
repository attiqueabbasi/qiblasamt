import Image from 'next/image';
import IslamicPattern from './IslamicPattern';
import Container from './Container';

const USPS = [
  { icon: '🎯', label: 'دقة عالية' },
  { icon: '📵', label: 'بدون تطبيق' },
  { icon: '🔒', label: 'خصوصية تامة' },
  { icon: '💯', label: 'مجاني بالكامل' },
];

/**
 * Hero sized to the viewport so H1 + intro + USPs + CTA sit above the fold.
 * The banner image is light-theme only; on mobile it is positioned so the
 * compass (right side of the artwork) sits behind the centre of the screen.
 */
export default function Hero() {
  return (
    <section className="hero-bg relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden border-b border-border bg-white dark:bg-bg">
      <Image
        src="/images/hero-bg.webp"
        alt="خلفية زخرفية ببوصلة القبلة ونقوش إسلامية"
        width={1440}
        height={810}
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[96%_center] md:object-center dark:hidden"
      />
      <IslamicPattern className="hidden dark:block" />
      <div className="hero-scrim pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container width="narrow" className="relative py-16 text-center">
        <h1 className="text-3xl font-extrabold leading-snug text-text sm:text-4xl md:text-5xl">
          تحديد اتجاه <span className="text-primary">القِبلة</span> للصلاة من موقعك بدقة نحو الكعبة المشرفة
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
          مكتشف اتجاه القبلة يحدد موقعك الآن ويعرض سهمًا يشير إلى الكعبة المشرفة في المسجد الحرام، مع درجة
          القبلة من الشمال الحقيقي والمسافة إلى مكة المكرمة، لتستخدم بوصلة القبلة مجانًا على الجوال
          والكمبيوتر دون تسجيل
        </p>

        <ul className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-3 sm:grid-cols-4">
          {USPS.map((usp) => (
            <li
              key={usp.label}
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-3 py-2.5 text-sm font-semibold text-text"
            >
              <span className="text-lg" aria-hidden="true">
                {usp.icon}
              </span>
              {usp.label}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <a
            href="#qibla-tool"
            className="inline-flex h-14 items-center justify-center rounded-xl bg-primary px-10 text-lg font-bold text-white shadow-sm transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            اتجاه القِبلة
          </a>
        </div>
      </Container>
    </section>
  );
}
