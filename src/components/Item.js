import { Link } from "react-router-dom";

const Item = ({ title, price, picture, id, stock }) => {
    return (
        <Link to={`/item/${id}`} className="card_link">
            <div className="card section_card">
                <img src={picture} className="card-img-top" alt=""></img>
                <hr />
                <div className="card-body">
                    <h5 className="card-title text-dark">{title}</h5>
                    <div>
                        <span className="card-text text-dark fs-5">${price}</span><br />
                        { stock > 0 
                            ? <span className="card_text">{stock} unidades disponibles</span>
                            : <span className="card_text-sold">AGOTADO</span>
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item;