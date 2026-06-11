// type Email = `${string}@${string}.${string}`;

import type { ChangeEvent, SubmitEvent } from "react";

export interface UserFormData {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password1: string;
    password2: string;
}

export interface LoginFormData {
    username: string; 
    password: string;
}

export interface UseAuthFormReturn {
    formData: UserFormData;
    loginData: LoginFormData;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleLoginChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleLogin: (e: SubmitEvent<HTMLFormElement>) => Promise<void>;
    handleRegister: (e: SubmitEvent<HTMLFormElement>) => Promise<void>;
}