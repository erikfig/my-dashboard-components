import { Control, FieldErrors } from 'react-hook-form';
import { InputProps } from './input';
export type InputControllerProps = {
    control: Control<any>;
    name: keyof FieldErrors;
    errors: FieldErrors<any>;
    size?: number;
} & InputProps;
export declare const InputController: ({ name, control, errors, size, ...props }: InputControllerProps) => import("react/jsx-runtime").JSX.Element;
