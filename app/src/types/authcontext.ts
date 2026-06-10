import type { ReactNode } from 'react';

export interface AuthContextType {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}

export interface AuthContextProps {
    children: ReactNode;
}