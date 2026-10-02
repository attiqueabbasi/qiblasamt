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

const PATH = '/cookie-policy/';
const TITLE = 'سياسة ملفات تعريف الارتباط | قبلة سمت';
const DESCRIPTION =
  'تعرف على ملفات تعريف الارتباط التي يستخدمها قبلة سمت للتشغيل والتحليل وإعلانات Google، وكيف تدير موافقتك أو تعطلها من المتصفح.';

export const metadata: Metadata = buildLegalMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  index: false,
});

const TOC = [
  { id: 'what-are-cookies', label: 'ما هي ملفات تعريف الارتباط' },
  { id: 'session-persistent', label: 'ملفات الجلسة والملفات الدائمة' },
  { id: 'why', label: 'لماذا نستخدمها' },
  { id: 'types', label: 'أنواع ملفات تعريف الارتباط' },
  { id: 'third-party', label: 'ملفات الجهات الخارجية' },
  { id: 'personalized', label: 'الإعلانات المخصصة وغير المخصصة' },
  { id: 'manage-consent', label: 'كيف تدير موافقتك' },
  { id: 'browser-control', label: 'التحكم عبر المتصفح' },
  { id: 'opt-out', label: 'روابط إلغاء الاشتراك' },
  { id: 'dnt', label: 'إشارات عدم التتبع' },
  { id: 'disabled', label: 'إذا عطلت ملفات تعريف الارتباط' },
  { id: 'changes', label: 'التحديثات على هذه السياسة' },
  { id: 'contact', label: 'تواصل معنا' },
];

