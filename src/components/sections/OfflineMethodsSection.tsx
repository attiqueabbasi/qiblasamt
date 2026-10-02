import Image from 'next/image';
import Container from '../Container';
import SectionHeading from '../content/SectionHeading';
import DataTable from '../content/DataTable';
import { OFFLINE_METHODS, SUN_CULMINATION_ROWS } from '@/lib/content-data';

const ICON_TONES = ['bg-primary/10', 'bg-accent/15', 'bg-success/10', 'bg-accent/15'];

export default function OfflineMethodsSection() {
  return (
    <section className="bg-white py-14 dark:bg-bg sm:py-20">
      <Container width="standard">
        <SectionHeading title="اتجاه القبلة بدون نت وبدون بوصلة" align="start" />
        <p className="mt-4 max-w-3xl text-[17px] leading-loose text-text-secondary">
          تحتاج إلى الإنترنت لفتح القبلة أونلاين أول مرة، أما معرفة اتجاه القبلة بدون نت فتكون بالاستعداد
          المسبق أو بالطرق التقليدية. احفظ درجة القبلة لمدينتك من الجدول السابق، ثم طبّقها على أي بوصلة عند
          الحاجة. وهذه طرق بديلة موثوقة:
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {OFFLINE_METHODS.map((method, idx) => (
            <div key={method.title} className="flex gap-4 rounded-2xl border border-border bg-surface p-5 dark:bg-transparent">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl ${ICON_TONES[idx % ICON_TONES.length]}`}
              >
                {method.icon}
              </span>
              <div>
                <h3 className="font-bold text-text">{method.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <DataTable headers={['موعد التعامد', 'بتوقيت مكة المكرمة', 'بتوقيت غرينتش', 'ماذا تفعل']} caption="جدول مواعيد تعامد الشمس على الكعبة">
            {SUN_CULMINATION_ROWS.map((row) => (
              <tr key={row.date} className="odd:bg-surface/60">
                <td className="whitespace-nowrap px-4 py-3 font-semibold text-text">{row.date}</td>
                <td className="whitespace-nowrap px-4 py-3 text-text-secondary">{row.makkahTime}</td>
                <td className="whitespace-nowrap px-4 py-3 text-text-secondary">{row.gmtTime}</td>
                <td className="px-4 py-3 text-text-secondary">{row.action}</td>
              </tr>
            ))}
          </DataTable>
        </div>

        <figure className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm">
          <Image
            src="/images/qibla-shadow-method.webp"
            alt="عصا قائمة وظلها وسهم يشير إلى القبلة عكس الظل وقت تعامد الشمس على الكعبة"
            width={1400}
            height={788}
            loading="lazy"
            className="h-auto w-full"
            sizes="(min-width: 768px) 900px, 100vw"
          />
        </figure>

        <div className="mt-14">
          <SectionHeading title="كيف أعرف القبلة في بيتي؟" align="start" />
          <div className="mt-4 max-w-3xl space-y-4 text-[17px] leading-loose text-text-secondary">
            <p>
              لتعرف القبلة في بيتك، افتح الأداة في منتصف الغرفة بعيدًا عن الأجهزة الكبيرة، ثم ثبّت علامة
              صغيرة دائمة على الجدار أو الأرض في الاتجاه الذي يشير إليه السهم.
            </p>
            <p>
              بعد ذلك تحقق من العلامة بطريقة ثانية: قارنها بمحراب أقرب مسجد، أو راجعها يوم تعامد الشمس على
              الكعبة. وتجنب القياس قرب الثلاجة أو الغسالة أو الجدران ذات الهياكل المعدنية، لأنها قد تحرف
              السهم عدة درجات. وإذا انتقلت إلى بيت جديد فأعد القياس، فحتى المسافة القصيرة داخل المدينة قد
              تغير الدرجة قليلًا. وإن كان في البيت أكثر من غرفة للصلاة فكرر القياس في كل غرفة وقارن النتائج،
              فالاتجاه واحد نظريًا، وأي فرق كبير بين الغرف يدل غالبًا على تشويش مغناطيسي في إحداها.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
