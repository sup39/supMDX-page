import type {NavEntryInfo} from '@sup39/mdx-nav';
import {I18N, translate} from './i18n';

export type I18NNavEntryInfo = {
  label: I18N<string>
  path: string
  children?: I18NNavEntryInfo[]
};

export function translateNav(
  nav18: I18NNavEntryInfo[],
  localeInfo: Parameters<typeof translate>[1],
): NavEntryInfo[] {
  return nav18.map(e => ({
    label: translate(e.label, localeInfo),
    path: e.path,
    ...(e.children ? {children: translateNav(e.children, localeInfo)} : {}),
  }));
}
