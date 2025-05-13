type CardStatusProps = {
    title: string;
    message?: string;
    status: 'danger' | 'warning' | 'success' | 'info';
};
export declare const CardStatus: ({ title, message, status }: CardStatusProps) => import("react/jsx-runtime").JSX.Element;
export {};
