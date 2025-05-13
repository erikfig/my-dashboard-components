import { ReactNode } from 'react';
import { InputFieldProps } from './input-field';
export type Option = {
    value: any;
    label: string;
};
export type InputProps = InputFieldProps & {
    name: string;
    label?: string;
    helpText?: ReactNode | string;
    options?: Option[];
    rows?: number;
    isMulti?: boolean;
};
export declare const Input: ({ label, helpText, type, options, onChange, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
