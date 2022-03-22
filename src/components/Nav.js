import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStore, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    return (
        <nav className="nav-bar">
            <Link to="/" className="logo"><span><img src="/plantLogo.svg" alt="plant logo"/></span><span>Plantix</span></Link>
            <ul className="nav-links">
                <li><Link to="/" className="link"><span>Home</span><FontAwesomeIcon icon={faHome}/></Link></li>
                <li><Link to="shop" className="link"><span>Shop</span><FontAwesomeIcon icon={faStore}/></Link></li>
                <li><Link to="/" className="link"><span>0</span><FontAwesomeIcon icon={faCartShopping}/></Link></li>
            </ul>
        </nav>
    )
}

export default Nav;