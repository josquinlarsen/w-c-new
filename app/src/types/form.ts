import type { ChangeEvent } from "react";

export interface FormField {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    required?: boolean;
}

export interface InputFormData {
    [key: string] : any;
}

export interface InputFormProps<T extends Record<string, any>> {
    initialData: T;
    httpType: "post" | "put" | "patch";
    onSubmit: (data: T) => void | Promise<void>; //e: SubmitEvent<HTMLFormElement
    onCancel?: () => void;
    formFields: FormField[];
    title: string;
    onChange? : (data: ChangeEvent<HTMLInputElement>) => void;
    userAction?: number; // 1:login 2:register
}