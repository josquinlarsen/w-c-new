import type { Dispatch, SetStateAction } from "react";

export interface NavBarProps {
    loggedIn: Boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}