import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import uniqid from 'uniqid';
import { Items, ItemDetail } from "./Items";
import { Route } from "react-router-dom";

const Shoppage = () => {
    return ( 
        <div className="shop-page">
            <div className="shop-background"></div>
            <div className="sticky-bar">
                <span>Items in cart : 0</span>
                <button className="cart-button">Go to cart<FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
            <div className="items-container">
                <Items items={items} showItemDetail={showItemDetail}/>
            </div>
        </div>
    )
}

const items = [
    { plantName: 'Aloe vera', price: 24, type: 'decorative', id: uniqid(), picture: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'},
    { plantName: 'Strawberry', price: 16.5, type: 'fruit', id: uniqid(), picture: 'https://images.unsplash.com/photo-1582757793483-e407049be006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { plantName: 'Calathea', price: 38.5, type: 'decorative', id: uniqid(), picture: 'https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'},
    { plantName: 'Kumquat', price: 33.9, type: 'fruit', id: uniqid(), picture: 'https://images.unsplash.com/photo-1591796764479-c67dd6928003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a3VtcXVhdCUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    { plantName: 'Rosemary', price: 23, type: 'aromatic', id: uniqid(), picture: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'},
    { plantName: 'Basil', price: 26, type: 'aromatic', id: uniqid(), picture: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { plantName: 'Poinsettia', price: 14, type: 'decorative', id: uniqid(), picture: 'https://images.unsplash.com/photo-1606064835109-5633e21382c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9pbnNldHRpYXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60'},
    { plantName: 'Orchid', price: 35, type: 'decorative', id: uniqid(), picture: 'https://images.unsplash.com/photo-1524598171353-ce84a157ed05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { plantName: 'Bamboo', price: 45, type: 'decorative', id: uniqid(), picture: 'https://images.unsplash.com/photo-1567331711402-509c12c41959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80'},
    { plantName: 'Tomato', price: 21.5, type: 'fruit', id: uniqid(), picture: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9tYXRvJTIwcGxhbnR8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    { plantName: 'Thyme', price: 23, type: 'aromatic', id: uniqid(), picture: 'https://images.unsplash.com/photo-1594027308808-24b68af6829b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { plantName: 'Mint', price: 14, type: 'aromatic', id: uniqid(), picture: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWludHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60'},
    { plantName: 'Small succulent', price: 10, type: 'decorative', id: uniqid(), picture: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'},
    { plantName: 'Small cactus', price: 9, type: 'decorative', id: uniqid(), picture: 'https://images.unsplash.com/photo-1551888419-c41351800459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    { plantName: 'Orange', price: 36, type: 'fruit', id: uniqid(), picture: 'https://images.unsplash.com/photo-1575574202425-ba42a224118b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},

]

const showItemDetail = (e) => {
    const item = items.find((item) => item.id === e.target.dataset.id)

    return <Route path={"/shop/" + item.plantName} element={<ItemDetail item={item} />}/>
}

export default Shoppage;