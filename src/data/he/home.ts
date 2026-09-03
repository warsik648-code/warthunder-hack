import { en } from './en';

const WT = en('War Thunder');
const WTH = en('War Thunder Hacks');

export const homeSeoHe = {
  title: `צ'יטים ל-${WT} | ${en('Aimbot')}, ${en('ESP')} ו-${en('Radar')} | ${WTH}`,
  description: `צ'יטים ל-${WT} עם ${en('Aimbot')}, ${en('ESP')} ו-${en('Radar')} שאפשר לכוון. ל-${en('PC')} ולקונסולות.`,
};

export const homeHeroHe = {
  h1: `צ'יטים ל-${WT} – ${en('Aimbot')}, ${en('ESP')} ועוד`,
  sentences: [
    `כל מה שאתם צריכים ל-${WT} במקום אחד: ${en('ESP')}, ${en('Aimbot')} ו-${en('Radar')} שאפשר לכוון לפי הקרב. ${WTH} לא מזוהה כרגע.`,
    `אפשר לעשות סטרים ב-${en('Discord Live')}, ${en('TikTok Live')}, ${en('Kick')}, ${en('Twitch')} ו-${en('YouTube Live')} בלי שהתפריט יקפוץ על המסך.`,
  ],
  labels: ['יורד מיד', 'יש עדכונים', 'יש תמיכה'],
  primaryCta: 'קנו עכשיו',
  secondaryCta: "צפו בפיצ'רים",
} as const;

export const homeChromeHe = {
  benefitsEyebrow: 'בקצרה',
  benefitsHeading: 'למה משחקים עם זה',
  featuresEyebrow: "מה כלול?",
  featuresHeading: `פיצ'רים ל-${WT}`,
  featuresIntro: `אפשר להריץ כל פיצ'ר לבד. רוב האנשים משאירים ${en('ESP')} ו-${en('Radar')} דולקים, ומוסיפים ${en('Aimbot')} כשרוצים נעילה יותר חדה.`,
  whyEyebrow: 'בפועל',
  whyHeading: 'למה דווקא זה',
  startEyebrow: 'רכישה',
  startHeading: 'איך מתחילים',
  compatibilityEyebrow: 'על מה זה רץ',
  compatibilityHeading: 'תאימות',
  compatibilityCopy: `${WTH} רץ על ${WT} ב-${en('PC')} ובקונסולות. מקלדת, עכבר ושולטים. רישיון עדכני מול הקליינט הרשמי.`,
  compatibilityCaption: `תאימות ${WTH}`,
  faqEyebrow: 'שאלות',
  faqHeading: `שאלות על צ'יטים ל-${WT}`,
  faqIntro: `תשובות קצרות לפי מה שיש עכשיו. אם ה-${en('Patch')} של ${WT} חדש יותר ממה שהורדתם, כתבו לתמיכה עם המייל של ההזמנה.`,
  closeHeading: 'לרכישה',
  closeCopy: `רישיון אחד ל-${en('Aimbot')}, ${en('ESP')}, ${en('Radar')} ו-${en('Wallhack')}. לא מזוהה כרגע. בודקים סטטוס, ואז נכנסים לקרב.`,
  heroAlt: 'מפציץ כבד מעל העננים בשקיעה, עם פיצוץ רחוק באופק',
} as const;

export const benefitsHe = [
  {
    title: 'לא מזוהה כרגע',
    body: `סטטוס קודם, קרב אחר כך. ${WTH} מוצע כצ'יט ל-${WT} שלא מזוהה כרגע, בלי באן, ל-${en('PC')} ולקונסולות.`,
  },
  {
    title: "פיצ'רים שאפשר לכוון",
    body: `${en('ESP')}, ${en('Aimbot')} ו-${en('Radar')} לא חייבים לרוץ על מקסימום. מכבים, מצמצמים ${en('FOV')}, או משאירים רק ${en('Radar')} אם זה כל מה שצריך במשחק.`,
  },
  {
    title: `${en('Ground')}, ${en('Air')} וים`,
    body: `אותו רישיון לטנקים, מטוסים וספינות — ${en('Ground RB')}, ${en('Air RB')} וגם Naval. לא חבילה נפרדת לכל ${en('lineup')}.`,
  },
  {
    title: 'רישיון אחד, הכל בפנים',
    body: `הפיצ'רים מגיעים ביחד. קונים פעם אחת, ואחרי ההפעלה מדליקים מה שרוצים לקרב.`,
  },
] as const;

