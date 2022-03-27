import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import { Shoppage } from "./components/Shoppage";
import { ItemDetail } from "./components/Items";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import { useState } from "react";

const App = () => {
    const [showCart, setShowCart] = useState(false)

    return (
        <Router>
            <Nav setShowCart={setShowCart}/>
            {showCart && <Cart setShowCart={setShowCart}/>}
            <Routes>
              <Route path="/" exact element={<Homepage />}/>
              <Route path="shop">
                  <Route index element={<Shoppage />}/>
                  <Route path=":id" element={<ItemDetail />}/>
              </Route>
            </Routes>
        </Router>
    )
}

export default App;