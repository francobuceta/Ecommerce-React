import ItemList from "../components/ItemList";

const ItemListContainer = (greeting) => {
    return (
        <section>
            <h1 className="main_titulo">{greeting.title}</h1>
            <h2 className="sub_titulo">{greeting.subtitle}</h2>
            <ItemList />
        </section>
    )
}

export default ItemListContainer;