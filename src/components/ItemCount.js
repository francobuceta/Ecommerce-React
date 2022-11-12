import { useState, useEffect } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    useEffect(() => {
        setCount(initial);
    },[]);
    
    const increment = () => {
        if (count < stock) setCount(count + 1);
    }

    const decrement = () => {
        if (count > initial) setCount(count - 1);
    }

    return (
        <div className="d-flex mt-5">
            <div className="button_container">
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <div>
                {            
                    stock && count ?
                    <button className="button_add" onClick={() => onAdd(count)}>Agregar al carrito</button>
                    : <button className="button_add-inactive" disabled>Agregar al carrito</button>
                }
                
            </div>
        </div>
    )
}

export default ItemCount;