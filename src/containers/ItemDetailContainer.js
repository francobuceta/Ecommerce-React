import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreFetchDetail } from "../utilities/firestoreFetch";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchDetail(idItem)
        .then(result => setDato(result))
        .catch(err => console.log(err));
    }, [idItem]); 

    return (
        <section className="container">
            <ItemDetail item={dato} /> 
        </section> 
    )
}

export default ItemDetailContainer;