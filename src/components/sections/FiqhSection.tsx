import Container from '../Container';
import SectionHeading from '../content/SectionHeading';

export default function FiqhSection() {
  return (
    <>
      <section className="bg-surface py-14 sm:py-20">
        <Container width="narrow">
          <SectionHeading title="قبلة الصلاة وحكم استقبالها" align="start" />
          <p className="mt-4 text-[17px] leading-loose text-text-secondary">
            استقبال قبلة الصلاة شرط لصحة الصلاة باتفاق الفقهاء، إلا في حالات محددة مثل الخوف الشديد والعجز
            ونافلة المسافر على راحلته. والأصل فيه قول الله تعالى:
          </p>
          <blockquote className="my-5 rounded-2xl border-e-4 border-accent bg-white px-5 py-4 text-lg font-semibold leading-loose text-text dark:bg-transparent">
            ﴿فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ ۚ وَحَيْثُ مَا كُنتُمْ فَوَلُّوا وُجُوهَكُمْ
            شَطْرَهُ﴾
            <footer className="mt-2 text-sm font-normal text-text-secondary">[البقرة: 144]</footer>
          </blockquote>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-text">استقبال عين الكعبة أو جهتها</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                من يرى الكعبة يلزمه استقبال عينها باتفاق الفقهاء. أما البعيد فالجمهور من الحنفية والمالكية
                والحنابلة على أن الواجب استقبال جهة القبلة، استدلالًا بحديث «ما بين المشرق والمغرب قبلة»
                الذي رواه الترمذي، والمعتمد عند الشافعية الاجتهاد في إصابة عين الكعبة. والأداة تخدم القولين،
                فهي تعطي الاتجاه الدقيق لمن أراد التحري.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-text">ماذا تفعل إذا صليت لغير القبلة؟</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                إذا تبيّن لك الخطأ أثناء الصلاة فاستدر إلى القبلة وأكمل، كما فعل أهل قباء حين بلغهم تحويل
                القبلة وهم في صلاة الصبح، والحديث في صحيح البخاري. وإذا عرفته بعد الصلاة وكنت قد اجتهدت،
                فصلاتك صحيحة عند أكثر الفقهاء، ويرى الشافعية في المعتمد الإعادة عند تيقن الخطأ.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-text">اتجاه القبلة للمسافر في الفندق والطائرة</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                يعرف المسافر اتجاه القبلة للصلاة بالطريقة نفسها، فالأداة تحسب الاتجاه من مكانه الجديد
                مباشرة.
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2 text-[15px] leading-relaxed text-text-secondary">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    <strong className="text-text">في الفندق: </strong>
                    ابحث عن علامة القبلة في سقف الغرفة أو داخل درج المكتب، أو اسأل الاستقبال. وإن لم تجدها
                    فاستخدم الأداة قرب النافذة.
                  </span>
                </li>
                <li className="flex gap-2 text-[15px] leading-relaxed text-text-secondary">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    <strong className="text-text">في الطائرة: </strong>
                    لا تعطي بوصلة الهاتف قراءة موثوقة بسبب الهيكل المعدني. ويرى أهل العلم أن يستقبل المصلي
                    القبلة في الفريضة إن استطاع، فإن عجز صلى على حسب حاله، وله تأخيرها إلى ما بعد الهبوط إن
                    اتسع الوقت أو جاز الجمع.
                  </span>
                </li>
                <li className="flex gap-2 text-[15px] leading-relaxed text-text-secondary">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    <strong className="text-text">النافلة في السفر: </strong>
                    تجوز إلى جهة السير، لحديث ابن عمر رضي الله عنهما في الصحيحين أن النبي ﷺ كان يصلي النافلة
                    على راحلته حيث توجهت به.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 dark:bg-bg sm:py-20">
        <Container width="narrow">
          <SectionHeading title="قبلة المسلمين: تعريفها وقصة تحويلها" align="start" />
          <p className="mt-4 text-[17px] leading-loose text-text-secondary">
            قبلة المسلمين هي الكعبة المشرفة، وكانت قبلة المسلمين الأولى قبل الكعبة المشرفة هي بيت المقدس،
            صلوا إليه قرابة ستة عشر أو سبعة عشر شهرًا بعد الهجرة. ثم نزلت آية سورة البقرة بالتوجه إلى المسجد
            الحرام، فصارت الكعبة قبلة المسلمين في كل مكان. ويتجه المسلمون في أنحاء العالم إلى هذه النقطة
            الواحدة، فتختلف درجة القبلة من بلد إلى آخر بينما تبقى القبلة نفسها واحدة.
          </p>

          <div className="mt-6">
            <h3 className="text-lg font-bold text-text">الجهات الأصلية والفرعية وتحديد القبلة</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
              تساعد معرفتنا للجهات الأصلية والفرعية على تحديد القبلة. فالجهات الأصلية أربع: الشمال والجنوب
              والشرق والغرب، والفرعية أربع: الشمال الشرقي والشمال الغربي والجنوب الشرقي والجنوب الغربي. فإذا
              عرفت أن قبلة مدينتك جنوب غرب مثلًا، أمكنك التوجه إليها تقريبيًا عند غياب الأدوات.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
