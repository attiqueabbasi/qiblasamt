import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/legal/Breadcrumb';
import LegalHero from '@/components/legal/LegalHero';
import LegalPageShell from '@/components/legal/LegalPageShell';
import { LegalSection, LegalList } from '@/components/legal/LegalSection';
import LegalJsonLd from '@/components/legal/LegalJsonLd';
import { buildLegalMetadata } from '@/lib/legal-metadata';

const PATH = '/disclaimer/';
const TITLE = 'إخلاء المسؤولية | قبلة سمت';
const DESCRIPTION =
  'حدود دقة أداة اتجاه القبلة في قبلة سمت، والفرق بين الحساب وقراءة البوصلة، ولماذا المحتوى الشرعي للتعريف وليس فتوى.';

export const metadata: Metadata = buildLegalMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

const TOC = [
  { id: 'accuracy', label: 'دقة أداة اتجاه القبلة' },
  { id: 'tables', label: 'الجداول والقيم التقريبية' },
  { id: 'prayer-times', label: 'مواقيت الصلاة' },
  { id: 'not-a-fatwa', label: 'المحتوى الشرعي ليس فتوى' },
  { id: 'not-navigation', label: 'ليست أداة ملاحة' },
  { id: 'ads', label: 'الإعلانات' },
  { id: 'external-links', label: 'الروابط الخارجية' },
  { id: 'no-warranty', label: 'دون ضمانات' },
  { id: 'updates', label: 'تحديث المحتوى' },
  { id: 'consent', label: 'موافقتك على هذا الإخلاء' },
  { id: 'report', label: 'الإبلاغ عن خطأ' },
];

