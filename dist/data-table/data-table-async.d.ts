import { UseQueryResult } from '@tanstack/react-query';
import { Column } from '../table';
import { PaginationProps } from '../pagination';
type DataTableAsyncProps = {
    columns: Column[];
    query: UseQueryResult<any, Error>;
    onChangePagination: PaginationProps['onChange'];
    title?: string;
};
export declare const DataTableAsync: ({ query, columns, onChangePagination }: DataTableAsyncProps) => import("react/jsx-runtime").JSX.Element;
export {};
