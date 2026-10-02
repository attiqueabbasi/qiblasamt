export interface StepItem {
  number: string;
  text: string;
}

export const LOCATE_STEPS: StepItem[] = [
  { number: '١', text: 'اضغط زر تحديد الموقع، ثم اختر «السماح» عندما يطلب المتصفح إذن الوصول إلى موقعك.' },
  { number: '٢', text: 'انتظر ظهور درجة القبلة والمسافة إلى مكة المكرمة تحت البوصلة.' },
  { number: '٣', text: 'ضع الهاتف على سطح مستوٍ أو أمسكه أفقيًا بعيدًا عن المعادن والأجهزة الكهربائية.' },
  { number: '٤', text: 'أدِر الهاتف حتى يشير سهم الكعبة إلى الأعلى، فيكون ما أمامك هو القبلة.' },
  { number: '٥', text: 'إذا اهتز السهم أو ظهرت رسالة معايرة، حرّك الهاتف في الهواء على شكل الرقم 8 ثم أعد القياس.' },
];

export interface TroubleshootRow {
  problem: string;
  cause: string;
  fix: string;
}

export const TROUBLESHOOT_ROWS: TroubleshootRow[] = [
  { problem: 'السهم يدور أو يهتز باستمرار', cause: 'الحساس يحتاج إلى معايرة', fix: 'حرّك الهاتف على شكل الرقم 8 ثم أعد القياس' },
  { problem: 'الاتجاه يتغير عند تحريك الهاتف قليلًا', cause: 'معادن أو أجهزة كهربائية قريبة', fix: 'ابتعد عن الأجهزة والطاولات المعدنية' },
  { problem: 'النتيجة تختلف عن محراب مسجد قريب', cause: 'غطاء مغناطيسي أو حامل معدني', fix: 'انزع الغطاء ثم أعد القياس' },
  { problem: 'لا تظهر درجة القبلة', cause: 'إذن الموقع غير مفعّل', fix: 'فعّل الموقع واسمح للمتصفح باستخدامه' },
  { problem: 'السهم ثابت على آيفون', cause: 'إذن الحركة والاتجاه غير ممنوح', fix: 'اضغط «السماح» عند ظهور الطلب' },
  { problem: 'السهم لا يتحرك إطلاقًا', cause: 'الجهاز بلا حساس بوصلة', fix: 'استخدم درجة القبلة المكتوبة أو افتح الصفحة من الجوال' },
];

export interface CityRow {
  city: string;
  bearing: string;
  direction: string;
  distance: string;
}

export const CITY_ROWS: CityRow[] = [
  { city: 'مكة المكرمة', bearing: 'تختلف حسب الحي', direction: 'نحو الكعبة مباشرة', distance: 'داخل المدينة' },
  { city: 'الرياض', bearing: '243.8°', direction: 'غرب مائل إلى الجنوب', distance: '790 كم' },
  { city: 'جدة', bearing: '96.0°', direction: 'شرق تقريبًا', distance: '66 كم' },
  { city: 'المدينة المنورة', bearing: '176.2°', direction: 'جنوب تقريبًا', distance: '339 كم' },
  { city: 'الدمام', bearing: '244.1°', direction: 'غرب مائل إلى الجنوب', distance: '1,181 كم' },
  { city: 'الخبر', bearing: '245.4°', direction: 'غرب مائل إلى الجنوب', distance: '1,181 كم' },
  { city: 'جازان', bearing: '330.8°', direction: 'شمال مائل إلى الغرب', distance: '580 كم' },
  { city: 'حائل', bearing: '196.2°', direction: 'جنوب مائل إلى الغرب', distance: '704 كم' },
  { city: 'خميس مشيط', bearing: '319.3°', direction: 'شمال غرب', distance: '461 كم' },
  { city: 'الطائف', bearing: '285.6°', direction: 'غرب مائل إلى الشمال', distance: '63 كم' },
  { city: 'الهفوف', bearing: '248.2°', direction: 'غرب مائل إلى الجنوب', distance: '1,088 كم' },
  { city: 'بريدة', bearing: '218.6°', direction: 'جنوب غرب', distance: '689 كم' },
  { city: 'تبوك', bearing: '156.3°', direction: 'جنوب مائل إلى الشرق', distance: '841 كم' },
  { city: 'نجران', bearing: '313.6°', direction: 'شمال غرب', distance: '630 كم' },
  { city: 'القاهرة (مصر)', bearing: '136.1°', direction: 'جنوب شرق', distance: '1,287 كم' },
  { city: 'مسقط (عُمان)', bearing: '266.4°', direction: 'غرب تقريبًا', distance: '1,920 كم' },
  { city: 'الكويت', bearing: '224.6°', direction: 'جنوب غرب', distance: '1,204 كم' },
  { city: 'العقبة (الأردن)', bearing: '150.7°', direction: 'جنوب شرق', distance: '1,023 كم' },
  { city: 'شرم الشيخ (مصر)', bearing: '141.2°', direction: 'جنوب شرق', distance: '911 كم' },
  { city: 'لندن (بريطانيا)', bearing: '119.0°', direction: 'شرق مائل إلى الجنوب', distance: '4,794 كم' },
];

