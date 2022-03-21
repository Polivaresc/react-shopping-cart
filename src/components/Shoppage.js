import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Shoppage = () => {
    return ( 
        <div className="shop-page">
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