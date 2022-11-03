import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';

const IconSection = () => {
    return (
        <section className="icon_section">
            <div className="container">
                <div className="d-flex justify-content-around">
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