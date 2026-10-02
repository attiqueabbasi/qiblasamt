import Container from './Container';
import IslamicPattern from './IslamicPattern';

const FEATURES = [
  {
    icon: '🎯',
    title: 'دقة عالية',
    description: 'حساب رياضي دقيق باستخدام معادلة الاتجاه الدائري الأعظم بدلاً من التقريب الخطي.',
    tone: 'primary',
  },
  {
    icon: '🧭',
    title: 'بوصلة حية',
    description: 'تتبع اتجاهك لحظيًا على الجوال مع اهتزاز تنبيهي عند مواجهة القبلة تمامًا.',
    tone: 'accent',
  },
  {
    icon: '🔒',
    title: 'خصوصية تامة',
    description: 'كل الحسابات تتم داخل متصفحك مباشرة؛ لا نخزّن موقعك أو نشاركه مع أي جهة.',
    tone: 'success',
  },
  {
    icon: '📶',
    title: 'يعمل دون إنترنت',
    description: 'بعد أول زيارة، يمكن استخدام الأداة حتى بدون اتصال بالإنترنت بفضل التخزين المؤقت.',
    tone: 'accent',
  },
  {
    icon: '💯',
    title: 'مجانية بالكامل',
    description: 'لا اشتراكات ولا إعلانات مزعجة ولا حاجة لإنشاء حساب لاستخدام الأداة.',
    tone: 'primary',
  },
  {
    icon: '🖥️',
    title: 'يعمل على كل جهاز',
    description: 'تجربة مصممة خصيصًا للجوال والحاسوب، مع عرض ثابت واضح عند عدم توفر بوصلة.',
    tone: 'success',
  },
] as const;

const TONE_CLASSES: Record<(typeof FEATURES)[number]['tone'], { badge: string; border: string }> = {
  primary: { badge: 'bg-primary/10', border: 'before:bg-primary' },
  accent: { badge: 'bg-accent/15', border: 'before:bg-accent' },
  success: { badge: 'bg-success/10', border: 'before:bg-success' },
};

export default function FeaturesGrid() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-gradient-to-b from-surface to-white dark:to-bg">
      <IslamicPattern opacity={0.04} />
      <Container width="wide" className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-text sm:text-4xl">لماذا قبلة سمت؟</h2>
          <p className="mt-3 text-text-secondary">
            صُممت الأداة لتكون دقيقة وسريعة وآمنة، وسهلة الاستخدام لجميع المسلمين حول العالم.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className={`relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow before:absolute before:inset-x-0 before:top-0 before:h-1 hover:shadow-md dark:bg-surface ${TONE_CLASSES[feature.tone].border}`}
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${TONE_CLASSES[feature.tone].badge}`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-text">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
