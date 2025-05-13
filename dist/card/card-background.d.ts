import { HTMLAttributes, ReactNode } from 'react';
export type CardBackgroundProps = {
    children?: ReactNode;
    src: string;
} & HTMLAttributes<HTMLDivElement>;
export declare const CardBackground: ({ children, src, className, ...props }: CardBackgroundProps) => import("react/jsx-runtime").JSX.Element;
