import type { ChangeEvent, SubmitEvent } from "react";
export interface FormField {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    required?: boolean;
}

export interface FormData {
    [key: string] : any;
}

export interface InputFormProps {
    initialData: FormData;
    httpType: "post" | "put" | "patch";
    onSubmit: (e: SubmitEvent<HTMLFormElement>) => void | Promise<void>;
    onCancel?: () => void;
    formFields: FormField[];
    title: string;
    onChange? : (data: ChangeEvent<HTMLInputElement>) => void;
    userAction?: number; // 1:login 2:register
}