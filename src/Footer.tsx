import React from 'react';
export type FooterConfig = {
  site: {
    startYear?: number
    author: string
  }
};

export function Footer({config}: {config: FooterConfig}) {
  const year = new Date().getFullYear();
  const {site: {startYear: year0 = year, author}} = config;
  const yearStr = year>year0 ? `${year0}-${year}` : year;
  return <footer>{
    author && <div>Copyright © {yearStr} {author} All rights reserved.</div>
  }</footer>;
}
