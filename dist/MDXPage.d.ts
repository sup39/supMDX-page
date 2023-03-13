import React from 'react';
import { NavHeaderConfig } from '@sup39/mdx-nav';
import { I18N, LocaleInfo } from './i18n';
import { I18NNavEntryInfo } from './i18n-nav';
type HeadingInfo = {
    tagName: string;
    label: string;
    id: string;
};
export type MDXProps = {
    children: React.ReactNode;
    router: {
        pathname: string;
    } & LocaleInfo;
    meta: Partial<{
        title: I18N<string>;
        description: I18N<string>;
        h1: I18N<string>;
        [key: string]: any;
    }>;
    headings: HeadingInfo[];
    config: MDXConfig;
};
export type MDXConfig = {
    site: {
        startYear?: number;
        author: string;
        title: I18N<string>;
        subtitle?: I18N<string>;
    } & Omit<NavHeaderConfig, 'title' | 'subtitle'>;
    metaFields?: {
        label: I18N<string>;
        attr: string;
    }[];
    nav: I18NNavEntryInfo[];
};
export declare function MDXPageBase({ children, router, meta: meta18, headings, config, }: MDXProps): JSX.Element;
export declare const MDXPageFactory: (config: MDXConfig) => ({ children, ...props }: Omit<MDXProps, 'config'>) => JSX.Element;
export {};
