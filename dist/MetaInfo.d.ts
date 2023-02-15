export type MetaInfoProps = {
    data: Record<string, any>;
    fields: {
        label: string;
        attr: string;
    }[];
};
export declare function MetaInfo({ fields, data }: MetaInfoProps): JSX.Element;
