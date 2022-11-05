import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { products } from "../utilities/products";
import { customFetch } from "../utilities/customFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id == idItem)) 
        .then(response => setDato(response))
        .catch(err => console.log(err))
    }, []) 

    return (
        <section className="container">
            <ItemDetail item={dato} /> 
        </section> 
    )
}

export default ItemDetailContainer;