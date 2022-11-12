import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard, faBoxArchive  } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

const IconSection = () => {
    
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, []);

    return (
        <section className="icon_section">
            <div className="container">
                <div className="d-flex justify-content-around" data-aos="fade-up">
                    <div className="icon_margin">
                        <FontAwesomeIcon icon={faTruck} className="icon_color"/>
                        <h3>Enviamos sus compras</h3>
                        <p>Realizamos envíos a todo el país y con mucha rapidez.</p>
                    </div>
                    <div className="icon_margin">
                        <FontAwesomeIcon icon={faCreditCard} className="icon_color"/>
                        <h3>Pague como usted guste</h3>
                        <p>Aceptamos tarjetas de débito, crédito, y transferencias bancarias.</p>
                    </div>
                    <div className="icon_margin">
                        <FontAwesomeIcon icon={faBoxArchive} className="icon_color"/>
                        <h3>Cambios gratuitos</h3>
                        <p>Cuenta con la posibilidad de devolver el producto hasta 30 días.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IconSection;