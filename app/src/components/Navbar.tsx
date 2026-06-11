import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { isLoggedIn, logout } = useAuth();

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
                    <Link to="register">Register</Link>
                    <Link to="/login">Login</Link>
                    </>
                )}
            </nav>
        </div>
        </div>
        </>
    )
};

export default Navbar;