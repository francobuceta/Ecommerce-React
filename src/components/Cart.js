import { useContext } from "react";
import { CartContext } from "./CartContext";
import BtnStore from "./BtnStore";
import image from "../images/inicio/cart-guy.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const { cartList, clearList, removeItem } = useContext(CartContext);

    return(
        <>  
            <section className="container cart_height">
                {
                    cartList.length === 0 

                    ? <div className="d-flex align-items-center cart_container">
                        <div className="cart_image">
                            <img src={image}></img>
                        </div>
                        <div className="cart_text-container">
                            <h3>¡Ups! Todavía no has agregado productos al carrito.</h3>
                            <div className="text-center mt-4">
                                <BtnStore />
                            </div>
                        </div>
                    </div>
                    
                    : <div>
                        <div className="d-flex justify-content-end">
                            <button onClick={clearList} className="cart_button-clear">Vaciar Carrito</button>
                        </div>
                        <ul className="lista">
                            {cartList.map((item) => <li key={item.idItem}><img src={item.imgItem}></img>
                                <span><b>Producto: </b>{item.nameItem}</span>
                                <span><b>Precio: </b>{item.priceItem}</span>
                                <span><b>Cantidad: </b>{item.qtyItem} ud/s</span><br />
                                <div>
                                    <button className="cart_item-button" onClick={() => removeItem(item.idItem)}>
                                        <FontAwesomeIcon icon={faTrashCan} className="cart_item-button-i"/>
                                    </button>
                                </div>
                                <hr />
                            </li>)}
                        </ul>
                    </div>
                }
            </section>
        </>
    )
}

export default Cart;