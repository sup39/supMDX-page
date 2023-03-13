import React from 'react';
import Head from 'next/head';
import {Nav, NavHeaderConfig} from '@sup39/mdx-nav';
import {Footer} from './Footer';
import {MetaInfo} from './MetaInfo';
import {I18N, LocaleInfo, translate} from './i18n';
import {I18NNavEntryInfo, translateNav} from './i18n-nav';

type HeadingInfo = {
  tagName: string;
  label: string;
  id: string;
};

export type MDXProps = {
  children: React.ReactNode
  router: {pathname: string} & LocaleInfo
  meta: Partial<{
    title: I18N<string>
    description: I18N<string>
    h1: I18N<string>
    [key: string]: any
  }>
  headings: HeadingInfo[]
  config: MDXConfig
};

export type MDXConfig = {
  site: {
    startYear?: number
    author: string
    title: I18N<string>
    subtitle?: I18N<string>
  } & Omit<NavHeaderConfig, 'title'|'subtitle'>
  metaFields?: {label: I18N<string>, attr: string}[]
  nav: I18NNavEntryInfo[]
}

export function MDXPageBase({
  children, router, meta: meta18={}, headings, config,
}: MDXProps) {
  const meta = Object.fromEntries(Object.entries(meta18).map(([k, v]) => [
    k, translate(v, router),
  ]));
  const {title, description} = meta;
  const h1 = meta.h1 ?? title;

  const metaFields = config.metaFields?.map(({label, attr}) => ({
    label: translate(label, router),
    attr,
  })) ?? [];

  const {pathname} = router;
  const navConfig = {
    site: {
      ...config.site,
      title: translate(config.site.title, router),
      subtitle: translate(config.site.subtitle, router),
    },
    nav: translateNav(config.nav, router),
  };

  return <>
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
    </Head>
    <Nav config={navConfig} pathname={pathname} headings={headings} />
    <main>
      <article>
        {h1 ? <h1>{h1}</h1> : <></>}
        <MetaInfo fields={metaFields} data={meta} />
        {children}
      </article>
    </main>
    <Footer config={config} />
  </>;
}

export const MDXPageFactory = (config: MDXConfig) =>
  function MDXPage({children, ...props}: Omit<MDXProps, 'config'>) {
    return <MDXPageBase config={config} {...props}>{children}</MDXPageBase>;
  };