export default function CookiePolicyPage() {
  return (
    <>
      <LegalJsonLd
        path={PATH}
        name="سياسة ملفات تعريف الارتباط"
        description={DESCRIPTION}
        breadcrumbLabel="سياسة ملفات تعريف الارتباط"
      />
      <Header />
      <main>
        <Breadcrumb current="سياسة ملفات تعريف الارتباط" />
        <LegalHero
          icon="🍪"
          title="سياسة ملفات تعريف الارتباط"
          lastUpdated="23 سبتمبر 2026"
          intro="توضح هذه السياسة كيف يستخدم موقع قبلة سمت ملفات تعريف الارتباط والتقنيات المشابهة، ولماذا نستخدمها، وكيف يمكنك التحكم فيها. وهي مكملة لسياسة الخصوصية."
        />

        <LegalPageShell toc={TOC}>
          <LegalSection id="what-are-cookies" title="ما هي ملفات تعريف الارتباط">
            <p>
              ملفات تعريف الارتباط (الكوكيز) ملفات نصية صغيرة يحفظها المتصفح على جهازك عند زيارة موقع ما.
              تساعد الموقع على العمل بصورة صحيحة وتذكر اختياراتك، وتساعد مزودي التحليل والإعلانات على قياس
              الاستخدام وعرض إعلانات مناسبة.
            </p>
            <p>
              ونستخدم كذلك تقنيات مشابهة، مثل التخزين المحلي في المتصفح (Local Storage) لحفظ بعض التفضيلات،
              ووحدات برمجية صغيرة يضعها مزودو الإعلانات والتحليل. وتنطبق هذه السياسة على جميع هذه التقنيات.
            </p>
          </LegalSection>

          <LegalSection id="session-persistent" title="ملفات الجلسة والملفات الدائمة">
            <p>
              تنقسم ملفات تعريف الارتباط من حيث المدة إلى نوعين: ملفات الجلسة التي تُحذف تلقائيًا عند إغلاق
              المتصفح، والملفات الدائمة التي تبقى على جهازك مدة محددة أو حتى تحذفها بنفسك. ونستخدم النوعين حسب
              الغرض من كل ملف.
            </p>
          </LegalSection>

          <LegalSection id="why" title="لماذا نستخدم ملفات تعريف الارتباط">
            <LegalList
              items={[
                'لتشغيل الموقع بصورة صحيحة وحفظ اختيارك في نافذة الموافقة.',
                'لتذكر تفضيلاتك حتى لا تعيد اختيارها في كل زيارة.',
                'لمعرفة الصفحات الأكثر فائدة للزوار وتحسين سرعة الموقع ومحتواه.',
                'لعرض الإعلانات التي تغطي تكاليف تشغيل الموقع وتبقيه مجانيًا.',
              ]}
            />
          </LegalSection>

          <LegalSection id="types" title="أنواع ملفات تعريف الارتباط التي نستخدمها">
            <DataTable
              headers={['النوع', 'الغرض', 'المزود', 'المدة التقريبية', 'تحتاج موافقتك؟']}
              caption="أنواع ملفات تعريف الارتباط"
            >
              {[
                ['ضرورية', 'تشغيل الموقع، وحفظ اختيارك في نافذة الموافقة، والحماية من الاستخدام المسيء', 'قبلة سمت ومنصة إدارة الموافقة', 'حتى 12 شهرًا', 'لا'],
                ['التفضيلات', 'تذكر آخر مدينة اخترتها وإعدادات العرض', 'قبلة سمت', 'حتى تحذفها من المتصفح', 'حسب القانون المطبق'],
                ['التحليل', 'معرفة عدد الزوار والصفحات الأكثر استخدامًا بصورة إجمالية', 'Google Analytics', 'حتى 24 شهرًا', 'نعم، حيث يشترط القانون'],
                ['الإعلانات', 'عرض الإعلانات وقياس أدائها، وتخصيصها عند موافقتك', 'Google AdSense وشركاؤه المعتمدون', 'تختلف حسب المزود', 'نعم، حيث يشترط القانون'],
              ].map((row) => (
                <tr key={row[0]} className="odd:bg-surface/60">
                  {row.map((cell, idx) => (
                    <td key={idx} className={`px-4 py-3 ${idx === 0 ? 'whitespace-nowrap font-semibold text-text' : 'text-text-secondary'}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </DataTable>
          </LegalSection>

          <LegalSection id="third-party" title="ملفات تعريف الارتباط الخاصة بالجهات الخارجية">
            <p>
              بعض ملفات تعريف الارتباط يضعها طرف ثالث وليس الموقع نفسه، وأهمها ملفات Google المستخدمة في
              الإعلانات والتحليل. يستخدم موردو الجهات الخارجية، ومنهم Google، ملفات تعريف الارتباط لعرض
              الإعلانات بناءً على زياراتك السابقة لهذا الموقع أو لمواقع أخرى. ولا نتحكم في هذه الملفات، وتخضع
              لسياسات أصحابها.
            </p>
            <p>
              لمعرفة المزيد عن طريقة استخدام Google لهذه البيانات، راجع صفحة{' '}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Google الخاصة بالمواقع الشريكة
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection id="personalized" title="الإعلانات المخصصة وغير المخصصة">
            <p>
              إذا وافقت على ملفات تعريف الارتباط الإعلانية، قد تظهر لك إعلانات مبنية على اهتماماتك وزياراتك
              السابقة. وإذا رفضتها، تظهر لك إعلانات غير مخصصة تعتمد على محتوى الصفحة وموقعك التقريبي، وقد
              تُستخدم ملفات محدودة لأغراض مثل منع الاحتيال وتحديد عدد مرات ظهور الإعلان.
            </p>
          </LegalSection>

          <LegalSection id="manage-consent" title="كيف تدير موافقتك">
            <p>
              عند زيارتك الأولى من المنطقة الاقتصادية الأوروبية أو المملكة المتحدة أو سويسرا، تظهر لك نافذة
              موافقة تتيح لك قبول ملفات تعريف الارتباط غير الضرورية أو رفضها أو اختيار الأنواع التي تسمح بها.
              ويمكنك تغيير اختيارك في أي وقت من رابط «إعدادات ملفات تعريف الارتباط» في أسفل كل صفحة.
            </p>
          </LegalSection>

          <LegalSection id="browser-control" title="التحكم عبر المتصفح">
            <p>تتيح لك جميع المتصفحات الحديثة حذف ملفات تعريف الارتباط أو منعها. وتجد هذا الخيار عادة في الأماكن التالية:</p>
            <LegalList
              items={[
                'Google Chrome: الإعدادات، ثم الخصوصية والأمان، ثم ملفات تعريف الارتباط وبيانات المواقع الأخرى.',
                'Safari على آيفون: الإعدادات، ثم Safari، ثم متقدم، ثم بيانات مواقع الويب.',
                'Mozilla Firefox: الإعدادات، ثم الخصوصية والأمان، ثم ملفات تعريف الارتباط وبيانات المواقع.',
                'Microsoft Edge: الإعدادات، ثم ملفات تعريف الارتباط وأذونات المواقع.',
              ]}
            />
            <p>وقد تختلف أسماء القوائم قليلًا حسب إصدار المتصفح ولغته.</p>
          </LegalSection>

          <LegalSection id="opt-out" title="روابط إلغاء الاشتراك">
            <LegalList
              items={[
                <>
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    إعدادات الإعلانات في Google
                  </a>{' '}
                  لإيقاف الإعلانات المخصصة من Google.
                </>,
                <>
                  <a
                    href="https://www.aboutads.info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    aboutads.info
                  </a>{' '}
                  لإيقاف إعلانات عدد من الشركات المشاركة في الولايات المتحدة.
                </>,
                <>
                  <a
                    href="https://www.youronlinechoices.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    youronlinechoices.eu
                  </a>{' '}
                  للمستخدمين في أوروبا.
                </>,
                <>
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    إضافة إلغاء الاشتراك في Google Analytics
                  </a>{' '}
                  لمنع جمع بيانات التحليل.
                </>,
              ]}
            />
          </LegalSection>

          <LegalSection id="dnt" title="إشارات عدم التتبع">
            <p>
              نحترم إشارة التحكم العالمي في الخصوصية (Global Privacy Control) بوصفها طلبًا لإلغاء الاشتراك في
              مشاركة البيانات لأغراض الإعلان حيث يشترط القانون ذلك. أما إشارة «عدم التتبع» (Do Not Track)
              القديمة فلا يوجد معيار موحد للتعامل معها، لذلك نعتمد على نافذة الموافقة وإعدادات المتصفح بدلًا
              منها.
            </p>
          </LegalSection>

          <LegalSection id="disabled" title="ماذا يحدث إذا عطلت ملفات تعريف الارتباط">
            <p>
              تعمل أداة القبلة دون ملفات تعريف الارتباط التحليلية أو الإعلانية، لأنها تعتمد على إذن الموقع
              وحساسات جهازك. لكن تعطيل ملفات التفضيلات يعني أن الموقع لن يتذكر اختياراتك بين الزيارات، وقد
              تظهر لك نافذة الموافقة مرة أخرى إذا حذفت الملف الذي يحفظ اختيارك.
            </p>
          </LegalSection>

          <LegalSection id="changes" title="التحديثات على هذه السياسة">
            <p>قد نحدّث هذه السياسة عند إضافة خدمات جديدة أو تغير متطلبات القانون، ونعرض تاريخ آخر تحديث في أعلى الصفحة.</p>
          </LegalSection>

          <LegalSection id="contact" title="تواصل معنا">
            <p>
              لأي سؤال عن ملفات تعريف الارتباط، راسلنا على{' '}
              <a href="mailto:info@qiblasamt.com" className="font-semibold text-primary hover:underline">
                info@qiblasamt.com
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
