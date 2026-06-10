import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode, type JwtPayload } from "jwt-decode";
import type { AuthContextProps, AuthContextType } from "../types";

import api from "../api/client";

const AuthContext = createContext<AuthContextType | undefined>(undefined); 

export const AuthProvider = ({children}: AuthContextProps) => {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        const token = localStorage.getItem('token');
        if (!token) return false;

        try {
            const decodedToken = jwtDecode<JwtPayload>(token);
            return decodedToken.exp ? decodedToken.exp > Date.now() / 1000 : false;
        } catch {
            return false;
        }
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const { exp } = jwtDecode<JwtPayload>(token);
                if (exp && exp < Date.now() / 1000) {
                    logout();
                }
            } catch (error) {
                logout();
            }
        }
    }, []);

    const login = (token: string) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        navigate('/home');
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/');
    };

    useEffect(() => {
        const interceptor = api.interceptors.response.use(
            (response) => (response),
            (error) => {
                const err = error.response;
                const isUnauthorized = err && err.status === 401;
                if (isUnauthorized) {
                    alert("Expired token");
                    logout();
                }
                return Promise.reject(error);
            }
        );
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
        return () => {
            api.interceptors.response.eject(interceptor);
        };
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>    
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return context;
};
