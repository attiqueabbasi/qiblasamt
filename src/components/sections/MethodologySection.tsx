import Image from 'next/image';
import Container from '../Container';
import SectionHeading from '../content/SectionHeading';

export default function MethodologySection() {
  return (
    <section className="bg-surface py-14 sm:py-20">
      <Container width="narrow">
        <SectionHeading title="كيف تحسب الأداة اتجاه الكعبة؟" align="start" />
        <div className="mt-5 space-y-4 text-[17px] leading-loose text-text-secondary">
          <p>
            تحسب الأداة اتجاه الكعبة بطريقة الدائرة العظمى، أي أقصر مسار على سطح الأرض الكروي بين موقعك
            وإحداثيات الكعبة المشرفة (21.4225 شمالًا و39.8262 شرقًا). ويوفر نظام تحديد المواقع العالمي
            (GPS) إحداثيات موقعك بدقة، فتظهر النتيجة درجةً من الشمال الحقيقي ومسافةً بالكيلومترات. ويلتقط
            الهاتف إشارة الموقع بدقة أكبر قرب النافذة أو في مكان مفتوح، لذلك يفيد القياس هناك عند ضعف
            الإشارة.
          </p>
          <p>
            لهذا قد تبدو القبلة غريبة على الخرائط المسطحة. فالمصلي في نيويورك يتجه نحو الشمال الشرقي (58.5
            درجة)، مع أن مكة تظهر على الخريطة المسطحة جنوب شرقه، لأن أقصر مسار على الكرة الأرضية ينحني نحو
            الشمال.
          </p>
        </div>

        <figure className="my-8 overflow-hidden rounded-2xl border border-border shadow-sm">
          <Image
            src="/images/great-circle-globe.webp"
            alt="مسار الدائرة العظمى من نيويورك إلى مكة مقارنة بالخط المستقيم على الخريطة المسطحة"
            width={1400}
            height={788}
            loading="lazy"
            className="h-auto w-full"
            sizes="(min-width: 768px) 720px, 100vw"
          />
        </figure>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-text">الشمال الحقيقي والشمال المغناطيسي</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
              الشمال الحقيقي هو اتجاه القطب الجغرافي، أما إبرة البوصلة فتشير إلى القطب المغناطيسي. ويسمى
              الفرق بينهما الانحراف المغناطيسي، ويتغير حسب المكان والزمن، وقد يتجاوز عشر درجات في بعض
              المناطق بحسب نماذج الإدارة الوطنية الأمريكية للمحيطات والغلاف الجوي (NOAA). ولهذا تُحسب درجة
              القبلة في الأداة من الشمال الحقيقي.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-text">الدائرة العظمى والخط الثابت على الخريطة</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
              تعتمد أغلب أدوات القبلة الحديثة طريقة الدائرة العظمى. وفي بعض مناطق أمريكا الشمالية أخذ فريق
              من أهل العلم بطريقة الخط الثابت على الخريطة، وهي تعطي اتجاهًا مختلفًا. تعتمد هذه الأداة
              الدائرة العظمى، ومن يتبع الاجتهاد الآخر يرجع إلى مسجده أو الهيئة الشرعية في بلده.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
