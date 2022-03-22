import { Link } from "react-router-dom";

const Items = (props) => {
    const { items, showItemDetail } = props
    return (
        items.map((item) => (
            <Link to={"/shop/" + item.plantName} onClick={showItemDetail} className="item-link">
                <div key={item.id} data-id={item.id} className="shop-item">
                    <div className="item-head"><span>{item.plantName}</span><span>{item.price} €</span></div>
                    <img src={item.picture} alt={item.plantName}/>
                </div>
            </Link>
        ))
    )  
}

const ItemDetail = (item) => {
    return (
            <div>
                <h3>{item.plantName}</h3>
                <div>
                    <img src={item.picture} alt={item.plantName}/>
                </div>
                <div className='item-details'>
                    <div>{item.price} €</div>
                    <div>{item.type}</div>
                    <input type="number" value={1}/>
                    <button>Add to cart</button>
                </div>
            </div>
    )
}

export { Items, ItemDetail };