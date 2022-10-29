const Item = (props) => {
    return (
        <div className="card section_card">
            <img src={props.picture} className="card-img-top" alt=""></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <span className="card-text">Precio: ${props.price}</span>
                
            </div>
        </div>
    )
}

export default Item;