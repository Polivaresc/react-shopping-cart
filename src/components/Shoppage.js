import { Items } from "./Items";

const Shoppage = () => {
    return ( 
        <div className="shop-page">
            <div className="shop-background"></div>
            <div className="items-container">
                <Items/>
            </div>
        </div>
    )
}


export { Shoppage };