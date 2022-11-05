import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    return(
        <>
        {
            item && item.pictureUrl ?

                <div className="d-flex mt-5">
                    <div>
                        <img src={item.pictureUrl} alt="..."></img>
                    </div>
                    <div className="item_detail">
                        <h2 className="item_detail_title">{item.title}</h2>
                        <span className="item_detail_price">${item.price}</span>
                        <p className="item_detail_description">{item.description}</p>
                        <ItemCount />
                    </div>
                </div>

            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;