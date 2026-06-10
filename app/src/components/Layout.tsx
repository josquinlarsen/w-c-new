import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const Layout = () => {
    return (
        <>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <p>TBD</p>
        </footer>
        </>
    )
}

export default Layout;