export default function DisclaimerPage() {
  return (
    <>
      <LegalJsonLd path={PATH} name="إخلاء المسؤولية" description={DESCRIPTION} breadcrumbLabel="إخلاء المسؤولية" />
      <Header />
      <main>
        <Breadcrumb current="إخلاء المسؤولية" />
        <LegalHero
          icon="⚠️"
          title="إخلاء المسؤولية"
          lastUpdated="23 سبتمبر 2026"
          intro="المعلومات والأدوات المنشورة على موقع قبلة سمت مقدمة بحسن نية لمساعدة المسلمين في تحديد اتجاه القبلة ومعرفة ما يتعلق به. ونبذل جهدنا لتكون دقيقة ومحدثة، لكن استخدامك للموقع يعني أنك تفهم الحدود الموضحة في هذه الصفحة."
        />

        <LegalPageShell toc={TOC}>
          <LegalSection id="accuracy" title="دقة أداة اتجاه القبلة">
            <p>
              تحسب الأداة اتجاه القبلة رياضيًا بطريقة الدائرة العظمى من إحداثيات موقعك إلى إحداثيات الكعبة
              المشرفة، وهذا الحساب دقيق. أما السهم الذي يتحرك على الشاشة فيعتمد على حساس البوصلة في جهازك، وقد
              يختلف عن الاتجاه الصحيح لأسباب منها:
            </p>
            <LegalList
              items={[
                'حاجة حساس البوصلة إلى المعايرة.',
                'وجود معادن أو مغناطيسات أو أجهزة كهربائية قريبة، أو غطاء هاتف مغناطيسي.',
                'ضعف دقة الموقع الجغرافي داخل المباني أو عند ضعف إشارة GPS.',
                'الانحراف المغناطيسي في منطقتك إذا كان الجهاز لا يصححه.',
                'القراءة داخل وسائل النقل مثل الطائرات والقطارات والسيارات.',
              ]}
            />
            <p>
              لذلك لا نضمن أن يطابق السهم الاتجاه الصحيح في كل الظروف. وننصحك بمقارنة النتيجة بمحراب أقرب
              مسجد، أو بطريقة ثانية مثل ظل الشمس يوم تعامدها على الكعبة، خاصة عند تحديد القبلة في بيت أو مصلى
              بصفة دائمة.
            </p>
          </LegalSection>

          <LegalSection id="tables" title="الجداول والقيم التقريبية">
            <p>
              درجات القبلة في جداول المدن محسوبة لمركز كل مدينة ومقربة لأقرب عُشر درجة، وقد تختلف قليلًا بين
              الأحياء. ومواعيد تعامد الشمس على الكعبة المنشورة تقريبية، وقد تختلف بيوم أو بدقائق من سنة لأخرى،
              ويُستحسن التأكد منها عبر الجهات الفلكية الرسمية كل عام.
            </p>
          </LegalSection>

          <LegalSection id="prayer-times" title="مواقيت الصلاة">
            <p>
              تُحسب مواقيت الصلاة في الموقع فلكيًا وفق طرق الحساب المعروفة، وقد تختلف بدقائق عن التقويم الرسمي
              المعتمد في بلدك أو عن وقت الأذان في مسجدك. وعند الاختلاف، يُعتمد التقويم الرسمي المحلي وأذان
              المسجد، خاصة في أوقات الإمساك والإفطار في رمضان.
            </p>
          </LegalSection>

          <LegalSection id="not-a-fatwa" title="المحتوى الشرعي ليس فتوى">
            <p>
              المعلومات الشرعية في الموقع، مثل أحكام استقبال القبلة والصلاة في السفر، منقولة من مصادرها مع عرض
              أقوال المذاهب الفقهية دون ترجيح، وهي للتعريف العام فقط. هذا المحتوى لا يُعد فتوى، ولا يغني عن سؤال
              أهل العلم. وفي المسائل الخاصة بحالتك، يُرجع إلى عالم موثوق أو إلى الجهة الرسمية للفتوى في بلدك.
            </p>
          </LegalSection>

          <LegalSection id="not-navigation" title="ليست أداة ملاحة">
            <p>
              صُممت الأداة لتحديد اتجاه القبلة للصلاة فقط. ولا يجوز الاعتماد عليها في الملاحة البرية أو البحرية
              أو الجوية، أو في أي نشاط تتوقف عليه السلامة الشخصية.
            </p>
          </LegalSection>

          <LegalSection id="ads" title="الإعلانات">
            <p>
              تُعرض الإعلانات على الموقع عبر Google AdSense، ويختارها نظام Google آليًا ولا نختارها بأنفسنا.
              ونعمل على حظر فئات الإعلانات غير الملائمة لطبيعة الموقع، مثل المقامرة والمواعدة، من خلال إعدادات
              الحظر المتاحة لنا. ومع ذلك قد يظهر إعلان غير مناسب أحيانًا، ولا يعني ظهوره أننا نؤيده. وإذا رأيت
              إعلانًا لا يليق، فأبلغنا عنه مع لقطة شاشة إن أمكن.
            </p>
          </LegalSection>

          <LegalSection id="external-links" title="الروابط الخارجية">
            <p>
              نضع روابط إلى مصادر خارجية موثوقة للاستزادة، مثل مواقع القرآن الكريم والحديث والجهات العلمية. ولا
              نتحكم في محتوى هذه المواقع أو تحديثاتها، ولا نتحمل مسؤولية ما تنشره.
            </p>
          </LegalSection>

          <LegalSection id="no-warranty" title="دون ضمانات">
            <p>
              يُقدَّم الموقع ومحتواه وأدواته «كما هي»، دون ضمانات صريحة أو ضمنية. وفي حدود ما يسمح به القانون،
              لا نتحمل مسؤولية أي خسارة أو ضرر ينتج عن الاعتماد على المعلومات أو نتائج الأداة. ولمزيد من
              التفاصيل راجع{' '}
              <a href="/terms/" className="font-semibold text-primary hover:underline">
                شروط الاستخدام
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection id="updates" title="تحديث المحتوى">
            <p>
              نراجع المحتوى ونحدّثه دوريًا، لكن بعض المعلومات قد تتغير بعد نشرها، مثل إعدادات المتصفحات
              وأذونات الهواتف ومواعيد الظواهر الفلكية. ويحق لنا تعديل أي محتوى أو حذفه دون إشعار مسبق.
            </p>
          </LegalSection>

          <LegalSection id="consent" title="موافقتك على هذا الإخلاء">
            <p>باستخدامك للموقع فإنك توافق على إخلاء المسؤولية هذا. وإذا لم توافق عليه، فيمكنك التوقف عن استخدام الموقع في أي وقت.</p>
          </LegalSection>

          <LegalSection id="report" title="الإبلاغ عن خطأ">
            <p>
              إذا لاحظت خطأ في درجة القبلة لمدينة ما، أو في معلومة شرعية أو تقنية، فراسلنا على{' '}
              <a href="mailto:info@qiblasamt.com" className="font-semibold text-primary hover:underline">
                info@qiblasamt.com
              </a>{' '}
              مع ذكر الصفحة والمعلومة المقصودة، وسنراجعها ونصححها إذا ثبت الخطأ.
            </p>
          </LegalSection>
        </LegalPageShell>
      </main>
      <Footer />
    </>
  );
}
