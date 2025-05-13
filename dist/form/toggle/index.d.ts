import { ReactNode } from 'react';
type ToggleProps = {
    checked?: boolean;
    onClick?: () => void;
    children?: ReactNode;
};
export declare const Toggle: ({ checked, onClick, children }: ToggleProps) => import("react/jsx-runtime").JSX.Element;
export {};
