export type NonRecordType = boolean|number|bigint|string|symbol|any[];
export type I18N<T> = (T & NonRecordType) | Record<string, T>;
export type LocaleInfo = {
  locale?: string
  defaultLocale?: string
};

export function translate<T>(
  data: I18N<T>,
  {locale, defaultLocale=''}: LocaleInfo,
): T;
export function translate<T>(
  data: I18N<T>|null,
  {locale, defaultLocale=''}: LocaleInfo,
): null;
export function translate<T>(
  data: I18N<T>|undefined,
  {locale, defaultLocale=''}: LocaleInfo,
): undefined;
export function translate<T, U extends null|undefined>(
  data: I18N<T>|U,
  {locale, defaultLocale=''}: LocaleInfo,
): T|U {
  if (data == null) return data;
  if (typeof data !== 'object') return data;
  if (data instanceof Array) return data;
  return (locale == null ? undefined : data[locale]) ??
    data[defaultLocale] ?? Object.values(data)[0];
}
