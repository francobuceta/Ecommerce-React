import CartWidget from "./CartWidget";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const NavBar = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const nav = useRef();
    const mobileMenu = useRef();

    useEffect(() => {
        if (pathName !== "/Ecommerce-React") {
            nav.current.classList.add('navbar_bg-store');
        } else {
            nav.current.classList.remove('navbar_bg-store')
        }
    },[pathName])

    const closeMobileMenu = () => {
        mobileMenu.classList.remove("show");
    }

    return (
        <header className="navbar_bg" ref={nav}>
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-dark d-flex justify-content-center py-3">
                    <div className="container-fluid">

                        <div className="text-dark text-decoration-none d-flex">
                            <Link to="/Ecommerce-React"><img src="https://res.cloudinary.com/dzm5lgpyv/image/upload/v1669412591/ecommerce/logo03_o5apga.png" className="nav_logo"></img></Link>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav" ref={mobileMenu}>
                            <ul className="navbar-nav nav">
                                <li className="link-pelota">
                                    <Link to="/category/camisetas" className="nav-links" onClick={closeMobileMenu}>
                                        <div className="nav-link px-2 nav-links">CAMISETAS
                                            <div className="basket-ball">
                                                <div className="line2"></div>
                                                <div className="line1"></div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/category/buzos" className="nav-links" onClick={closeMobileMenu}>
                                        <div className="nav-link px-2 nav-links">BUZOS
                                            <div className="basket-ball">
                                                <div className="line2"></div>
                                                <div className="line1"></div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/category/shorts" className="nav-links" onClick={closeMobileMenu}>
                                        <div className="nav-link px-2 nav-links">SHORTS
                                            <div className="basket-ball">
                                                <div className="line2"></div>
                                                <div className="line1"></div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <div className="nav_cart-hide-mobile">
                                <CartWidget />
                            </div>
                        </div>
                        <div className="justify-content-end nav_cart-hide">
                            <CartWidget />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;