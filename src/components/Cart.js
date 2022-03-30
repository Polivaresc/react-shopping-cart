import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
    const { setShowCart } = props
    let totalPrice = 0

    return (
        <div className="shopping-cart">
            <div className="cart-head">
                <span>Your Cart</span>
                <span className="close-cart" onClick={() => setShowCart(false)}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
            <ul className="cart-items">
                <li><span>Item name </span><span> x2</span></li>
            </ul>
            <div className="cart-footer"><span>Total:</span><span>{totalPrice} €</span></div>
            <button className="pay-button"><span>Pay</span><FontAwesomeIcon icon={faCreditCard}/></button>
        </div>
    )
}

export default Cart;