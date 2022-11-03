import Item from "./Item";
import { customFetch } from "../utilities/customFetch";
import { products } from "../utilities/products";
import { useEffect, useState } from "react";

const ItemList = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(response => setDatos(response))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <section className="container d-flex justify-content-around flex-wrap">
            {
                datos.map(item => (
                    <Item 
                    key = {item.id}
                    title = {item.title}
                    price = {item.price}
                    picture = {item.pictureUrl} />
                )) 
            }  
            </section>
        </>
    )
}

export default ItemList;