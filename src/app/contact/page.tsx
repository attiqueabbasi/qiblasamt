import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/legal/Breadcrumb';
import LegalHero from '@/components/legal/LegalHero';
import LegalPageShell from '@/components/legal/LegalPageShell';
import { LegalSection, LegalList } from '@/components/legal/LegalSection';
import LegalJsonLd from '@/components/legal/LegalJsonLd';
import DataTable from '@/components/content/DataTable';
import Container from '@/components/Container';
import { buildLegalMetadata } from '@/lib/legal-metadata';

const PATH = '/contact/';
const TITLE = 'اتصل بنا | قبلة سمت';
const DESCRIPTION = 'تواصل مع فريق قبلة سمت عبر info@qiblasamt.com للإبلاغ عن خطأ في اتجاه القبلة أو مشكلة تقنية أو طلب خصوصية أو اقتراح.';

export const metadata: Metadata = buildLegalMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

const TOC = [
  { id: 'site-info', label: 'معلومات الموقع' },
  { id: 'when', label: 'متى تراسلنا' },
  { id: 'tips', label: 'نصائح لرسالة يسهل الرد عليها' },
  { id: 'response-time', label: 'وقت الرد' },
  { id: 'no-reply', label: 'رسائل لا نرد عليها' },
  { id: 'religious', label: 'الأسئلة الشرعية' },
  { id: 'before', label: 'قبل أن تراسلنا' },
  { id: 'message-privacy', label: 'خصوصية رسائلك' },
];

const WHEN_TO_WRITE = [
  { type: 'خطأ في اتجاه القبلة', what: 'اسم المدينة أو الحي، ونوع الجهاز والمتصفح، والدرجة التي ظهرت لك، والاتجاه المرجعي الذي قارنت به مثل محراب المسجد' },
  { type: 'تصحيح معلومة', what: 'رابط الصفحة، والمعلومة المقصودة، والمصدر الذي يثبت التصحيح إن وجد' },
  { type: 'مشكلة تقنية', what: 'وصف المشكلة، ونوع الجهاز ونظام التشغيل والمتصفح، ولقطة شاشة إن أمكن' },
  { type: 'اقتراح أو فكرة', what: 'الفكرة وكيف ستفيد المستخدمين' },
  { type: 'طلب خصوصية', what: 'نوع الطلب، مثل الوصول إلى بياناتك أو حذفها، مع كتابة «طلب خصوصية» في عنوان الرسالة' },
  { type: 'الإبلاغ عن إعلان غير لائق', what: 'رابط الصفحة، ووصف الإعلان، ولقطة شاشة إن أمكن' },
  { type: 'التعاون والشراكات', what: 'اسم الجهة وطبيعة التعاون المقترح' },
];