export interface OfflineMethod {
  icon: string;
  title: string;
  description: string;
}

export const OFFLINE_METHODS: OfflineMethod[] = [
  { icon: '🕌', title: 'محراب المسجد', description: 'أوثق مرجع عملي في أي مدينة، لأن قبلة المساجد محددة بعناية.' },
  {
    icon: '☀️',
    title: 'تعامد الشمس على الكعبة',
    description: 'مرتين كل عام تكون الشمس فوق الكعبة مباشرة، فتكون القبلة عكس ظل أي جسم قائم في كل مكان تظهر فيه الشمس.',
  },
  { icon: '⭐', title: 'نجم القطب (الجدي)', description: 'يدل على الشمال تقريبًا في نصف الكرة الشمالي، فتعدّ منه درجة قبلتك ليلًا.' },
  {
    icon: '🌅',
    title: 'الشروق والغروب',
    description: 'يدلان على الشرق والغرب تقريبًا، وهي طريقة للضرورة فقط لأن موضع الشروق يتغير خلال العام.',
  },
];

export interface SunCulminationRow {
  date: string;
  makkahTime: string;
  gmtTime: string;
  action: string;
}

export const SUN_CULMINATION_ROWS: SunCulminationRow[] = [
  {
    date: '27 أو 28 مايو',
    makkahTime: '12:18 ظهرًا',
    gmtTime: '09:18 صباحًا',
    action: 'قف قرب جسم قائم واتجه نحو الشمس، أي عكس الظل',
  },
  {
    date: '15 أو 16 يوليو',
    makkahTime: '12:27 ظهرًا',
    gmtTime: '09:27 صباحًا',
    action: 'علّم اتجاه الظل على الأرض لتعود إليه لاحقًا',
  },
];

export interface ReferenceItem {
  label: string;
  url: string;
}

export const REFERENCES: ReferenceItem[] = [
  { label: 'القرآن الكريم، سورة البقرة، الآية 144', url: 'https://quran.com/2/144' },
  { label: 'صحيح البخاري، حديث تحويل القبلة في قباء (رقم 403)', url: 'https://sunnah.com/bukhari:403' },
  {
    label: 'الإدارة الوطنية الأمريكية للمحيطات والغلاف الجوي (NOAA)، حاسبة المجال المغناطيسي',
    url: 'https://www.ngdc.noaa.gov/geomag/',
  },
  { label: 'ويكيبيديا العربية، مقالة القبلة', url: 'https://ar.wikipedia.org/wiki/قبلة' },
];

export const INTERNAL_LINKS = {
  about: '/about/',
};
