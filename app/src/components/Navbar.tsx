import { Link } from "react-router-dom";

// import { type NavBarProps } from "../types";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { isLoggedIn, logout } = useAuth();

    // const logout = () => {
    //     setIsLoggedIn(false);
    // }

    const login = () => {
        console.log("logged in!");
        // setIsLoggedIn(true);
    }

    return (
        <>
        <div className="navbar">
            <div>
                <h1>
                    <Link to={isLoggedIn ? "/home" : "/"}>
                        Wally & Coda
                    </Link>
                </h1>
            </div>
        <div>
            <nav>
                {isLoggedIn? (
                    <>
                    <Link to="/home">Account</Link>
                    <button
                        className="logout-btn"
                        onClick={logout}
                    >Logout</button>
                    </>
                ) : (
                    <>
                    <a>Account</a>
                    <Link to="/login">Login</Link>
                    {/* <button
                        className="logout-btn"
                        onClick={login}
                    >Login</button> */}
                    </>
                )}
            </nav>
        </div>
        </div>
        </>
    )
};

export default Navbar;