import { Link, useParams } from "react-router-dom";

const Items = (props) => {
    const { items, showItemDetail } = props
    return (
        items.map((item) => (
            <Link to={"/shop/" + item.id} onClick={showItemDetail} className="item-link" key={item.id}>
                <div className="item-picture" style={{ background: "url(" + item.picture + ") no-repeat center center", backgroundSize: "cover"}} alt={item.plantName}></div>
                <div className="item-info"><span>{item.plantName}</span><span>{item.price} €</span></div>
            </Link>
        ))
    )  
}

const ItemDetail = (props) => {
    const { items } = props
    let params = useParams();
    const item = items.find((item) => {
        return item.id === parseInt(params.id)
    })
    return (
            <div>
                <h3>{item.plantName}</h3>
                <div>
                    <img src={item.picture} alt={item.plantName}/>
                </div>
                <div className='item-details'>
                    <div>{item.price} €</div>
                    <div>{item.type}</div>
                    <input type="number"/>
                    <button>Add to cart</button>
                </div>
            </div>
    )
}

export { Items, ItemDetail };