import React from 'react';

export type MetaInfoProps = {
  data: Record<string, any>
  fields: {
    label: string
    attr: string
  }[]
};

export function MetaInfo({fields, data}: MetaInfoProps) {
  return <div>{fields.map(({label, attr}) => {
    const val = data[attr];
    return val == null ? null : <div key={attr}>
      <span>{label}</span>
      <span>{val}</span>
    </div>;
  })}</div>;
}
