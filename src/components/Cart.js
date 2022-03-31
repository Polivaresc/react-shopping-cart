import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCreditCard, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
    const { setShowCart, cartItems } = props
    let totalPrice = 0

    return (
        <div className="shopping-cart">
            <div className="cart-head">
                <span>Your Cart</span>
                <span className="close-cart" onClick={() => setShowCart(false)}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
            <ul className="cart-items-list">
                <li>
                    {cartItems.length ? cartItems.map((cartItem) => 
                            <div key={cartItem.id} className="cart-item">
                                <span>{cartItem.plantName}</span>
                                <span>x{cartItem.quantity}</span>
                                <span>{cartItem.totalPrice} €</span>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </div>
                        ) 
                        : 'Your cart is empty!'
                    }
                </li>
            </ul>
            <div className="cart-footer"><span>Total:</span><span>{totalPrice} €</span></div>
            <button className="pay-button"><span>Pay</span><FontAwesomeIcon icon={faCreditCard}/></button>
        </div>
    )
}

export default Cart;