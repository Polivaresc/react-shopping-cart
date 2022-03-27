import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Items = () => {
    return (
        items.map((item) => (
            <Link to={"/shop/" + item.id} className="item-link" key={item.id}>
                <div className="item-picture" style={{ background: "url(" + item.picture + ") no-repeat center center", backgroundSize: "cover"}}></div>
                <div className="item-info"><span>{item.plantName}</span><span>{item.price} €</span></div>
            </Link>
        ))
    )  
}

const ItemDetail = () => {
    let params = useParams();
/*     const cartItems = []
 */    
    const item = items.find((item) => {
        return item.id === parseInt(params.id)
    })

  /*   function addItemToCart(e) {
        const newItem = items.find((item) => item.id === parseInt(e.target.parentNode.dataset.id))
        cartItems.push(newItem)
        console.log(cartItems)
    } */

    const excludeCurrent = items.filter((product) => product !== item)
    const relatedProducts = excludeCurrent.filter((product) => product.type === item.type)

    return (
        <div>
            <div className="item">
                <div>
                    <div className="item-title">
                        <h3>{item.plantName}</h3>
                        <div className="item-type">{item.type}</div>
                    </div>
                    <div className="item-detail-picture" style={{ background: "url(" + item.picture + ") no-repeat center center", backgroundSize: "cover"}}></div>
                </div>
                <div className='item-details'>
                    <div> {item.price} €</div>
                    <input type="number" min={0} max={20}/>
                    <button className="add-to-cart" data-id={item.id}><span>Add to cart</span><FontAwesomeIcon icon={faCartArrowDown}/></button>
                    <Link to="/shop" className="link"><span>Continue shopping</span><FontAwesomeIcon icon={faArrowRotateLeft}/></Link>
                </div>
            </div>
            <div className="item-related">
                <h4>Related products:</h4>
                <div className="related-products">
                    {relatedProducts.map((product) => <RelatedItem product={product} key={product.id}/>)}
                </div>
            </div>
        </div>
    )
}

const RelatedItem = (props) => {
    const { product } = props

    return(
        <div className="related-product">
            <div style={{ background: "url(" + product.picture + ") no-repeat center center", backgroundSize: "cover", width: "8rem", height: "8rem"}}></div>
            <div>{product.plantName}</div>
        </div>
    )
}

const items = [
    { id: 1, plantName: 'Aloe vera', price: 24, quantity: 0, type: 'decorative', picture: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'},
    { id: 2, plantName: 'Strawberry', price: 16.5, quantity: 0, type: 'fruit', picture: 'https://images.unsplash.com/photo-1582757793483-e407049be006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { id: 3, plantName: 'Calathea', price: 38.5, quantity: 0, type: 'decorative', picture: 'https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'},
    { id: 4, plantName: 'Kumquat', price: 33.9, quantity: 0, type: 'fruit', picture: 'https://images.unsplash.com/photo-1591796764479-c67dd6928003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a3VtcXVhdCUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    { id: 5, plantName: 'Rosemary', price: 23, quantity: 0, type: 'aromatic', picture: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'},
    { id: 6, plantName: 'Basil', price: 26, quantity: 0, type: 'aromatic', picture: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { id: 7, plantName: 'Poinsettia', price: 14, quantity: 0, type: 'decorative', picture: 'https://images.unsplash.com/photo-1606064835109-5633e21382c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9pbnNldHRpYXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60'},
    { id: 8, plantName: 'Orchid', price: 35, quantity: 0, type: 'decorative', picture: 'https://images.unsplash.com/photo-1524598171353-ce84a157ed05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { id: 9, plantName: 'Bamboo', price: 45, quantity: 0, type: 'decorative', picture: 'https://images.unsplash.com/photo-1567331711402-509c12c41959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80'},
    { id: 10, plantName: 'Tomato', price: 21.5, quantity: 0, type: 'fruit', picture: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9tYXRvJTIwcGxhbnR8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    { id: 11, plantName: 'Thyme', price: 23, quantity: 0, type: 'aromatic', picture: 'https://images.unsplash.com/photo-1594027308808-24b68af6829b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { id: 12, plantName: 'Mint', price: 14, quantity: 0, type: 'aromatic', picture: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWludHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60'},
    { id: 13, plantName: 'Small succulent', price: 10, quantity: 0, type: 'decorative', picture: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'},
    { id: 14, plantName: 'Small cactus', price: 9, quantity: 0, type: 'decorative', picture: 'https://images.unsplash.com/photo-1551888419-c41351800459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { id: 15, plantName: 'Orange', price: 36, quantity: 0, type: 'fruit', picture: 'https://images.unsplash.com/photo-1575574202425-ba42a224118b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},

]

export { items, Items, ItemDetail };