import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

const Item = ({ title, price, picture, id }) => {
    return (
        <Link to={`/item/${id}`} className="card_link">
            <div className="card section_card">
                <img src={picture} className="card-img-top" alt=""></img>
                <hr />
                <div className="card-body">
                    <h5 className="card-title text-dark">{title}</h5>
                    <div>
                        <span className="card-text text-dark fs-5">{price}</span>
                        <div className="mt-2 d-flex align-items-center">
                            <FontAwesomeIcon icon={faTruck} className="card_icon"/>
                            <span className="card_text">Envío gratis a todo el país</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item;