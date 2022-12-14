import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Footer = () => {
    const pathname = useLocation();

    /* Volver arriba desde el logo del footer */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <footer className="footer_bg">
            <div className="container d-flex flex-wrap justify-content-between align-items-center">
                
                <div className="col-md-4 d-flex align-items-center justify-content-start">
                    <Link to="/"><img src="https://res.cloudinary.com/dzm5lgpyv/image/upload/v1669412591/ecommerce/logo03_o5apga.png" className="nav_logo"></img></Link>
                </div>

                <ul className="footer_menu-container col-md-4 justify-content-center">
                    <Link to="/category/camisetas" className="footer_menu"><li className="nav-item footer_menu-border px-2">CAMISETAS</li></Link>
                    <Link to="/category/buzos" className="footer_menu"><li className="nav-item footer_menu-border px-2">BUZOS</li></Link>
                    <Link to="/category/shorts" className="footer_menu"><li className="nav-item px-2">BERMUDAS</li></Link>
                </ul>

                <div className="col-md-4 d-flex align-items-center justify-content-end">
                    <a href="https://www.whatsapp.com/?lang=es" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} className="footer_wp-icon"/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="footer_ig-icon"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;