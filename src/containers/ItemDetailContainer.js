import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { products } from "../utilities/products";
import { customFetch } from "../utilities/customFetch";

const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products) 
        .then(response => setDatos(response))
        .catch(err => console.log(err))
    }, []) 

    return (
        <>
            <section className="container">
            {
                datos.filter(elem => elem.id === "003")
                .map( item => (
                    <ItemDetail 
                    key = {item.id}
                    title = {item.title}
                    price = {item.price}
                    description = {item.description}
                    picture = {item.pictureUrl} /> 
                ))
            }  
            </section>
        </>
    )
}

export default ItemDetailContainer;