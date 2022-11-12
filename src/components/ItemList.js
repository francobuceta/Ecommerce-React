import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <section className="container d-flex justify-content-evenly flex-wrap mb-5">
            {
                items.length > 0 ?
                    items.map(item => (
                        <Item 
                        key = {item.id}
                        title = {item.title}
                        price = {item.price}
                        picture = {item.pictureUrl}
                        id = {item.id} />
                    )) 
                : <p>Cargando...</p>
            }  
        </section>
    )
}

export default ItemList;