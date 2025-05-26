import { ReactNode } from "react";

export interface IInput {
    name: string;
    placeholder: string;
    type: string;
    leftIcon?: ReactNode;
}