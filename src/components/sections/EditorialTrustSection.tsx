import Container from '../Container';
import IslamicPattern from '../IslamicPattern';
import { INTERNAL_LINKS, REFERENCES } from '@/lib/content-data';

export function EditorialTrustBand() {
  return (
    <section className="relative overflow-hidden bg-primary py-14 text-white sm:py-20">
      <IslamicPattern opacity={0.06} />
      <Container width="narrow" className="relative text-center">
        <h2 className="text-2xl font-extrabold sm:text-3xl">منهجية تحديد اتجاه القبلة ومراجعة المحتوى</h2>
        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-loose text-white/85">
          تعتمد الأداة على معادلة الدائرة العظمى المستخدمة في الملاحة والجغرافيا، وعلى إحداثيات الكعبة
          المشرفة الثابتة. والمعلومات الشرعية في الصفحة منقولة من القرآن الكريم وكتب الحديث وأقوال المذاهب
          المعتمدة، مع عرض الأقوال دون ترجيح، لأن الفتوى في المسائل الخاصة مرجعها أهل العلم في بلدك.
        </p>

        <div className="mx-auto mt-8 h-px w-16 bg-accent/60" />

        <p className="mt-6 text-sm text-white/70">
          إعداد ومراجعة: فريق التحرير في قبلة سمت. آخر تحديث: 23 سبتمبر 2026.
        </p>
        <p className="mt-2 text-sm">
          <a href={INTERNAL_LINKS.about} className="font-semibold text-accent hover:underline">
            تعرّف على فريقنا وطريقة عملنا في صفحة من نحن ومنهجية العمل
          </a>
        </p>
      </Container>
    </section>
  );
}

export function ReferencesSection() {
  return (
    <section className="bg-white py-10 dark:bg-bg sm:py-12">
      <Container width="narrow">
        <h2 className="text-lg font-bold text-text">المصادر والمراجع</h2>
        <ul className="mt-4 space-y-2">
          {REFERENCES.map((ref) => (
            <li key={ref.url} className="text-sm text-text-secondary">
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="hover:text-primary hover:underline"
              >
                {ref.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
