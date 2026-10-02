import Image from 'next/image';
import Container from '../Container';
import SectionHeading from '../content/SectionHeading';
import { LOCATE_STEPS } from '@/lib/content-data';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-14 dark:bg-bg sm:py-20">
      <Container width="standard">
        <SectionHeading title="اتجاه القبلة من موقعي الآن في خطوات بسيطة" align="start" />
        <p className="mt-4 max-w-3xl text-[17px] leading-loose text-text-secondary">
          لمعرفة اتجاه القبلة من موقعي الآن، اضغط زر تحديد الموقع، ثم ضع الهاتف أفقيًا وأدِره حتى يتطابق
          السهم مع رمز الكعبة. تظهر القبلة الآن مباشرة خلال ثوانٍ، وهذه الخطوات بالترتيب:
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ol className="space-y-4">
            {LOCATE_STEPS.map((step) => (
              <li
                key={step.number}
                className="flex gap-4 rounded-2xl border border-border bg-surface p-4 dark:bg-transparent sm:p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
                  {step.number}
                </span>
                <p className="text-[15px] leading-relaxed text-text">{step.text}</p>
              </li>
            ))}
          </ol>

          <figure className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src="/images/qibla-direction-guide.webp"
              alt="بوصلة القبلة تشير من موقعك الحالي إلى الكعبة المشرفة في المسجد الحرام مع عرض الإحداثيات"
              width={900}
              height={900}
              loading="lazy"
              sizes="(min-width: 1024px) 420px, 100vw"
              className="h-auto w-full"
            />
          </figure>
        </div>

        <p className="mt-8 max-w-3xl text-[17px] leading-loose text-text-secondary">
          للتأكد من النتيجة في مكان جديد، قارن اتجاه السهم بمحراب أقرب مسجد، فالفرق بينهما يجب أن يكون
          صغيرًا.
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 dark:bg-transparent sm:p-7">
          <h3 className="text-lg font-bold text-text">القبلة من موقعي على الكمبيوتر</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
            يمكنك معرفة القبلة من موقعي على الكمبيوتر أيضًا، لكن السهم لن يدور لأن أغلب الأجهزة المكتبية لا
            تحتوي على حساس بوصلة. اعتمد على درجة القبلة المكتوبة بالأرقام وطبّقها على بوصلة يدوية، أو افتح
            الصفحة من جوالك.
          </p>
        </div>

        <div className="mt-14">
          <SectionHeading title="سهم اتجاه القبلة في الجوال والآيفون" align="start" />
          <p className="mt-4 max-w-3xl text-[17px] leading-loose text-text-secondary">
            يدور سهم اتجاه القبلة مع حركة هاتفك معتمدًا على حساس المغناطيسية داخله، ويبقى مشيرًا إلى الكعبة
            المشرفة مهما أدرت الجهاز. لذلك تعطي معرفة اتجاه القبلة بالبوصلة في الهاتف أفضل نتيجة عندما يكون
            الجهاز أفقيًا وبعيدًا عن مصادر المغناطيسية.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-5 dark:bg-transparent">
              <p className="text-[15px] leading-relaxed text-text-secondary">
                <strong className="text-text">اتجاه القبلة للآيفون: </strong>
                يطلب متصفح Safari إذنين: الموقع، ثم «الحركة والاتجاه». بدون الإذن الثاني يظهر السهم ثابتًا،
                فاضغط «السماح» عند ظهوره.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5 dark:bg-transparent">
              <p className="text-[15px] leading-relaxed text-text-secondary">
                <strong className="text-text">في أندرويد: </strong>
                فعّل الموقع الدقيق من الإعدادات، وانزع الغطاء إذا كان يحتوي على مغناطيس أو حامل معدني.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-text">اتجاه القبلة بالكاميرا</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                تعرض بعض التطبيقات اتجاه القبلة بالكاميرا فوق صورة المكان، لكنها تعتمد على حساس البوصلة
                نفسه، فلا تزيد الدقة عن السهم العادي. المهم في الحالتين هو المعايرة والابتعاد عن المعادن.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-text">اتجاه القبلة جوجل وأدوات المتصفح</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                يبحث كثيرون عن اتجاه القبلة جوجل، وهي أداة منفصلة تقدمها شركة جوجل للقبلة عبر المتصفح. وهذا
                الموقع أداة مستقلة لا ترتبط بجوجل. تحتاج الأداتان إلى إذن الموقع، وتضيف هذه الصفحة درجة
                القبلة بالأرقام، وجدول المدن، والشرح العملي والفقهي في مكان واحد.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
