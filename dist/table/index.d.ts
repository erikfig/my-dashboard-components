import { DetailedHTMLProps, ReactNode, TdHTMLAttributes } from 'react';
export type Column = {
    title: string;
    field: string;
    render?: (data: any) => ReactNode;
} & DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableCellElement>;
type Row = any;
export type TableProps = {
    columns: Column[];
    rows?: Row[];
    isLoading?: boolean;
};
export declare const Table: ({ columns, rows, isLoading }: TableProps) => import("react/jsx-runtime").JSX.Element;
export {};
