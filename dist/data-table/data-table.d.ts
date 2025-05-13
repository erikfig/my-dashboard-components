import { PaginationProps } from '../pagination';
import { TableProps } from '../table';
type DataTableProps = {
    title?: string;
} & TableProps & PaginationProps;
export declare const DataTable: ({ title, columns, rows, perPage, current, total, onChange, isLoading }: DataTableProps) => import("react/jsx-runtime").JSX.Element;
export {};
