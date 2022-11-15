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
        <>
        { 
            stock && count 
                ? <div className="d-flex mt-5">
                    <div className="button_container">
                        <button className="button_plus-minus" onClick={decrement}>-</button>
                        <span>{count}</span>
                        <button className="button_plus-minus" onClick={increment}>+</button>
                    </div>
                    <div>
                        <button className="button_add" onClick={() => onAdd(count)}>Agregar al carrito</button>
                    </div>
                </div>
        
                : <div className="d-flex mt-5">
                    <div className="button_container">
                        <button className="button_disabled" disabled onClick={decrement}>-</button>
                        <span className="text-muted">{count}</span>
                        <button className="button_disabled" disabled onClick={increment}>+</button>
                    </div>
                    <div>
                    <button className="button_add-inactive" disabled>Agregar al carrito</button>
                    </div>
                </div>
        }
        </>
    )
}

export default ItemCount;