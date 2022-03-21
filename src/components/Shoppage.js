import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Shoppage = () => {
    return ( 
        <div className="shop-page">
            <div className="shop-background">
                <img src="https://images.unsplash.com/photo-1525033842647-a956848705f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
            </div>
            <div className="sticky-bar">
                <span>Items in cart : 0</span>
                <button className="cart-button">Go to cart<FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
            <div>Shop Items</div>
        </div>
    )
}

/* const Item = () => {
    return (
        <div>
            <img src={item.image}/>
        </div>
    )
} */

export default Shoppage;