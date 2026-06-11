import { useNavigate } from "react-router-dom";
import { useState, type SubmitEvent, type ChangeEvent } from "react";
import { handleError } from "../utilities/HandleError";
import { useAuth } from "../context/AuthContext";
import api from "../api/client";
import type { LoginFormData, UseAuthFormReturn, UserFormData } from "../types";

export const useAuthForm = (): UseAuthFormReturn => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [ formData, setFormData ] = useState<UserFormData>({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password1: '', 
        password2: ''
    });

    const [ loginData, setLoginData ] = useState<LoginFormData>({
            username: "", 
            password: ""
    });

    const handleLogin = async (e: SubmitEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        const params = new URLSearchParams();
        params.append("username", loginData.username);
        params.append("password", loginData.password);
        try {
            const response = await api.post("/user/login", params);
            login(response.data.access_token);
        } catch (error) {
            handleError("Login failed", navigate);
        }
    };

    const handleRegister = async (e: SubmitEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            await api.post(`/user/register`, formData);
            navigate("/login");
        } catch (error) {
            handleError(error, navigate);
        }
    };

    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCancel = () => {
        () => {navigate('/')}
    };

    return {
        formData,
        loginData,
        handleChange,
        handleLogin,
        handleLoginChange,
        handleRegister,
        handleCancel,
    };
};