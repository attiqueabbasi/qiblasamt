import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/legal/Breadcrumb';
import LegalHero from '@/components/legal/LegalHero';
import LegalPageShell from '@/components/legal/LegalPageShell';
import { LegalSection, LegalList } from '@/components/legal/LegalSection';
import LegalJsonLd from '@/components/legal/LegalJsonLd';
import DataTable from '@/components/content/DataTable';
import { buildLegalMetadata } from '@/lib/legal-metadata';

const PATH = '/about/';
const TITLE = 'من نحن | قبلة سمت لتحديد اتجاه القبلة';
const DESCRIPTION =
  'تعرف على قبلة سمت: أداة عربية مجانية لتحديد اتجاه القبلة، وقصة اسم «سمت القبلة»، وطريقة الحساب، ومعاييرنا في المحتوى والتصحيح.';

export const metadata: Metadata = buildLegalMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

const TOC = [
  { id: 'name-story', label: 'لماذا اخترنا اسم «سمت»' },
  { id: 'mission', label: 'رسالتنا' },
  { id: 'audience', label: 'لمن صممنا الموقع' },
  { id: 'offerings', label: 'ماذا نقدم' },
  { id: 'how-it-works', label: 'كيف تعمل الأداة' },
  { id: 'standards', label: 'معاييرنا في كتابة المحتوى' },
  { id: 'corrections', label: 'سياسة التصحيح' },
  { id: 'principles', label: 'مبادئنا' },
  { id: 'who-runs', label: 'من يدير الموقع' },
  { id: 'funding', label: 'كيف نموّل الموقع' },
  { id: 'roadmap', label: 'ما نعمل عليه' },
  { id: 'contact', label: 'تواصل معنا' },
];

const AUDIENCE = [
  { icon: '✈️', title: 'المسافرون', text: 'في الفنادق والمطارات والمدن التي يزورونها أول مرة.' },
  { icon: '🌍', title: 'المقيمون خارج بلادهم', text: 'في أوروبا وأمريكا وآسيا، حيث قد يبعد أقرب مسجد كثيرًا.' },
  { icon: '🏠', title: 'من انتقل إلى بيت أو مكتب جديد', text: 'ويريد تثبيت اتجاه القبلة بصفة دائمة.' },
  { icon: '👨‍👩‍👧', title: 'الأسر', text: 'الآباء والأمهات الذين يعلّمون أبناءهم الصلاة واستقبال القبلة.' },
  { icon: '🔎', title: 'المهتمون بالتفاصيل', text: 'من يريد فهم طريقة الحساب ودرجات القبلة بدقة، مثل القائمين على المصليات.' },
];

const OFFERINGS = [
  { icon: '🧭', title: 'أداة تحديد اتجاه القبلة', text: 'تعرض سهمًا يشير إلى الكعبة المشرفة، ودرجة القبلة من الشمال الحقيقي، والمسافة إلى مكة المكرمة.' },
  { icon: '🗺️', title: 'جداول القبلة للمدن', text: 'درجات محسوبة لمدن السعودية والدول العربية ومدن حول العالم.' },
  { icon: '📖', title: 'محتوى شرعي موثق', text: 'أحكام استقبال القبلة مع أقوال المذاهب ومصادرها.' },
];

