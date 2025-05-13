import { FormHTMLAttributes, ReactNode } from 'react';
type FormProps = {
    children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;
export declare const FormContainer: ({ children, className, ...props }: FormProps) => import("react/jsx-runtime").JSX.Element;
export {};
