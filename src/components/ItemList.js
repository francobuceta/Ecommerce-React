import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <section className="container d-flex justify-content-evenly flex-wrap mb-5">
            {
                items.map(item => (
                    <Item 
                    key = {item.id}
                    title = {item.title}
                    price = {item.price}
                    picture = {item.pictureUrl}
                    id = {item.id} />
                )) 
            }  
        </section>
    )
}

export default ItemList;