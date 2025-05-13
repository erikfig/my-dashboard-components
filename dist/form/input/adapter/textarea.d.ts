import { ReactNode, TextareaHTMLAttributes } from 'react';
type TextareaProps = {
    children?: ReactNode;
    rows?: number;
    label?: string;
    helpText?: ReactNode;
    error?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
export declare const Textarea: ({ children, rows, name, label, helpText, className, error, ...props }: TextareaProps) => import("react/jsx-runtime").JSX.Element;
export {};
