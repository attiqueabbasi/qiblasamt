import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { INTERNAL_LINKS } from '@/lib/content-data';

const NAV_LINKS = [
  { href: '/#qibla-tool', label: 'الأداة' },
  { href: '/#how-it-works', label: 'كيف تعمل؟' },
  { href: '/#cities', label: 'اتجاه القبلة في المدن' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="/" className="flex shrink-0 items-center" aria-label="قبلة سمت — الصفحة الرئيسية">
          <Image
            src="/logo.webp"
            alt="قبلة سمت"
            width={480}
            height={160}
            priority
            className="h-[42px] w-auto sm:h-[47px] dark:hidden"
          />
          <Image
            src="/logo-dark.webp"
            alt="قبلة سمت"
            width={480}
            height={160}
            loading="lazy"
            className="hidden h-[42px] w-auto sm:h-[47px] dark:block"
          />
        </a>

        <nav aria-label="روابط الصفحة الرئيسية" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <span className="mx-1 h-4 w-px bg-border" aria-hidden="true" />
          <a
            href={INTERNAL_LINKS.about}
            className="rounded-lg px-3 py-2 text-sm font-semibold text-text-secondary transition-colors hover:text-primary"
          >
            من نحن
          </a>
          <a
            href="/contact/"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-text-secondary transition-colors hover:text-primary"
          >
            اتصل بنا
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#qibla-tool"
            className="hidden h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-colors hover:bg-primary-hover sm:inline-flex"
          >
            استخدم الأداة
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
