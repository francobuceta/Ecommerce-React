import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ReactImageMagnify from "react-image-magnify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(1);
    const [goCart, setGoCart] = useState(false);
    const { addToCart } = useContext(CartContext);

    const notification = () => {
        toast.success("Producto agregado al carrito", {
            position: "top-right",
            autoClose: 3200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    const onAdd = (quantityToAdd) => {
        setItemCount(quantityToAdd);
        addToCart(item, quantityToAdd);
        setGoCart(true);
        notification();
    }

    return(
        <>
        {
            item && item.pictureUrl ?
                <div className="d-flex justify-content-center mt-5" key={item.id}>
                    <div className={item.category === "camisetas" ? "item_zoom" : "item_zoom-buzos"}>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: item.pictureUrl
                            },
                            largeImage: {
                                src: item.pictureUrlLarge,
                                width: 1024,
                                height: 1024
                            }
                        }} />
                    </div>
                    <div className="item_detail">
                        <h2 className="item_detail_title">{item.title}</h2>
                        <span className="item_detail_price">${item.price}</span>
                        <p className="item_detail_description">{item.description}</p>
                        <div className="mb-2 fs-5">
                            <FontAwesomeIcon icon={faTruck} className="card_icon"/>
                            <span className="card_text">Envío gratis a todo el país</span>
                        </div>
                        {
                            item.stock > 0
                            ? <span className="fs-5">{item.stock} unidad/es disponibles</span>
                            : <span className="card_text-sold fs-5">AGOTADO TEMPORALMENTE</span>
                        }
                        
                        {
                            goCart ?
                            <div className="d-flex mt-5">
                                <Link to="/category/all"><button className="button_finish">Seguir comprando</button></Link>
                                <Link to="/cart"><button className="button_finish">Finalizar compra</button></Link>
                                <ToastContainer />
                            </div>
                            : <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        }
                    </div>
                </div> 

            : <div className="cart_height">
                <div className="spinner"></div>
            </div>
        }
        </>
    );
}

export default ItemDetail;