export const featureOverviewHe = [
  {
    id: 'esp',
    href: '#esp',
    name: 'ESP',
    title: `ESP ל-${WT}`,
    body: `${en('ESP')} ל-${WT} מציג מידע נוסף בזמן הקרב: טנקים ומטוסים דרך מחסה, עם טווח וסוג.`,
  },
  {
    id: 'aimbot',
    href: '#aimbot',
    name: 'Aimbot',
    title: `Aimbot ל-${WT}`,
    body: `${en('Aimbot')} שמסייע לכם להינעל על מטרות בצורה מהירה יותר. אפשר לכוון ${en('smoothing')}, ${en('FOV')} ואיזו מטרה קודם.`,
  },
  {
    id: 'radar',
    href: '#radar',
    name: 'Radar',
    title: `Radar ל-${WT}`,
    body: `${en('Radar')} ל-${WT} מראה מי סביבכם — גם באגפים ובגישה לנקודה, לא רק מה שיש מול הפנים.`,
  },
  {
    id: 'wallhack',
    href: '#features',
    name: 'Wallhack',
    title: 'Wallhack',
    body: `${en('Wallhack')} משאיר כלים מאחורי קירות, רכסים וענן מסומנים, כדי שמחסה לא יסתיר את הירי הבא.`,
  },
] as const;

export const featureDeepDivesHe = [
  {
    id: 'esp',
    eyebrow: en('ESP'),
    h2: `ESP ל-${WT}`,
    body: [
      `${en('ESP')} ל-${WT} מציג מידע נוסף בזמן הקרב. טנקים ומטוסים של האויב (וגם של הקבוצה שלכם) מסומנים דרך שטח, עשן ומבנים. רואים טווח, סוג כלי וכיוון — לא מנחשים מאחורי רכס.`,
      `ב-${en('Ground RB')} זה הכי מרגיש במפות עם רכסים וסמטאות, בין אם אתם ב-${en('Top Tier')} על ${en('Merkava')} או ב-${en('grind')} על ${en('Magach')} ב-${en('Tech Tree')} הישראלי. אפשר תוויות מלאות, או רק צללית אם רוצים פחות רעש על המסך.`,
    ],
  },
  {
    id: 'aimbot',
    eyebrow: en('Aimbot'),
    h2: `Aimbot ל-${WT}`,
    body: [
      `${en('Aimbot')} שמסייע לכם להינעל על מטרות בצורה מהירה יותר. זה לא נעילה שגונבת את העכבר. מגדירים ${en('smoothing')}, ${en('FOV')} ואיזו מטרה קודם, לפי התותח — כדי לפגוע איפה שהכלי יהיה, לא איפה שהיה.`,
      `${en('Air')} ו-${en('Ground')} לא אותו דבר. כווננו לפי מה שאתם יורים עכשיו, וכבו אם בא לכם משחק ידני. באוויר זה תופס גם על ${en('Kfir')} או ${en('F-16')}, לא רק על תותח טנק.`,
    ],
  },
  {
    id: 'radar',
    eyebrow: en('Radar'),
    h2: `Radar ל-${WT}`,
    body: [
      `${en('Radar')} ל-${WT} מראה מי סביבכם, כולל אגפים וגישות לנקודה שאי אפשר לראות מגוף ראשון. טוב לרוטציה, לא ליפול על ${en('spawn rush')}, ולהישאר עם תמונה אחרי ירי.`,
      `אפשר יחד עם ${en('ESP')} כשצריך גם מפה וגם סימון על כלי ספציפי. כל אחד יכול לרוץ לבד.`,
    ],
  },
] as const;

export const reasonsHe = [
  {
    title: 'לא מזוהה כרגע',
    body: `${WTH} מתוחזק כצ'יט ל-${WT} שלא מזוהה כרגע, בלי באן. הסטטוס נבדק לפני קרב — זה לא משפט שיווקי בקופה.`,
  },
  {
    title: "רישיון אחד, כל הפיצ'רים",
    body: `${en('ESP')}, ${en('Aimbot')}, ${en('Radar')} ו-${en('Wallhack')} מגיעים ביחד. לא קונים ${en('Radar')} ממקום אחד ו-${en('ESP')} מאחר, ואז אחרי ${en('Patch')} הם כבר לא מדברים.`,
  },
  {
    title: `מתעדכן אחרי ${en('Patch')}`,
    body: `כש-${en('Gaijin')} מוציאים ${en('Update')} ל-${WT}, יש ${en('rebuild')}. לא צריך לחפש ${en('injector')} בפורום כל יום שני.`,
  },
  {
    title: 'קונים פה, יש תמיכה',
    body: `הכל דיגיטלי. אחרי תשלום מקבלים רישיון למייל. אם משהו לא יושב עם הקליינט אחרי ${en('Patch')}, כותבים לתמיכה עם המייל של ההזמנה.`,
  },
] as const;

