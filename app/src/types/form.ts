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
    httpType: "POST" | "PUT" | "PATCH";
    onSubmit: (data: FormData) => void | Promise<void>;
    onCancel: () => void;
    formFields: FormField[];
    title: string;
}