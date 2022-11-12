import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (quantityToAdd) => {
        alert("joya papá");
        setItemCount(quantityToAdd);
        addToCart(item, quantityToAdd);
    }

    return(
        <>
        {
            item && item.pictureUrl ?

                <div className="d-flex mt-5" key={item.id}>
                    <div>
                        <img src={item.pictureUrl} alt="..."></img>
                    </div>
                    <div className="item_detail">
                        <h2 className="item_detail_title">{item.title}</h2>
                        <span className="item_detail_price">{item.price}</span>
                        <p className="item_detail_description">{item.description}</p>
                        <span>{item.stock} unidades disponibles</span>
                        {
                            itemCount === 0 ?
                            <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                            : <div className="d-flex mt-5">
                                <Link to="/category/all"><button className="button_finish">Seguir comprando</button></Link>
                                <Link to="/cart"><button className="button_finish">Finalizar compra</button></Link>
                            </div>
                        }
                    </div>
                </div>

            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;