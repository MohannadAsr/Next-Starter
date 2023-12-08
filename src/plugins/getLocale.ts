const dictionares = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  ar: () => import('@/locales/ar.json').then((module) => module.default),
};

export const getLocale = async (locale: 'en' | 'ar') => {
    // if Cannot find the Locale 
  const dict = dictionares[locale]
    ? await dictionares[locale]()
    : await dictionares['en']();
  return dict as typeof dict;
};
