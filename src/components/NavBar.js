import CartWidget from "./CartWidget";
import logo from "../images/inicio/logo03.png"

const NavBar = () => {
    return (
        <header className="nav-bar">
            <div className="container">
                <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img src={logo}></img>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li className="link-pelota">
                            <a href="#" className="nav-link px-2 nav-links">INICIO
                                <div className="basket-ball">
                                    <div className="line2"></div>
                                    <div className="line1"></div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 nav-links">CAMISETAS
                                <div className="basket-ball">
                                    <div className="line2"></div>
                                    <div className="line1"></div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 nav-links">BUZOS
                                <div className="basket-ball">
                                    <div className="line2"></div>
                                    <div className="line1"></div>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <CartWidget />
                    </div>
                </nav>
                <div className="navbar_text">
                    <p>La tienda online NBA #1 en Argentina</p>
                    <h1>PICK<br />& <br />ROLL</h1>
                    <p>Encuentra aquí las camisetas y buzos <br />de tus jugadores preferidos</p>
                </div>
            </div>
        </header>
    )
}

export default NavBar;