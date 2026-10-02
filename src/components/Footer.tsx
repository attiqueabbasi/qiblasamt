import Image from 'next/image';
import { INTERNAL_LINKS } from '@/lib/content-data';
import Container from './Container';
import IslamicPattern from './IslamicPattern';

const EXPLORE_LINKS = [
  { href: '/#qibla-tool', label: 'أداة اتجاه القبلة' },
  { href: '/#how-it-works', label: 'كيف تعمل الأداة' },
  { href: '/#cities', label: 'اتجاه القبلة في المدن' },
  { href: '/#faq', label: 'الأسئلة الشائعة' },
];

const LEGAL_LINKS = [
  { href: INTERNAL_LINKS.about, label: 'من نحن' },
  { href: '/contact/', label: 'تواصل معنا' },
  { href: '/privacy-policy/', label: 'سياسة الخصوصية' },
  { href: '/terms/', label: 'الشروط والأحكام' },
  { href: '/cookie-policy/', label: 'سياسة ملفات تعريف الارتباط' },
  { href: '/disclaimer/', label: 'إخلاء المسؤولية' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <IslamicPattern opacity={0.08} color="#FFFFFF" />
      <Container width="wide" className="relative py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <a href="/" className="inline-flex items-center" aria-label="قبلة سمت — الصفحة الرئيسية">
              <Image src="/logo-footer.webp" alt="قبلة سمت" width={560} height={533} className="h-28 w-auto" />
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/75">
              أداة مجانية لتحديد اتجاه القبلة بدقة باستخدام موقعك الجغرافي، دون تخزين أي بيانات شخصية.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">الصفحة الرئيسية</h3>
            <ul className="mt-4 space-y-2.5">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/75 transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">الشركة والسياسات</h3>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/75 transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-center sm:flex-row sm:text-start">
          <p className="text-xs text-white/60">© {year} قبلة سمت — QiblaSamt.com. جميع الحقوق محفوظة.</p>
          <a href="/cookie-policy/#manage-consent" className="text-xs font-semibold text-white/75 underline-offset-2 hover:text-accent hover:underline">
            إعدادات ملفات تعريف الارتباط
          </a>
        </div>
        <p className="mt-4 text-center text-xs text-white/50">
          المحتوى الشرعي في هذا الموقع للتعريف العام، ويُرجع في الفتوى الخاصة إلى أهل العلم في بلدك.
        </p>
      </Container>
    </footer>
  );
}