export const requirementsHe = [
  { label: 'פלטפורמה', value: `${en('PC')} וקונסולות` },
  { label: 'משחק', value: `${WT} (קליינט רשמי)` },
  { label: 'מצבים', value: `${en('Arcade')}, ${en('Realistic')}, ${en('Simulator')}` },
  { label: 'קלט', value: 'מקלדת, עכבר ושולטים' },
  { label: 'סטטוס', value: 'לא מזוהה כרגע' },
] as const;

export const accessStepsHe = [
  {
    title: 'לרכישה',
    body: `לוחצים קנו עכשיו. רכישה אחת מכסה את הפיצ'רים שמופיעים בדף.`,
  },
  {
    title: 'מקבלים רישיון',
    body: `מגיע למייל. שומרים אותו — תמיכה צריכה אותו אם יש ${en('Patch')} חדש.`,
  },
  {
    title: 'מפעילים ונכנסים לקרב',
    body: `קודם ${WTH}, אחר כך ${WT}. מדליקים ${en('ESP')}, ${en('Aimbot')}, ${en('Radar')} או ${en('Wallhack')}. מה שלא צריך — משאירים כבוי.`,
  },
] as const;

export const faqsHe = [
  {
    question: `מה זה ${WTH}?`,
    answer: `${WTH} זה צ'יט ל-${WT} ל-${en('PC')} ולקונסולות. הכל בחבילה אחת: ${en('ESP')}, ${en('Aimbot')}, ${en('Radar')} ו-${en('Wallhack')}. כרגע זה לא מזוהה, בלי באן, על הקליינט החי.`,
  },
  {
    question: `צ'יטים ל-${WT} או האקים — יש הבדל?`,
    answer: `מחפשים את שניהם. זה אותו מוצר. ${WTH} זה צ'יט ל-${WT} עם ${en('ESP')}, ${en('Aimbot')}, ${en('Radar')} ו-${en('Wallhack')} — לא מהדורה נפרדת ל"האקים".`,
  },
  {
    question: `יש ${en('Aimbot')}, ${en('ESP')}, ${en('Radar')} ו-${en('Wallhack')}?`,
    answer: `כן. ארבעתם ברישיון. מדליקים מה שרוצים לכל משחק, לא קונים כל פיצ'ר בנפרד.`,
  },
  {
    question: `זה עובד ב-${en('Ground RB')} וב-${en('Air RB')}?`,
    answer: `כן. טנקים, מטוסים וספינות — אותו רישיון. לא בנוי רק ל-${en('lineup')} אחד.`,
  },
  {
    question: 'זה לא מזוהה? אפשר לקבל באן?',
    answer: `כרגע זה מוצע כלא מזוהה, בלי באן. רצים על הבילד העדכני, לפי מה שמגיע עם הרישיון, ובלי לערבב כלים לא מוכרים. אחרי ${en('Patch')} בודקים סטטוס לפני קרב.`,
  },
  {
    question: 'על מה זה רץ?',
    answer: `${en('PC')} וקונסולות, כולל ${en('PlayStation')} ו-${en('Xbox')}, על הקליינט הרשמי של ${WT}. מקלדת, עכבר ושולטים.`,
  },
  {
    question: 'איך קונים?',
    answer: `קנו עכשיו, משלמים, ומקבלים רישיון למייל. אחר כך מפעילים ${WTH} ונכנסים ל-${WT}.`,
  },
  {
    question: `זה עובד אחרי כל ${en('Patch')} של ${WT}?`,
    answer: `אחרי ${en('Patch')} של ${WT}, ${en('BattlEye')} או ${en('Viking')} יכול להיות ${en('rebuild')}. בודקים את דף הסטטוס לפני שנכנסים לקרב. רישיון חודשי או ${en('lifetime')} מקבל ${en('rebuild')} כל עוד הוא פעיל.`,
  },
  {
    question: 'איך אני בודק את הסטטוס?',
    answer: `בדף סטטוס הזיהוי. אם כתוב שלא מזוהה כרגע — אפשר להיכנס לקרב. אם יש ${en('rebuild')} — חכו להודעה הבאה.`,
  },
];
