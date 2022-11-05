import CartWidget from "./CartWidget";
import logo from "../images/inicio/logo03.png"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="navbar_bg">
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
                            <Link to="/category/bermudas" className="nav-links">
                                <div className="nav-link px-2 nav-links">BERMUDAS
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