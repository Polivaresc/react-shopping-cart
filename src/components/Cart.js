import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
    const { setShowCart } = props
    return (
        <div className="shopping-cart">
            <div className="cart-head">
                <span>Your Cart</span>
                <span className="close-cart" onClick={() => setShowCart(false)}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
            <ul className="cart-items">
                <li><span>Item name </span><span> x2</span></li>
            </ul>
            <div className="cart-head"><span>Total:</span><span>15€</span></div>
            <button className="pay-button">Pay</button>
        </div>
    )
}

export default Cart;