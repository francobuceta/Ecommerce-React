import CartWidget from "./CartWidget";
import logo from "../images/inicio/logo03.png"
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const NavBar = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const nav = useRef();

    useEffect(() => {
        if (pathName !== "/") {
            nav.current.classList.add('navbar_bg-store');
        } else {
            nav.current.classList.remove('navbar_bg-store')
        }
    },[pathName])

    return (
        <header className="navbar_bg" ref={nav}>
            <div className="container">
                <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                    <div className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <Link to="/"><img src={logo} className="nav_logo"></img></Link>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li className="link-pelota">
                            <Link to="/category/camisetas" className="nav-links">
                                <div className="nav-link px-2 nav-links">CAMISETAS
                                    <div className="basket-ball">
                                        <div className="line2"></div>
                                        <div className="line1"></div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/category/buzos" className="nav-links">
                                <div className="nav-link px-2 nav-links">BUZOS
                                    <div className="basket-ball">
                                        <div className="line2"></div>
                                        <div className="line1"></div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/category/shorts" className="nav-links">
                                <div className="nav-link px-2 nav-links">SHORTS
                                    <div className="basket-ball">
                                        <div className="line2"></div>
                                        <div className="line1"></div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <CartWidget />
                    </div>
                </nav>
                
            </div>
        </header>
    )
}

export default NavBar;