import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav-bar">
            <h1><Link to="/" className="logo">LOGO</Link></h1>
            <ul className="nav-links">
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="shop" className="link">Shop</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;