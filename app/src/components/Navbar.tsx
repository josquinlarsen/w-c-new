// import { Link } from "react-router-dom";

// interface NavBarProps {
//     loggedIn: Boolean;
//     setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
// }

import { type NavBarProps } from "../types";

const Navbar = ({ loggedIn, setIsLoggedIn } : NavBarProps) => {

    const logout = () => {
        setIsLoggedIn(false);
    }

    const login = () => {
        setIsLoggedIn(true);
    }

    return (
        <>
        <div className="navbar">
        <header>
            <div>
                <h1>Wally & Coda</h1>
            </div>
        </header>
        <div>
            <nav>
                {loggedIn? (
                    <>
                    <a>Account</a>
                    <button
                        className="logout-btn"
                        onClick={logout}
                    >Logout</button>
                    </>
                ) : (
                    <>
                    <a>Account</a>
                    <button
                        className="logout-btn"
                        onClick={login}
                    >Login</button>
                    </>
                )}
            </nav>
        </div>
        </div>
        </>
    )
};

export default Navbar;