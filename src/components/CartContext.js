import { createContext } from "react";
import { useLocalStorage } from "../utilities/useLocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useLocalStorage("item", []);;

    const notificationSuccess = () => {
        toast.success("Producto agregado al carrito", {
            position: "top-right",
            autoClose: 3200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    const notificationError = () => {
        toast.error("No hay suficiente stock", {
            position: "top-right",
            autoClose: 3200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    const addToCart = (item, quantityToAdd) => {
        let find = cartList.find(elem => elem.idItem === item.id);
        if (find === undefined) {
            setCartList([...cartList, 
                {
                    idItem: item.id,
                    imgItem: item.pictureUrl,
                    nameItem: item.title,
                    priceItem: item.price,
                    stockItem: item.stock,
                    qtyItem: quantityToAdd
                }]);
                notificationSuccess();
        } else if ((find.qtyItem + quantityToAdd) <= find.stockItem) {
            find.qtyItem += quantityToAdd;   
            notificationSuccess();
        } else {
            notificationError();
        }
    }

    const clearList = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        let filter = cartList.filter(item => item.idItem !== id);
        setCartList(filter);
    }

    const calcItemsQty = () => {
        let sum = 0;
        for (let key of cartList) {
            sum += key.qtyItem;
        }
        return sum;
    }

    const calcTotalPerItem = (idItem) => {
        let itemLocation = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[itemLocation].priceItem * cartList[itemLocation].qtyItem;
    }

    const sumProducts = () => {
        let array = cartList.map(item => calcTotalPerItem(item.idItem));
        let sum = array.reduce((acc, item) => acc = acc + item);
        return sum;
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, clearList, removeItem, calcItemsQty, calcTotalPerItem, sumProducts, ToastContainer}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;