export default function ContactPage() {
  return (
    <>
      <LegalJsonLd
        path={PATH}
        name="اتصل بنا"
        description={DESCRIPTION}
        breadcrumbLabel="اتصل بنا"
        pageType="ContactPage"
        includeOrganization
        contactEmail="info@qiblasamt.com"
      />
      <Header />
      <main>
        <Breadcrumb current="اتصل بنا" />
        <LegalHero
          icon="✉️"
          title="اتصل بنا"
          intro="يسعدنا تواصلك مع فريق قبلة سمت لأي سؤال أو اقتراح أو تصحيح. أسرع طريقة للوصول إلينا هي البريد الإلكتروني."
        />

        <section className="bg-white py-10 dark:bg-bg">
          <Container width="narrow">
            <a
              href="mailto:info@qiblasamt.com"
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface px-8 py-8 text-center transition-shadow hover:shadow-md sm:flex-row sm:justify-center sm:gap-4"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-2xl text-white">
                ✉️
              </span>
              <span>
                <span className="block text-sm text-text-secondary">البريد الإلكتروني</span>
                <span className="block text-xl font-bold text-primary">info@qiblasamt.com</span>
              </span>
            </a>
          </Container>
        </section>

        <LegalPageShell toc={TOC}>
          <LegalSection id="site-info" title="معلومات الموقع">
            <DataTable headers={['البند', 'التفاصيل']} caption="معلومات الموقع للتواصل">
              {[
                ['اسم الموقع', 'قبلة سمت'],
                ['النطاق', 'qiblasamt.com'],
                ['البريد الإلكتروني', 'info@qiblasamt.com'],
                ['لغة التواصل', 'العربية، ويمكنك مراسلتنا بالإنجليزية أيضًا'],
              ].map(([label, value]) => (
                <tr key={label} className="odd:bg-surface/60">
                  <td className="whitespace-nowrap px-4 py-3 font-semibold text-text">{label}</td>
                  <td className="px-4 py-3 text-text-secondary">{value}</td>
                </tr>
              ))}
            </DataTable>
          </LegalSection>

          <LegalSection id="when" title="متى تراسلنا">
            <DataTable headers={['نوع الرسالة', 'ماذا تكتب فيها']} caption="أنواع الرسائل ومحتواها">
              {WHEN_TO_WRITE.map((row) => (
                <tr key={row.type} className="odd:bg-surface/60">
                  <td className="whitespace-nowrap px-4 py-3 font-semibold text-text">{row.type}</td>
                  <td className="px-4 py-3 text-text-secondary">{row.what}</td>
                </tr>
              ))}
            </DataTable>
          </LegalSection>

          <LegalSection id="tips" title="نصائح لرسالة يسهل الرد عليها">
            <LegalList
              items={[
                'اكتب عنوانًا واضحًا يصف موضوع الرسالة.',
                'اذكر الصفحة المقصودة برابطها المباشر.',
                'أرفق لقطة شاشة في المشكلات التقنية، فهي توفر كثيرًا من الوقت.',
                'لا ترسل بيانات حساسة لا نحتاجها، مثل كلمات المرور أو أرقام الهوية.',
              ]}
            />
          </LegalSection>

          <LegalSection id="response-time" title="وقت الرد">
            <p>
              نقرأ جميع الرسائل، ونسعى للرد خلال 3 أيام عمل. وقد يتأخر الرد قليلًا في مواسم الذروة مثل شهر
              رمضان وموسم الحج. أما طلبات الخصوصية فنرد عليها خلال المدة التي يحددها القانون المطبق، وغالبًا
              خلال 30 يومًا.
            </p>
          </LegalSection>

          <LegalSection id="no-reply" title="رسائل لا نرد عليها">
            <p>
              حرصًا على وقت الفريق، لا نرد على الرسائل الترويجية العامة، أو عروض بيع الروابط والمقالات
              المدفوعة، أو الرسائل التي تحتوي على روابط مشبوهة. ولا نطلب منك أبدًا أي دفعة مالية أو بيانات
              بنكية، فإن وصلتك رسالة تنتحل اسمنا وتطلب ذلك فتجاهلها وأبلغنا عنها.
            </p>
          </LegalSection>

          <LegalSection id="religious" title="الأسئلة الشرعية">
            <p>
              نرحب بملاحظاتك على المحتوى الشرعي المنشور، لكننا لا نصدر فتاوى فردية. وللأسئلة الخاصة بحالتك،
              ننصحك بالرجوع إلى عالم موثوق أو إلى الجهة الرسمية للفتوى في بلدك.
            </p>
          </LegalSection>

          <LegalSection id="before" title="قبل أن تراسلنا">
            <p>
              قد تجد إجابة سؤالك مباشرة في{' '}
              <a href="/#faq" className="font-semibold text-primary hover:underline">
                الأسئلة الشائعة
              </a>{' '}
              في الصفحة الرئيسية، بما فيها حلول شائعة إذا كان سهم القبلة لا يتحرك أو يهتز.
            </p>
          </LegalSection>

          <LegalSection id="message-privacy" title="خصوصية رسائلك">
            <p>
              نستخدم عنوان بريدك ومحتوى رسالتك للرد عليك فقط، ولا نضيفك إلى أي قائمة بريدية دون طلبك، ونحذف
              الرسائل بعد انتهاء المدة الموضحة في{' '}
              <a href="/privacy-policy/" className="font-semibold text-primary hover:underline">
                سياسة الخصوصية
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
