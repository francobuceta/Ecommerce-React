import { query, collection, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const firestoreFetch = async (id) => {
    let value;
    if (id === "all") {
        value = query(collection(db, "products"));
    } else {
        value = query(collection(db, "products"), where("category", "==", id));
    }
    const querySnapshot = await getDocs(value);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchDetail = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
        console.log("No se ha encontrado el documento");
    }
}