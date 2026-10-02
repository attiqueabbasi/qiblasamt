import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import IslamicPattern from '@/components/IslamicPattern';

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
          <IslamicPattern opacity={0.05} />
          <Container width="narrow" className="relative text-center">
            <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-4xl">
              🧭
            </span>
            <h1 className="text-3xl font-extrabold text-text sm:text-4xl">هذه الصفحة غير موجودة</h1>
            <p className="mx-auto mt-4 max-w-md text-[17px] leading-loose text-text-secondary">
              يبدو أن الرابط الذي اتبعته غير صحيح أو أن الصفحة نُقلت. جرّب العودة إلى الصفحة الرئيسية أو
              استخدم أحد الروابط التالية.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white shadow-sm transition-colors hover:bg-primary-hover"
              >
                العودة إلى الصفحة الرئيسية
              </a>
              <a
                href="/#qibla-tool"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-white px-8 text-base font-semibold text-text transition-colors hover:border-primary hover:text-primary dark:bg-transparent"
              >
                استخدم أداة القبلة
              </a>
            </div>

            <div className="mx-auto mt-10 grid max-w-sm gap-2 text-sm">
              <a href="/about/" className="rounded-lg px-3 py-2 text-text-secondary hover:bg-white hover:text-primary">
                من نحن
              </a>
              <a href="/contact/" className="rounded-lg px-3 py-2 text-text-secondary hover:bg-white hover:text-primary">
                اتصل بنا
              </a>
              <a href="/#faq" className="rounded-lg px-3 py-2 text-text-secondary hover:bg-white hover:text-primary">
                الأسئلة الشائعة
              </a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
