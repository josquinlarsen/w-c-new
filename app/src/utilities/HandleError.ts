import { type NavigateFunction } from "react-router-dom";
import type { AxiosError } from "axios";

export const handleError = (
    error: AxiosError<{messasge?:string}> | unknown,
    navigate: NavigateFunction
): void => {
    console.error(error);

    if (error && typeof error === "object" && "isAxiosError" in error) {
        const axiosError = error as AxiosError<{message?: string}>;
        if (axiosError.response?.status === 401) {
            navigate('/login');
            return;
        }
         alert(axiosError.response?.data?.message || 'An unexpected error has occurred.');
         return;
    }
    if (error instanceof Error) {
        alert(error.message);
    } else {
        alert('An unexpected error has occurred.');
    }
};
