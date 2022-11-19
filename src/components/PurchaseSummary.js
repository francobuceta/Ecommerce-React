import { useContext } from "react";
import { CartContext } from "./CartContext";

const PurchaseSummary = () => {
    const { calcItemsQty, sumProducts } = useContext(CartContext);

    return(
        <section className="container d-flex justify-content-center mb-5">
            <div className="cart_resumen">
                <h3>Resumen de compra</h3>
                <div className="d-flex justify-content-between">
                    <span>Cant. de productos:</span>
                    <span>{calcItemsQty()} item/s</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Envío:</span>
                    <span className="text-success">GRATIS</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>TOTAL:</span>
                    <span>${sumProducts()}</span>
                </div>
                <div className="text-center">
                    <button className="btn_terminar-compra">Terminar mi compra</button>
                </div>
            </div>
        </section>
    );
}

export default PurchaseSummary;