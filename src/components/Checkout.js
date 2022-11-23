import { useForm } from "react-hook-form";
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { db } from "../utilities/firebaseConfig";

const Checkout = () => {
    const { cartList, clearList, sumProducts } = useContext(CartContext);
    const { register, formState: { errors }, handleSubmit, watch } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        return true;
        /* e.target.reset(); */
    }

    const createOrder = () => {
        let order = {
            buyer: {
                name: watch("nombre"),
                lastName: watch("apellido"),
                email: watch("email"),
                phone: watch("telefono"),
                address: watch("direccion") 
            },
            items: cartList.map(item => ({
                id: item.idItem,
                title: item.nameItem,
                quantity: item.qtyItem,
                price: item.priceItem
            })),
            date: serverTimestamp(),
            total: sumProducts(),
        }

        const AddOrderInDB = async () => {
            let newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        AddOrderInDB()
        .then(response => {
            if (onSubmit() == true) {   
                alert("Order ID: " + response.id);
                cartList.forEach(async (item) => {
                    const itemRef = doc(db, "products", item.idItem);
                    await updateDoc(itemRef, {
                        stock: increment(-item.qtyItem)
                    });
                })
                clearList();
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <section className="container">
                <form className="d-flex justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form">
                        <h2 className="text-center mb-4">Complete sus datos</h2>
                        <div className="input">
                            <label>Nombre</label>
                            <input type="text" {...register("nombre", {
                                required: true,
                            })} />
                            {errors.nombre?.type === "required" && <p>Campo obligatorio</p>}
                        </div>
                        <div className="input">
                            <label>Apellido</label>
                            <input type="text" {...register("apellido", {
                                required: true
                            })} />
                            {errors.apellido?.type === "required" && <p>Campo obligatorio</p>}
                        </div>
                        <div className="input">
                            <label>E-mail</label>
                            <input type="email" {...register("email", {
                                required: true,
                                pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
                            })} />
                            {errors.email?.type === "required" && <p>Campo obligatorio</p>}
                            {errors.email?.type === "pattern" && <p>Formato de e-mail incorrecto</p>}
                        </div>
                        <div className="input">
                            <label>Teléfono</label>
                            <input type="text" {...register("telefono", {
                                required: true
                            })} />
                            {errors.telefono?.type === "required" && <p>Campo obligatorio</p>}
                        </div>
                        <div className="input">
                            <label>Dirección</label>
                            <input type="text" {...register("direccion", {
                                required: true
                            })} />
                            {errors.direccion?.type === "required" && <p>Campo obligatorio</p>}
                        </div>
                        <div className="input enviar">
                            <input type="submit" value="Enviar" onClick={createOrder}/>
                        </div>
                    </div>
                    
                </form>
            </section>
        </>
    )
}

export default Checkout;