export default function AboutPage() {
  return (
    <>
      <LegalJsonLd
        path={PATH}
        name="من نحن: قصة قبلة سمت"
        description={DESCRIPTION}
        breadcrumbLabel="من نحن"
        pageType="AboutPage"
        includeOrganization
        contactEmail="info@qiblasamt.com"
      />
      <Header />
      <main>
        <Breadcrumb current="من نحن" />
        <LegalHero
          icon="🕋"
          title="من نحن: قصة قبلة سمت"
          intro="قبلة سمت موقع عربي مجاني يساعد المسلم على معرفة اتجاه القبلة بدقة من أي مكان في العالم، من المتصفح مباشرة ودون تحميل تطبيق. بدأنا من سؤال بسيط يتكرر كل يوم في الفنادق والمطارات والبيوت الجديدة: أين القبلة من هنا؟ وأردنا أن تكون الإجابة سريعة وواضحة وموثوقة."
        />

        <LegalPageShell toc={TOC}>
          <LegalSection id="name-story" title="لماذا اخترنا اسم «سمت»">
            <p>
              السَّمت في العربية هو الجهة والطريق، واستخدمه علماء الفلك المسلمون في مصطلح «سمت القبلة»
              للدلالة على زاوية اتجاه الكعبة من أي مكان. وقد ألّفوا في حسابه كتبًا ورسائل، ومن أشهرهم البيروني.
              اخترنا الاسم لأنه يجمع ما نفعله: حساب دقيق لاتجاه القبلة، قائم على علم له جذور عميقة في حضارتنا.
            </p>
          </LegalSection>

          <LegalSection id="mission" title="رسالتنا">
            <p className="text-lg font-semibold text-text">
              أن يجد كل مسلم اتجاه قبلته خلال ثوانٍ، بأداة مجانية تحترم خصوصيته، ومحتوى عربي واضح يشرح له
              الطريقة والحكم دون تعقيد.
            </p>
          </LegalSection>

          <LegalSection id="audience" title="لمن صممنا الموقع">
            <div className="grid gap-4 sm:grid-cols-2">
              {AUDIENCE.map((item) => (
                <div key={item.title} className="flex gap-3 rounded-xl border border-border bg-surface p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xl">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-text">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </LegalSection>

          <LegalSection id="offerings" title="ماذا نقدم">
            <div className="grid gap-4 sm:grid-cols-2">
              {OFFERINGS.map((item) => (
                <div key={item.title} className="flex gap-3 rounded-xl border border-border bg-surface p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-xl">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-text">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </LegalSection>

          <LegalSection id="how-it-works" title="كيف تعمل الأداة">
            <p>
              تحسب الأداة الاتجاه بطريقة الدائرة العظمى، أي أقصر مسار على سطح الأرض بين موقعك وإحداثيات الكعبة
              المشرفة (21.4225 شمالًا و39.8262 شرقًا). وتُقاس النتيجة من الشمال الحقيقي، ثم يعرضها سهم يتحرك مع
              هاتفك بالاعتماد على حساس البوصلة. ونشرح في صفحات الموقع حدود هذه الطريقة وأسباب اختلاف القراءة
              وطرق التحقق منها، لأننا نؤمن أن المستخدم الذي يفهم الأداة يستخدمها بثقة أكبر.
            </p>
          </LegalSection>

          <LegalSection id="standards" title="معاييرنا في كتابة المحتوى">
            <LegalList
              items={[
                'المصادر أولًا: ننقل الآيات والأحاديث من مصادرها، ونعتمد في المعلومات العلمية على جهات موثوقة، ونذكر المراجع في نهاية الصفحات.',
                'الحياد في المسائل الخلافية: نعرض أقوال المذاهب الفقهية كما هي دون ترجيح، ولا نصدر فتاوى.',
                'الوضوح: نكتب بعربية فصحى مبسطة، ونضع الإجابة المباشرة في أول الفقرة.',
                'الحساب قبل النشر: نحسب درجات القبلة في الجداول بأنفسنا ونراجعها قبل نشرها.',
                'التحديث المستمر: نراجع الصفحات دوريًا، ونعرض تاريخ آخر تحديث عليها.',
              ]}
            />
          </LegalSection>

          <LegalSection id="corrections" title="سياسة التصحيح">
            <p>
              إذا وجدت خطأ في أي معلومة أو درجة، فنرحب بتصحيحك على{' '}
              <a href="mailto:info@qiblasamt.com" className="font-semibold text-primary hover:underline">
                info@qiblasamt.com
              </a>
              . نراجع كل بلاغ، وإذا ثبت الخطأ نصححه ونحدّث تاريخ الصفحة. ونعدّ ملاحظات المستخدمين جزءًا أساسيًا
              من تحسين الموقع.
            </p>
          </LegalSection>

          <LegalSection id="principles" title="مبادئنا">
            <DataTable headers={['المبدأ', 'ماذا يعني عمليًا']} caption="مبادئ قبلة سمت">
              {[
                ['مجاني دائمًا', 'الأداة وكل محتوى الموقع متاحان دون رسوم أو تسجيل'],
                ['الخصوصية', 'نستخدم موقعك لحساب القبلة فقط، ولا نطلب حسابًا أو بيانات شخصية'],
                ['الدقة والشفافية', 'نشرح طريقة الحساب وحدودها بدل الوعود بالدقة المطلقة'],
                ['احترام التنوع الفقهي', 'نعرض الأقوال المعتبرة ونترك الترجيح لأهل العلم'],
                ['سهولة الاستخدام', 'تصميم عربي من اليمين إلى اليسار يعمل على الجوال والكمبيوتر'],
              ].map(([principle, meaning]) => (
                <tr key={principle} className="odd:bg-surface/60">
                  <td className="whitespace-nowrap px-4 py-3 font-semibold text-text">{principle}</td>
                  <td className="px-4 py-3 text-text-secondary">{meaning}</td>
                </tr>
              ))}
            </DataTable>
          </LegalSection>

          <LegalSection id="who-runs" title="من يدير الموقع">
            <p>
              يدير قبلة سمت ويراجع محتواه فريق التحرير في قبلة سمت، ونحرص على أن يمر كل محتوى شرعي أو تقني
              بمراجعة قبل نشره.
            </p>
          </LegalSection>

          <LegalSection id="funding" title="كيف نموّل الموقع">
            <p>
              يعتمد الموقع على الإعلانات عبر Google AdSense لتغطية تكاليف الاستضافة والتطوير، وهذا ما يسمح لنا
              بإبقاء الخدمة مجانية للجميع. ولا تؤثر الإعلانات على نتائج الأداة أو على المحتوى، ولا نقبل مقابلًا
              لتغيير أي معلومة. ونعمل على حظر فئات الإعلانات غير الملائمة لطبيعة الموقع.
            </p>
          </LegalSection>

          <LegalSection id="roadmap" title="ما نعمل عليه">
            <p>
              نعمل على توسيع الموقع بصفحات مخصصة لاتجاه القبلة في المدن العربية والعالمية، وأدلة عملية جديدة
              تجيب عن أكثر الأسئلة تكرارًا في رسائل المستخدمين. وتساعدنا ملاحظاتكم في ترتيب أولويات هذه
              الصفحات.
            </p>
          </LegalSection>

          <LegalSection id="contact" title="تواصل معنا">
            <p>
              نسعد برسائلك واقتراحاتك وتصحيحاتك على{' '}
              <a href="mailto:info@qiblasamt.com" className="font-semibold text-primary hover:underline">
                info@qiblasamt.com
              </a>
              ، أو عبر{' '}
              <a href="/contact/" className="font-semibold text-primary hover:underline">
                صفحة اتصل بنا
              </a>
              .
            </p>
          </LegalSection>
        </LegalPageShell>
      </main>
      <Footer />
    </>
  );
}
