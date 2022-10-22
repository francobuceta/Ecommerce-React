import CartWidget from "./CartWidget";
import logo from "../images/logo.png"

const NavBar = () => {
    return (
        <header className="nav-bar">
            <div className="container">
                <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img src={logo}></img>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-dark fs-5">Inicio</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark fs-5">Más vendidos</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark fs-5">Ofertas</a></li>
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