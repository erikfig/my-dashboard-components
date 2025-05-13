export type PaginationProps = {
    current: number;
    perPage: number;
    total: number;
    count?: number;
    disabled?: boolean;
    onChange?: (page: number) => void;
};
export declare const Pagination: ({ current, total, perPage, count, disabled, onChange }: PaginationProps) => import("react/jsx-runtime").JSX.Element;
