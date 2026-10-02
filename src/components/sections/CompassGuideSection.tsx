import Container from '../Container';
import SectionHeading from '../content/SectionHeading';
import DataTable from '../content/DataTable';
import { TROUBLESHOOT_ROWS } from '@/lib/content-data';

export default function CompassGuideSection() {
  return (
    <section className="bg-surface py-14 sm:py-20">
      <Container width="standard">
        <SectionHeading title="بوصلة القبلة وطريقة قراءة درجة القبلة" align="start" />
        <p className="mt-4 max-w-3xl text-[17px] leading-loose text-text-secondary">
          درجة القبلة في بوصلة القبلة هي زاوية الكعبة من الشمال الحقيقي مع اتجاه عقارب الساعة. فإذا كانت
          درجة مدينتك 136، فابدأ من الشمال ثم استدر 136 درجة نحو اليمين، وستجد نفسك مستقبلًا القبلة. وتظهر
          هذه الدرجة بالأرقام تحت البوصلة في الأداة، وهي ثابتة لموقعك مهما أدرت الهاتف، فاحفظها لتستخدمها
          مع أي بوصلة أخرى.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold text-text">اتجاه القبلة بالبوصلة اليدوية</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
              لمعرفة اتجاه القبلة بالبوصلة اليدوية، ضعها أفقيًا وأدِرها حتى تتطابق الإبرة مع حرف N، ثم عُدّ
              من الشمال مع عقارب الساعة بمقدار درجة القبلة. تشير البوصلة اليدوية إلى الشمال المغناطيسي،
              فأضف فرق الانحراف المغناطيسي لمنطقتك أو اطرحه للحصول على الاتجاه الصحيح.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-text">دقة بوصلة القبلة ومعايرتها</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
              تتأثر دقة البوصلة للصلاة بما حول الهاتف، ويلخص الجدول أشهر المشكلات وحلولها:
            </p>
          </div>
        </div>

        <div className="mt-6">
          <DataTable headers={['المشكلة', 'السبب المحتمل', 'الحل']} caption="جدول مشكلات بوصلة القبلة وحلولها">
            {TROUBLESHOOT_ROWS.map((row) => (
              <tr key={row.problem} className="odd:bg-surface/60">
                <td className="px-4 py-3 font-semibold text-text">{row.problem}</td>
                <td className="px-4 py-3 text-text-secondary">{row.cause}</td>
                <td className="px-4 py-3 text-text-secondary">{row.fix}</td>
              </tr>
            ))}
          </DataTable>
        </div>
      </Container>
    </section>
  );
}
