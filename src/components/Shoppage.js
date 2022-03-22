import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Items from "./Items";

const Shoppage = () => {
    return ( 
        <div className="shop-page">
            <div className="shop-background"></div>
            <div className="sticky-bar">
                <span>Items in cart : 0</span>
                <button className="cart-button">Go to cart<FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
            <div className="items-container">
                <Items/>
            </div>
        </div>
    )
}

export default Shoppage;