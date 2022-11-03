import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    return(
        <div className="d-flex mt-5">
            <div>
                <img src={props.picture} alt="..."></img>
            </div>
            <div className="item_detail">
                <h2 className="item_detail_title">{props.title}</h2>
                <span className="item_detail_price">${props.price}</span>
                <p className="item_detail_description">{props.description}</p>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetail;