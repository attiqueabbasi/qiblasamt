import Container from '../Container';
import SectionHeading from '../content/SectionHeading';
import DataTable from '../content/DataTable';
import { CITY_ROWS } from '@/lib/content-data';

export default function CitiesSection() {
  return (
    <section id="cities" className="bg-white py-14 dark:bg-bg sm:py-20">
      <Container width="standard">
        <SectionHeading title="اتجاه القبلة في مدن السعودية والدول العربية" align="start" />
        <p className="mt-4 max-w-3xl text-[17px] leading-loose text-text-secondary">
          يعرض الجدول درجة القبلة التقريبية لمركز كل مدينة، محسوبة بطريقة الدائرة العظمى ومقربة لأقرب عُشر
          درجة. وتختلف الدرجة قليلًا بين أحياء المدينة الواحدة، لذلك تحسب الأداة الدرجة الدقيقة لموقعك.
        </p>

        <div className="mt-8">
          <DataTable headers={['المدينة', 'درجة القبلة', 'الجهة التقريبية', 'المسافة إلى مكة']} caption="جدول اتجاه القبلة لمدن السعودية والدول العربية">
            {CITY_ROWS.map((row) => (
              <tr key={row.city} className={row.city === 'مكة المكرمة' ? 'bg-accent/10' : 'odd:bg-white even:bg-surface/60 dark:odd:bg-transparent'}>
                <td className="whitespace-nowrap px-4 py-3 font-semibold text-text">{row.city}</td>
                <td className="whitespace-nowrap px-4 py-3 text-text-secondary">{row.bearing}</td>
                <td className="whitespace-nowrap px-4 py-3 text-text-secondary">{row.direction}</td>
                <td className="whitespace-nowrap px-4 py-3 text-text-secondary">{row.distance}</td>
              </tr>
            ))}
          </DataTable>
        </div>

        <p className="mt-6 max-w-3xl text-[17px] leading-loose text-text-secondary">
          أما اتجاه القبلة في مكة نفسها فيختلف من حي إلى آخر، لأن الكعبة في وسط المدينة. فمن كان داخل
          المسجد الحرام يستقبل الكعبة بعينها، ومن كان خارجه تحسب له الأداة الاتجاه من موقعه الدقيق. وإذا لم
          تجد مدينتك في الجدول، فالأداة تحسب القبلة لأي مكان في العالم بالطريقة نفسها، من القرى الصغيرة إلى
          المدن الكبرى.
        </p>
      </Container>
    </section>
  );
}
