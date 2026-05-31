type Email = `${string}@${string}.${string}`;

export interface UserFormData {
    username: string;
    email: Email;
    first_name: string;
    last_name: string;
    password1: string;
    password2: string;
}