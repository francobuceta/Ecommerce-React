import ItemList from "../components/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../utilities/firebaseConfig";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function dataBase() {
            const querySnapshot = await getDocs(collection(db, "products"));
            const dataFromFirestore = querySnapshot.docs.map(item => ({
                id: item.id,
                ...item.data()
            }))
            setDatos(dataFromFirestore);
        }
        dataBase();
        
    }, [id])

    return (
        <ItemList items= {datos}/>
    )
}

export default ItemListContainer;