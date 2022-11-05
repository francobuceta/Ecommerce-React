import ItemList from "../components/ItemList";
import { customFetch } from "../utilities/customFetch";
import { products } from "../utilities/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id == "all") {
            customFetch(2000, products)
            .then(response => setDatos(response))
            .catch(err => console.log(err))
        } else {
            customFetch(2000, products.filter(item => item.category == id))
            .then(response => setDatos(response))
            .catch(err => console.log(err))
        }
        
    }, [id])

    return (
        <>
            <ItemList items= {datos}/>
        </>
    )
}

export default ItemListContainer;