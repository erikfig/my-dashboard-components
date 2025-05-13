import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
export type InputFieldProps = {
    label?: string;
    type?: HTMLInputTypeAttribute;
    error?: boolean;
    isLoading?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
export declare const resolveClassName: ({ className, error }: Partial<InputFieldProps>) => string;
export declare const InputField: ({ type, error, className, ...props }: InputFieldProps) => import("react/jsx-runtime").JSX.Element;
