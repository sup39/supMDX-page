export type NonRecordType = boolean | number | bigint | string | symbol | any[];
export type I18N<T> = (T & NonRecordType) | Record<string, T>;
export type LocaleInfo = {
    locale?: string;
    defaultLocale?: string;
};
export declare function translate<T>(data: I18N<T>, { locale, defaultLocale }: LocaleInfo): T;
export declare function translate<T>(data: I18N<T> | null, { locale, defaultLocale }: LocaleInfo): null;
export declare function translate<T>(data: I18N<T> | undefined, { locale, defaultLocale }: LocaleInfo): undefined;
