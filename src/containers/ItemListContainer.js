import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList";

const ItemListContainer = (greeting) => {
    return (
        <section>
            <h1 className="main_titulo">{greeting.title}</h1>
            <h2>{greeting.subtitle}</h2>
            <ItemCount />
            <ItemList />
        </section>
    )
}

export default ItemListContainer;