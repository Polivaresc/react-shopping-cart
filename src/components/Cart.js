import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCreditCard, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Cart = (props) => {
    const { setShowCart, cartItems, removeItem } = props
    const [totalPrice, setTotalPrice] = useState(0) 

    useEffect(() => {
        let prices = 0
        cartItems.map((cartItem) => {
            return prices += parseFloat(cartItem.totalPrice)
        })
        setTotalPrice(prices)
    }, [cartItems])

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
                                <FontAwesomeIcon icon={faTrashCan} className="delete-icon" onClick={() => removeItem(cartItem)}/>
                            </div>
                        ) 
                        : <div className="empty-cart">Your cart is empty!</div>
                    }
                </li>
            </ul>
            <div className="cart-footer"><span>Total:</span><span>{totalPrice} €</span></div>
            <button className="pay-button"><span>Pay</span><FontAwesomeIcon icon={faCreditCard}/></button>
        </div>
    )
}

export default Cart;