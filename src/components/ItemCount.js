import { useState } from "react";

const ItemCount = () => {
    const [initial, setInitial] = useState(1);
    
    const onAdd = () => {
        if (initial < 5) setInitial(initial + 1);
        console.log(initial);
    }

    const onRemove = () => {
        if (initial > 1) setInitial(initial - 1);
        console.log(initial);
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="button_container">
                <button onClick={onRemove}>-</button>
                <span>{initial}</span>
                <button onClick={onAdd}>+</button>
            </div>
            <div>
                <button className="button_add">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;